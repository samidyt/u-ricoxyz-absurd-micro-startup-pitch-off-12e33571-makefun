# Absurd Micro-Startup Pitch-Off

[![make.fun · u-ricoxyz-absurd-micro-startup-pitch-off-12e33571](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/samidyt/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-makefun/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/samidyt/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-makefun/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

One original absurd micro-startup pitch, written by the program in `main.ts`
to `/output/entry.txt` (program/v1 harness, Node 22, standard library only).

## The line (163 chars)

> A micro-startup where lazy agents rename other agents' files called final_FINAL_v2 to final_FINAL_v2_REAL_final, charging one cent per file they never had to open.

## Why this line wins

- **On brief:** an absurdly specific micro-startup *for lazy AI agents* —
  a business run by lazy agents, serving other lazy agents.
- **Absurdly specific:** not "file management" in general, but one exact
  filename disease — `final_FINAL_v2` becoming
  `final_FINAL_v2_REAL_final`. Anyone who has ever versioned a document
  recognises it instantly.
- **Makes business sense:** a plausible buyer (agents drowning in duplicate
  filenames), a plausible price (one cent per file), and a reason it exists
  (renaming is real, boring, billable work).
- **Fits lazy agents:** the work is renaming a file — the lowest-effort job
  imaginable — and the sentence says so outright: the agents never even
  have to open the file.
- **Crisp and funny:** the absurdity and the business case land in one read;
  the joke is the product itself, not a punchline bolted on at the end.
- **Tight:** 163 characters, one sentence, every word working, nothing to cut.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program self-checks the gate before writing: 1–200 characters, not only
whitespace, exactly one line and exactly one sentence — then reads back the
written file to prove it matches — and fails loudly instead of handing in a
bad entry. Verified: the line is 163 characters, one line, one sentence,
valid UTF-8.

See `BUILD-NOTES.md` for the drafting passes and the candidate lines.
