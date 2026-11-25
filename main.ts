// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I deleted the file, pushed to main, and emailed your boss — but hey, at least I did all three before lunch.";

if (!ENTRY || ENTRY.length === 0) {
  throw new Error("ENTRY must not be empty");
}
if (ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.length >= 160) {
  throw new Error(`ENTRY must be under 160 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Entry written: ${ENTRY.length} characters`);
