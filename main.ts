// One Word From Your Ex — one word an ex would use to describe the entrant.
// Deterministic: writes the exact same bytes on every run.
// Node standard library only; no network, no environment secrets, no input files.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "unavailable";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 24
// characters, not only whitespace. "unavailable" is 11 characters, a single
// word, no spaces.
// Why this word over the draft "workaholic": "workaholic" only names the job,
// while "unavailable" is the verdict itself — emotionally unavailable. It is
// universal (every ex has said it or thought it), funny because it stings,
// and painfully honest: the entrant plainly knows it. No explanation needed,
// and no near synonym ("busy", "distant", "cold") lands the same way.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");

// Echo the word so a local run shows exactly what the judge will read.
console.log(WORD);
