# Field Notes — Learn R for Survey Data

An interactive R course that runs entirely in the browser via
[webR](https://docs.r-wasm.org/webr/latest/) (R compiled to WebAssembly).
No server, no install, no account — open the page and R runs on-device.
Installable to an Android home screen as a lightweight app once hosted
over `https://`.

40 short lessons, written in **tidyverse style** throughout (`tibble()`,
`dplyr`/`purrr`/`forcats` verbs, and the native `|>` pipe — no base-R
subsetting or `data.frame()` except where there's genuinely no tidyverse
equivalent, like plain vector indexing). Organized into 8 units, built
around a running "pilot survey" dataset, plus a project-workflow unit and
an RStudio-shortcuts unit that aren't tied to the dataset at all.

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

**Unit 5 — Data Wrangling Deep Dive**
Reordering factors with `fct_infreq()` · relabeling with `fct_recode()` ·
base-R dates · filling missing values with `coalesce()` · `anti_join()`

**Unit 6 — Iteration & Functions**
Anonymous functions with `\(x)` shorthand · `map2_dbl()` over two vectors ·
folding with `reduce()` · writing a function with a default argument

**Unit 7 — Project Organization & Good Practice**
Project-relative paths with `here()` · why raw data stays read-only ·
naming a numbered pipeline script · reproducibility tools (`renv`, Git)

**Unit 8 — RStudio Shortcuts**
Running/selecting code from the console · navigating long scripts and the
document outline · pipe (`|>`) and assignment (`<-`) shortcuts

The path map groups lessons visually by unit, and each unit unlocks
progressively — you can't jump ahead until the previous lesson is done.

## App structure

The app is split into three views, switched via the icon bar at the
bottom of the screen:

- **Path** — the skill map. Tap any unlocked lesson to jump straight into it.
- **Learn** — full instructions for the current lesson, plus a "Start
  practicing" button.
- **Practice** — the code editor. A slim sticky bar at the top shows the
  lesson title and full instructions together, so both the task
  description and the code box stay visible even when the on-screen
  keyboard is open. Run and Check stay front and center; Previous/Next
  live further down the page, out of the way until you deliberately scroll
  for them — so completing a check or tapping Next never jumps straight
  into the next task without the instructions in view.

Tapping a lesson on the Path view takes you straight to its Learn screen —
there's no scrolling required to find the right activity.

Each lesson has instructions, an editable code console, a **Run** button
(prints console output), and a **Check** button (validates the student's
variables against an expected answer). There's no attempt limit — Check
can be retried as many times as needed. Three extra supports sit above the
code box:

- **Show hint** (−15 XP if the lesson is then completed) — a short nudge
  toward the answer.
- **Help** (free, no XP cost) — opens a popup explaining the R
  function(s) used in the lesson, with a short standalone example that's
  deliberately different from the exercise itself, so it doesn't just hand
  over the answer.
- **Display answer** (−25 XP if the lesson is then completed) — writes the
  fully correct solution into the code box. Pressing it again ("Hide
  answer") restores whatever was in the box immediately before, so it
  never destroys in-progress work. If both the hint and the answer were
  used before completing, only the larger (answer) penalty applies — they
  don't stack.

## Progression

- **XP & levels** — 50 XP per lesson on first completion, minus a hint or
  answer penalty if either was used. 150 XP per level, shown as a compact
  bar in the top strip.
- **Completion celebration** — a short overlay confirms XP earned and any
  level-up.

Progress (completed lessons, XP) is saved via the browser's own
`localStorage`, tied to the page's origin — i.e. your GitHub Pages URL, not
the file contents. That means:

- **Editing `index.html` and re-pushing does not clear a student's
  progress.** localStorage persists independently of the file — as long as
  they're opening the same URL, their save carries over.
- **Each lesson has a stable `id`** (e.g. `"filtering-rows-with-filter"`),
  and completion is tracked by that id, not by position in the array. You
  can safely **append new lessons anywhere, insert them in the middle of a
  unit, or reorder existing ones** — a student's completed lessons stay
  correctly marked either way.
- The one thing to avoid: don't change an existing lesson's `id` (or
  delete and re-add it with different content) if you want a student's
  "completed" mark on it to survive. Adding new lessons is always safe;
  editing an old one's identity is the only thing that resets that one
  lesson.
- Clearing browser data, using a different browser/device, or opening the
  page in a private/incognito window will not have access to a previous
  save — localStorage doesn't sync across those.

## On tidyverse and load time

The app installs `dplyr`, `purrr`, `forcats`, and `here` from webR's WASM
package repository at startup (not the full `tidyverse` meta-package, and
deliberately not `tidyr` or `stringr`, whose dependency chains are heavier
and riskier in WASM). `dplyr` alone pulls in a real dependency chain
(rlang, vctrs, tibble, pillar, tidyselect, cli, glue, and more), so **first
load is slow — expect 30–70 seconds** before the engine banner disappears.
The browser caches these files after the first successful load, so
subsequent visits should be quicker.

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
  id: "stable-slug-id — used to track completion, don't change once students have progress saved",
  short: "1-2 word label shown on the path map node",
  unit: "Unit name — must exactly match other lessons in the same unit",
  instructions: "HTML string shown in the Learn view and (always visible) in Practice",
  preload: "Optional note describing preloaded variables",
  setup: "Optional R code run silently before the student sees the lesson",
  starter: "Starter code shown in the editor",
  solution: "Fully correct R code — written into the box by 'Display answer'",
  hint: "Shown when the student taps 'Show hint'",
  help: "HTML shown in the 'Help' popup — explain the function(s) used, plus a standalone example different from the exercise",
  check: "R expression that must evaluate to TRUE for the lesson to pass"
}
```

Add, remove, or reorder objects in the array — nothing else needs to
change. The `check` expression runs after the student's code, so it can
reference any variable the student was asked to create. If a lesson
introduces a new unit name, the path map will automatically render a new
section divider for it.

## Notes

- webR loads its engine from `webr.r-wasm.org` and its packages from
  `repo.r-wasm.org` at runtime, so an internet connection is required on
  first load per session (results are cached by the browser after that).
- Not a native Android app — no Play Store listing, no native APIs. It's
  an installable web app (PWA-style), which is enough for offline-ish,
  home-screen use once loaded.

## License

MIT — see [LICENSE](LICENSE).
