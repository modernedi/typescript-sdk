import { rmSync } from "node:fs";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const packageDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDirectory = resolve(packageDirectory, "dist");

if (!distDirectory.startsWith(`${packageDirectory}${sep}`)) {
  throw new Error(`Refusing to clean SDK output outside ${packageDirectory}: ${distDirectory}`);
}

rmSync(distDirectory, { recursive: true, force: true });
