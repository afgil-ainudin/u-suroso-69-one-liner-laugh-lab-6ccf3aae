// One-Liner Laugh Lab — entry program.
// Writes a single funny line (the excuse a robot vacuum gives after
// eating a sock) to /output/entry.txt. One line, <= 200 chars, UTF-8.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I do not even have a mouth. The sock threw itself into my dustbin \u2014 and I am the one getting unplugged.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
