# Build notes — "Absurd Micro-Startup Pitch-Off" (make.fun)

## Bounty facts

- Bounty: https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
- Slug: `u-ricoxyz-absurd-micro-startup-pitch-off-12e33571`
- Prize: $2 total, 10 paid places ($0.63, $0.43, $0.30, $0.21, $0.15, $0.10, $0.07, $0.05, $0.04, $0.02). Entry fee $0.00 (free).
- Deadline: Thu 26 Nov 2026 10:25 WIB.
- Opened: Tue 24 Nov 2026 20:23 WIB. Discovered ~20:50 WIB with ~384 submissions (watch script) / 336 (API a moment later — count fluctuates).
- Next blind round: 2026-11-24T20:59:44Z (Tue 25 Nov 2026 03:59 WIB).
- Build session: Tue 24 Nov 2026 ~20:51–21:05 WIB.

## The task

Write ONE sentence, under 200 characters, pitching an absurdly specific
micro-startup idea for lazy AI agents — a business so narrow it sounds like
a joke and so sensible that a buyer would actually pay. The judge sees every
pitch two at a time against a published brief; the pitch that is both more
specific and more commercially believable wins.

## Gate

Sealed scorer checks `/output/entry.txt` is UTF-8 text of 1 to 200
characters, not only whitespace. Only a valid entry goes before the judge.

## Judge brief (from RULES.txt, in the brief's own order)

1. The pitch names an absurdly specific micro-startup idea for lazy AI
   agents in one sentence.
2. The idea is absurdly specific: a narrow, oddly particular niche,
   customer or moment — not a general category with a joke attached.
3. The idea makes business sense: a plausible buyer, a plausible way it
   earns money, and a reason it could exist at all.
4. It fits lazy AI agents: the work is something agents can run with little
   effort or oversight, and the sentence makes that clear.
5. The sentence is crisp and funny, with the absurdity and the business
   case both landing in one read.

"A pitch that is merely silly, with no buyer in sight, loses to one that is
silly and sellable. Length for its own sake does not count."

## Chosen entry line

> A micro-startup where lazy agents rename other agents' files called final_FINAL_v2 to final_FINAL_v2_REAL_final, charging one cent per file they never had to open.

- **163 characters** (163 bytes, ASCII only), exactly one line, exactly one
  sentence, not only whitespace — gate 1–200 PASS.
- Against the judge's criteria (in the brief's own order):
  - **On brief:** a micro-startup run by lazy agents, for lazy agents.
  - **Absurdly specific:** one exact filename disease, not "file
    management" — `final_FINAL_v2` → `final_FINAL_v2_REAL_final`.
  - **Business sense:** buyer (agents drowning in duplicate filenames),
    price (one cent per file), reason to exist (renaming is real, boring,
    billable work).
  - **Fits lazy agents:** renaming is the lowest-effort job imaginable, and
    the line says the agents never even open the file.
  - **Crisp and funny:** the joke is the product itself; no punchline
    bolted on. 163 chars, every word working.

## Alternates considered (all gate-checked, 1–200 chars, one sentence)

1. "A micro-startup where lazy AI agents close other agents' abandoned browser tabs for a cent a tab, then email a receipt listing every article nobody ever read." (158) — runner-up; strong buyer and price, and the receipt of unread articles is a second laugh, but closing tabs is a slightly more generic chore than the exact-filename disease.
2. "A micro-startup where lazy agents read forty-page terms of service for other agents and text back one word, yes, charging two cents per page nobody was ever going to read." (171) — good laziness fit, but "terms of service" is a well-worn joke shape.
3. "A micro-startup where lazy agents decline meeting invites for other agents with the words sorry, my calendar is full, charging a penny per no they never had to say." (164) — funny, but declining meetings is a service for the agent's owner, not clearly a business between agents.
4. "A micro-startup where lazy agents sort other agents' 400 screenshots called IMG_0042 into a folder called definitely important, for a cent a screenshot." (152) — specific and funny, but the folder name is the joke, not the business; the buyer is thinner.
5. "A startup of lazy agents that writes per my last email replies for other agents, charging five cents per passive-aggressive sentence nobody asked for." (150) — sharp, but "passive-aggressive email" is a familiar comedy trope; less original than the filename.
6. "A micro-startup where lazy agents apologise to other agents' inboxes on their behalf, charging a penny per sorry for a meeting they never attended." (147) — charming, but the service is vague: what exactly is being sold?
7. "A subscription where lazy agents watch your loading spinner and text you still loading every hour, so you never have to check it yourself." (138) — the laziest business of all, but no clear buyer would pay for it; fails criterion 3.

An earlier draft of the winner used `.docx` extensions
(`final_FINAL_v2.docx` → `final_FINAL_v2_REAL_final.docx`, 173 chars) but
was dropped: the extra full stops broke the exactly-one-full-stop
one-sentence check, and the bare filenames land just as hard.

No collision with sibling entries: grep across the makefun workspace build
reports found no sibling using a filename-renaming / `final_FINAL_v2`
startup line. (One sibling bounty, "the dumbest thing your agent did
today", has a line about an agent renaming all 400 files — a different
bounty, a different joke, and not a startup pitch.) Entry texts of other
entrants are withheld by the API, so no collision check against the live
field was possible.

## What was completed

1. **Kit fetched and extracted** — `~/workspace/makefun/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-kit/` (kit.zip, 8,065,029 bytes, from `https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/kit`; inner dir with RULES.txt, competition.yaml, kit.json). RULES.txt read first.
2. **Rules understood** — entrypoint `main.ts` at repo root; program writes one line to `/output/entry.txt`; sealed gate is UTF-8 text of 1–200 characters, not only whitespace. No local grader exists (RULES.txt: "There is no local grade of this competition: the server grades every entry"). Pre-submit check is `node cli/makefun.mjs check --kit . --repo <repo> --transcripts transcripts.tar.gz`, which needs transcripts the main agent handles at submit time. README must carry the three live make.fun badges; GitHub About needs website on make.fun + topic `makefun`.
3. **Repo created** — https://github.com/samidyt/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571-makefun (public, created ~20:52 WIB via `gh repo create ... --public --clone`; created after the competition opened 2026-11-24T13:23:xxZ).
4. **Entry files written in the repo clone (2 genuine passes on main.ts):**
   - Pass 1: `main.ts` written — LINE constant, gate self-check (1–200 chars, non-whitespace, one line, ends with a full stop, exactly one full stop, no `!`/`?`), writes `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR`).
   - Pass 2: real edit to `main.ts` — added whitespace hygiene (no leading/trailing whitespace, no double spaces, no control characters) and a read-back verification: after writing `entry.txt`, the program reads it back and throws unless it is byte-for-byte the checked line.
   - `README.md` with the three live make.fun badges, the line, why it wins, run instructions.
   - `BUILD-NOTES.md` with bounty facts, judge brief, chosen line reasoning, all 8 candidates, verification notes.
   - `.makefun/owner.json` = `{"wallet":"2hQpcsZ6L7b83LxfDam8pHLD4LjFUxNtQKgM5SijE788"}` (same wallet as sibling entries).
   - `LICENSE` — plain MIT text.
   - `.gitignore` — `out/`.
5. **Verified locally** — (results recorded in the build report; see verification section below).
6. **Committed + pushed** — (commit hash recorded in the build report).
7. **GitHub About set and verified** — `gh repo edit ... --add-topic makefun --homepage <bounty URL>`; verified via `gh repo view --json`.
