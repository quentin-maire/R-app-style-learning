# Field Notes — Learn R for Survey Data

A single-page, DataCamp-style interactive R course that runs entirely in the
browser via [webR](https://docs.r-wasm.org/webr/latest/) (R compiled to
WebAssembly). No server, no install, no account — open the page and R runs
on-device. Installable to an Android home screen as a lightweight app once
hosted over `https://`.

24 short lessons, written in **tidyverse style** throughout (`tibble()`,
`dplyr` verbs, and the native `|>` pipe — no base-R subsetting or `data.frame()`
except where there's genuinely no tidyverse equivalent, like plain vector
indexing). Organized into four units, built around a running "pilot survey"
dataset. At roughly one lesson per weekday, this spans about a month.

**Unit 1 — Tidyverse Foundations**
Vectors & indexing · `tibble()` + `select()` · `filter()` · a function +
`purrr::map_dbl()` · `summarise()` · `mutate()` + `if_else()`

**Unit 2 — Working with Survey Data**
`arrange()` · missing data in a pipeline · `case_when()` · cross-tabs with
`count()` · `left_join()` · a combined-condition `filter()` checkpoint

**Unit 3 — Exploring & Summarizing**
`count()` + proportions · `group_by()` + `summarise()` · multiple grouped
summaries with `n()` · quantiles · standardizing with `mutate()` ·
correlation with `summarise()` + `pull()`

**Unit 4 — Applied Survey Techniques**
Reverse-coding with `mutate()` · a composite scale with `across()` · a
two-group t-test · simple linear regression · reading R² · a capstone
`group_by()` + `summarise()` report across two outcomes

The path map groups lessons visually by unit, and each unit unlocks
progressively — you can't jump ahead until the previous lesson is done.

### On tidyverse and load time

The app installs `dplyr` and `purrr` from webR's WASM package repository at
startup (not the full `tidyverse` meta-package, and deliberately not `tidyr`
or `stringr`, whose dependency chains are heavier and riskier in WASM).
`dplyr` alone pulls in a real dependency chain (rlang, vctrs, tibble, pillar,
tidyselect, cli, glue, and more), so **first load is slower than a base-R
build — expect 30–60 seconds** before the engine banner turns green. The
browser caches these files after the first successful load, so subsequent
visits should be quicker.

Each lesson has instructions, an optional hint, an editable code console, a
**Run** button (prints console output), and a **Check** button (validates
the student's variables against an expected answer).

### Gamification

- **Skill path** — lessons sit on a winding path; each unlocks only once the
  previous one is complete.
- **XP & levels** — 50 XP per lesson on first completion, minus a small
  penalty if the hint was opened. 150 XP per level.
- **Attempts (hearts)** — 3 per lesson per attempt; a wrong check costs one.
  Hit **Reset** to refill and try again — nothing is ever permanently locked
  out.
- **Streak** — counts consecutive calendar days with at least one lesson
  completed.
- **Daily goal ring** — fills in once a lesson is completed that day.
- **Completion celebration** — a short overlay confirms XP earned and any
  level-up.

All progress (completed lessons, XP, streak, daily goal) is saved via the
app's own storage and persists across visits.

## Hosting on GitHub Pages

1. Push this repo to GitHub as-is (`index.html` at the root).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
4. GitHub will publish at `https://<username>.github.io/<repo-name>/`
   (usually live within a minute or two).
5. Open that URL in Chrome on Android → **⋮ → Add to Home screen / Install
   app**. It now behaves like a standalone app.

No build step, no dependencies to install — it's a static file.

## Editing or adding lessons

All content lives in the `LESSONS` array near the top of the `<script>`
block in `index.html`. Each lesson is one object:

```js
{
  title: "Short title",
  short: "1-2 word label shown on the path map node",
  instructions: "HTML string shown to the student",
  preload: "Optional note describing preloaded variables",
  setup: "Optional R code run silently before the student sees the lesson",
  starter: "Starter code shown in the editor",
  hint: "Shown when the student taps 'Show hint'",
  check: "R expression that must evaluate to TRUE for the lesson to pass"
}
```

Add, remove, or reorder objects in the array — nothing else needs to
change. The `check` expression runs after the student's code, so it can
reference any variable the student was asked to create.

## Notes

- Uses **base R only** (no tidyverse) to keep load times fast on mobile —
  webR has to download a WASM binary for every package used.
- webR loads its engine from `webr.r-wasm.org` at runtime, so an internet
  connection is required on first load per session (results are cached by
  the browser after that).
- Not a native Android app — no Play Store listing, no native APIs. It's a
  installable web app (PWA-style), which is enough for offline-ish,
  home-screen use once loaded.

## License

MIT — see [LICENSE](LICENSE).
