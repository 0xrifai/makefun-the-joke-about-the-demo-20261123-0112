// The joke about the demo — make.fun bounty entry.
// A one-line joke about working beside an AI coding agent.
// Runs with no network, no randomness, no Date: the same
// input always produces the same single line in /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";
const MIN_CODE_POINTS = 1;
const MAX_CODE_POINTS = 280;

// The joke, built from its setup and its punchline so each
// half can be read — and tuned — on its own.
const SETUP =
  "My AI coding agent demoed flawlessly today — wrote the feature, " +
  "fixed the bug, shipped it";
const PUNCHLINE = "and only kept me on stage so the audience had a human to blame.";

const JOKE = `${SETUP} — ${PUNCHLINE}`;

// Count Unicode code points, not UTF-16 code units, so an
// em dash or emoji counts as one character each.
function codePointCount(text: string): number {
  return [...text].length;
}

function validate(joke: string): void {
  if (joke.trim().length === 0) {
    throw new Error("joke must not be only white space");
  }
  if (joke !== joke.trim()) {
    throw new Error("joke must not start or end with white space");
  }
  if (joke.includes("\n") || joke.includes("\r")) {
    throw new Error("joke must be a single line");
  }
  const count = codePointCount(joke);
  if (count < MIN_CODE_POINTS || count > MAX_CODE_POINTS) {
    throw new Error(`joke must be 1-280 code points, got ${count}`);
  }
}

function main(): void {
  validate(JOKE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");
  console.log(`Wrote ${codePointCount(JOKE)} code points to ${OUTPUT_PATH}`);
}

main();
