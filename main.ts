// Absurd Micro-Startup Pitch-Off — make.fun entry (program/v1).
//
// The harness runs `node /bot/main.ts` (Node 22, standard library only, no
// network). The program writes one absurd micro-startup pitch to
// /output/entry.txt. Outside the grader's container, MAKEFUN_OUTPUT_DIR
// stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1–200
// characters, not only whitespace. This program enforces the gate on its
// own output and fails loudly instead of handing in a bad entry.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "A micro-startup where lazy agents rename other agents' files called final_FINAL_v2 to final_FINAL_v2_REAL_final, charging one cent per file they never had to open.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Gate self-check: 1–200 chars, not only whitespace, exactly one sentence.
// A single sentence means exactly one sentence-ending mark, and it must be
// the final character — no "Mr. Smith went..." smuggling a second sentence in.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) throw new Error(`entry is ${chars} chars, gate needs 1–200`);
if (!/\S/.test(LINE)) throw new Error('entry is only whitespace');
if (LINE.includes('\n')) throw new Error('entry must be exactly one line');
if (!/\.$/.test(LINE)) throw new Error('entry must be exactly one sentence ending with a full stop');
if ((LINE.match(/\./g) ?? []).length !== 1) throw new Error('entry must contain exactly one full stop');
if (/[!?]/.test(LINE)) throw new Error('entry must contain no other sentence-ending punctuation');
// No leading/trailing whitespace and no double spaces: the gate counts every
// character, so padding would waste budget and look sloppy to the judge.
if (LINE !== LINE.trim()) throw new Error('entry must not start or end with whitespace');
if (LINE.includes('  ')) throw new Error('entry must not contain double spaces');
// No control characters other than the line itself: the entry is one clean line.
if (/[\u0000-\u001f]/.test(LINE)) throw new Error('entry must not contain control characters');

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
// Read back what was written and prove it is byte-for-byte the checked line:
// a write that silently mangled the entry must fail here, not at the gate.
const written = readFileSync(join(out, 'entry.txt'), 'utf8');
if (written !== LINE) throw new Error('entry.txt read-back does not match the checked line');
console.log(`wrote entry.txt (${chars} chars)`);
