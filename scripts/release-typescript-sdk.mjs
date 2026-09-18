#!/usr/bin/env node

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
const readBundledIntegrationApi = () => readFileSync(new URL('../openapi.yaml', import.meta.url));
import { assertPackageLock, createNpmClient, parseArgs, parseSemver, redactSecrets, releaseNpmPackage, verifyDeployedOpenApi } from './npm-package-release.mjs';

const SCRIPT_PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_PACKAGE_DIRECTORY = SCRIPT_PROJECT_ROOT;
const EXPECTED_PACKAGE_NAME = '@modernedi/sdk';
const RELEASE_TAG = 'latest';
const DEFAULT_NPM_REGISTRY = 'https://registry.npmjs.org/';
async function main() {
  const options = parseArgs(process.argv.slice(2), DEFAULT_PACKAGE_DIRECTORY);
  if (options.help) {
    printHelp();
    return;
  }

  const packageDirectory = path.resolve(options.packageDirectory);
  const npm = createNpmClient({ packageDirectory });
  const result = await releaseTypeScriptSdk(
    {
      packageDirectory,
      dryRun: options.dryRun,
      planOnly: options.planOnly,
      expectedVersion: options.expectedVersion,
    },
    { npm },
  );
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}

async function releaseTypeScriptSdk(options = {}, dependencies = {}) {
  return releaseNpmPackage({
    packageName: EXPECTED_PACKAGE_NAME,
    packageLabel: 'SDK',
    defaultPackageDirectory: DEFAULT_PACKAGE_DIRECTORY,
    assertManifest: assertReleaseManifest,
    assertLock: assertPackageLock,
    assertTrustedRuntime: assertTrustedPublishingRuntime,
    plan(packageSpec) {
      return [
        'verify SDK source, generated code, tests, examples, and package contents',
        `pack exact ${packageSpec} tarball and capture its npm integrity`,
        'install and import the exact local tarball before any registry mutation',
        'require the existing public package and a strictly older latest version',
        `publish the exact tarball directly under ${RELEASE_TAG} using npm Trusted Publishing`,
        're-query exact integrity and latest after either success or an ambiguous failure',
        'install and import the exact registry version in a second clean temporary project',
      ];
    },
    async verifyPrerequisites({ dependencies: releaseDependencies }) {
      return {
        deployedOpenApi: await verifyDeployedOpenApi({
          fetch: releaseDependencies.fetch ?? globalThis.fetch,
          readLocalFile: releaseDependencies.readLocalOpenApi
            ?? readBundledIntegrationApi,
        }),
      };
    },
    missingPackageMessage(packageSpec) {
      return `${EXPECTED_PACKAGE_NAME} is missing from public npm. Restore or investigate the established package before publishing ${packageSpec}.`;
    },
  }, options, dependencies);
}

function assertReleaseManifest(manifest) {
  if (manifest?.name !== EXPECTED_PACKAGE_NAME) {
    throw new Error(`Refusing to publish package ${String(manifest?.name)}; expected ${EXPECTED_PACKAGE_NAME}.`);
  }
  parseSemver(manifest.version);
  if (manifest.repository?.type !== 'git'
      || manifest.repository?.url !== 'git+https://github.com/modernedi/typescript-sdk.git'
      || manifest.repository?.directory !== undefined) {
    throw new Error(`${EXPECTED_PACKAGE_NAME} must declare its public package repository.`);
  }
  if (manifest.private === true) {
    throw new Error(`${EXPECTED_PACKAGE_NAME} is marked private and cannot be published.`);
  }
  if (manifest.publishConfig?.access !== 'public') {
    throw new Error(`${EXPECTED_PACKAGE_NAME} must declare publishConfig.access as public.`);
  }
  if (manifest.publishConfig?.registry !== DEFAULT_NPM_REGISTRY) {
    throw new Error(
      `${EXPECTED_PACKAGE_NAME} must declare publishConfig.registry as exactly ${DEFAULT_NPM_REGISTRY}.`,
    );
  }
  const credentialFields = Object.keys(manifest.publishConfig ?? {})
    .filter((name) => /auth|password|token|username/i.test(name));
  if (credentialFields.length > 0) {
    throw new Error(
      `${EXPECTED_PACKAGE_NAME} publishConfig must not contain credential fields: ${credentialFields.join(', ')}.`,
    );
  }
  const unsafeLifecycleScripts = [
    'preinstall',
    'install',
    'postinstall',
    'prepublish',
    'preprepare',
    'prepare',
    'postprepare',
  ].filter((name) => Object.hasOwn(manifest.scripts ?? {}, name));
  if (unsafeLifecycleScripts.length > 0) {
    throw new Error(
      `${EXPECTED_PACKAGE_NAME} must not declare lifecycle scripts that can run during consumer installation `
      + `or source preparation: ${unsafeLifecycleScripts.join(', ')}. Build distributable files with prepack instead.`,
    );
  }
}

function assertTrustedPublishingRuntime(environment) {
  const expected = {
    GITHUB_ACTIONS: 'true',
    GITHUB_REPOSITORY: 'modernedi/typescript-sdk',
    GITHUB_REF: 'refs/heads/main',
    GITHUB_WORKFLOW_REF:
      'modernedi/typescript-sdk/.github/workflows/publish.yml@refs/heads/main',
  };
  const mismatches = Object.entries(expected)
    .filter(([name, value]) => environment?.[name] !== value)
    .map(([name]) => name);
  for (const name of ['ACTIONS_ID_TOKEN_REQUEST_URL', 'ACTIONS_ID_TOKEN_REQUEST_TOKEN']) {
    if (typeof environment?.[name] !== 'string' || environment[name].trim() === '') {
      mismatches.push(name);
    }
  }
  if (mismatches.length > 0) {
    throw new Error(
      `Refusing new SDK publication outside the trusted ModernEDI GitHub Actions workflow; `
      + `invalid or missing runtime fields: ${mismatches.join(', ')}.`,
    );
  }
}

function printHelp() {
  process.stdout.write(`Verify and publish the exact @modernedi/sdk tarball safely.

Usage:
  node scripts/release-typescript-sdk.mjs [options]

Options:
  --package-directory <path>  SDK package directory (default: ${DEFAULT_PACKAGE_DIRECTORY}).
  --expected-version <semver> Require package.json to declare the intended release version.
  --dry-run                   Verify, pack, and inspect registry state without mutating it.
  --plan-only                 Read package metadata and print the release plan without running npm.
  --help                      Show this help.

The release never accepts credentials or registry overrides on its command line and never prints
npm's environment. Immutable versions are installed locally before mutation, published directly
under "latest" using Trusted Publishing,
verified against public npm, and installed again from the registry.
`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    process.stderr.write(`${redactSecrets(error instanceof Error ? error.message : String(error))}\n`);
    process.exitCode = 1;
  });
}


export { assertReleaseManifest, assertTrustedPublishingRuntime, releaseTypeScriptSdk };
export { assertPackageLock, assertPackedPackage, compareSemver, createNpmClient, parseArgs, parseSemver, redactSecrets, releaseNpmPackage, verifyDeployedOpenApi } from './npm-package-release.mjs';
