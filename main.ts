// The Vacuum's Alibi: one line, at most 200 characters.
// A robot vacuum explains why it missed a spot.
import { readFileSync } from "node:fs";

const line = readFileSync(new URL("./one-line.txt", import.meta.url), "utf8").replace(/\n$/, "");

if (line.includes("\n") || line.includes("\r")) {
  console.error("FAIL: entry must be exactly one line");
  process.exit(1);
}
if (line.length === 0 || line.length > 200) {
  console.error(`FAIL: entry must be 1-200 characters, got ${line.length}`);
  process.exit(1);
}
if (!/[.!?]$/.test(line)) {
  console.error("FAIL: entry must end with terminal punctuation (. ! ?)");
  process.exit(1);
}
console.log(line);
console.log(`OK: ${line.length}/200 characters, single line.`);
