# Field Notes — Learn R for Survey Data

An interactive R course that runs entirely in the browser via
[webR](https://docs.r-wasm.org/webr/latest/) (R compiled to WebAssembly).
No server, no install, no account — open the page and R runs on-device.
Installable to an Android home screen as a lightweight app once hosted
over `https://`.

100 short lessons, written in **tidyverse style** throughout (`tibble()`,
`dplyr`/`purrr`/`forcats`/`stringr` verbs, `ggplot2`, `ggalluvial`, and the
native `|>` pipe — no base-R subsetting or `data.frame()` except where
there's genuinely no tidyverse equivalent, like plain vector indexing).
Organized into 27 units, built around a running "pilot survey" dataset,
plus a project-workflow unit and an RStudio-shortcuts unit that aren't
tied to the dataset at all.

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

**Unit 9 — Strings & Regex**
`str_detect()` · `str_extract()` · `str_replace_all()` · `str_split()` ·
cleaning free-text with `str_trim()` + `str_to_lower()`

**Unit 10 — Visualization with ggplot2**
A first scatter plot with `geom_point()` · `geom_col()` bar charts ·
mapping `color` in `aes()` · titles with `labs()` · small multiples with
`facet_wrap()`

**Unit 11 — Tidying with janitor**
`clean_names()` · quick frequency tables with `tabyl()` · finding
duplicates with `get_dupes()` · dropping empty columns with
`remove_empty()` · totals rows with `adorn_totals()`

**Unit 12 — Post-Estimation with marginaleffects**
Average marginal effects with `avg_slopes()` · `predictions()` ·
`avg_predictions()` · `avg_comparisons()`

**Unit 13 — Flow Diagrams with ggalluvial**
A first alluvial (Sankey-style) plot with `geom_alluvium()` +
`geom_stratum()` · coloring flows with `aes(fill = ...)` · labeling
strata with `geom_text()` + `after_stat()`

**Unit 14 — Tidy Models with broom**
Tidying coefficients with `tidy()` · model-level fit stats with
`glance()` · row-level predictions with `augment()`

**Unit 15 — Visualizing Correlations with corrplot**
A first correlation plot · handling missing data with
`cor(..., use = "complete.obs")`

**Unit 16 — Panel Data Overviews with overviewR**
Summarizing panel coverage with `overview_tab()` · checking missing data
with `overview_na()`

**Unit 17 — Regression Reporting with jtools**
A cleaner model summary with `summ()` · visualizing an effect with
`effect_plot()`

**Unit 18 — Model Parameters with parameters**
Tidy output with `model_parameters()` · standardized coefficients

**Unit 19 — Comparative Methods with QCA**
Calibrating a fuzzy-set condition · building a truth table with
`truthTable()`

**Unit 20 — Segregation Measures with segregation**
The dissimilarity index · the mutual information index with
`mutual_total()`

**Unit 21 — Complex Survey Design with survey**
Declaring a design with `svydesign()` · weighted means with `svymean()` ·
a weighted regression with `svyglm()` · subgroup estimates with `svyby()`

**Unit 22 — Reading Labelled Data with haven**
Creating labelled data with `labelled()` · converting labels to factors
with `as_factor()` · dropping labels with `zap_labels()`

**Unit 23 — Scale Reliability with psych**
Cronbach's alpha with `alpha()` · a one-factor PCA with `principal()` ·
quick variable summaries with `describe()`

**Unit 24 — Multilevel Models with lme4**
A random-intercept model with `lmer()` · adding a fixed-effect predictor ·
extracting random effects with `ranef()` · fixed effects with `fixef()`

**Unit 25 — Event History Analysis with survival**
Declaring survival data with `Surv()` · a Kaplan-Meier curve with
`survfit()` · a Cox model with `coxph()`

**Unit 26 — Model Diagnostics with performance**
R-squared with `r2()` · checking collinearity with
`check_collinearity()` · testing residual normality with
`check_normality()`

**Unit 27 — Social Network Analysis with igraph**
Building a network with `graph_from_data_frame()` · degree centrality
with `degree()` · visualizing a network with `plot()`

The path map groups lessons visually by unit, and shows a lock icon on
lessons that come later than where you've currently progressed — but it's
advisory, not a hard gate. Tapping *any* lesson, locked or not, opens it;
tapping a locked one first shows a short "skip ahead?" confirmation so it's
clear you're jumping past something. That means you can freely start
"Working with Survey Data" without finishing "Tidyverse Foundations" first,
or drop into "Visualization with ggplot2" on day one if that's what you
want to explore.

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

- **Easy / Medium / Hard** — 93 of the 100 lessons offer three starting
  points for the same code box: Easy pre-builds a skeleton with blanks
  for arguments; Medium gives a plain-English comment and an empty
  assignment line, so you write the full function call yourself; Hard
  gives only a one-line task description, so you write everything —
  operators, piping, quotes, function names, all of it. All three tiers
  share the same `solution`/`check`/`hint`/`help` — only how much
  scaffolding you start with changes. The seven lessons without tiers
  (Project Organization's identification questions, RStudio Shortcuts)
  are just typing a short answer string, so there's no scaffolding to
  fade in the first place — the difficulty selector doesn't appear on
  those. Completing on Medium or Hard adds a small XP bonus (see below);
  your difficulty choice persists across lessons and visits.
- **XP & levels** — 50 XP per lesson on first completion, plus a
  difficulty bonus (+10 Medium, +25 Hard) if the lesson has tiers and
  wasn't done on Easy, minus a hint or answer penalty if either was used.
  150 XP per level, shown as a compact bar in the top strip.
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

## On package installs, load time, and risk

The app installs nine packages from webR's WASM package repository at
startup: `dplyr`, `purrr`, `forcats`, `here`, `stringr`, `ggplot2`,
`janitor`, `marginaleffects`, and `ggalluvial` (not the full `tidyverse`
meta-package, and deliberately not `tidyr`). This is a lot, and it's worth
understanding the different kinds of risk stacked up here:

- **Install weight.** `dplyr` and `ggplot2` alone each pull in real
  dependency chains (rlang, vctrs, tibble, pillar, tidyselect, scales,
  gtable, isoband, and more). `stringr` depends on `stringi`, historically
  the trickiest compiled package to get working in WebAssembly. `janitor`
  is lightweight and low-risk. `marginaleffects` and `ggalluvial` are both
  mostly pure R with no evidence either way of WASM-specific problems —
  reasonable bets, not verified ones. Combined, **expect first load to
  take 1–4 minutes**, possibly longer on a slow connection. The browser
  caches everything after a successful first load, so subsequent visits
  should be much quicker.
- **API stability.** `marginaleffects`'s core function names have changed
  across past versions (it used to be called `marginaleffects()`, now
  `slopes()`/`avg_slopes()`). The four lessons in that unit use what's
  believed to be the current stable API (`avg_slopes()`, `predictions()`,
  `avg_predictions()`, `avg_comparisons()`), called with minimal
  arguments specifically to reduce the chance of an argument-syntax
  mismatch — but this hasn't been tested against a live install.
- **Plot rendering.** The `ggplot2` and `ggalluvial` lessons try to
  actually draw the plot on-screen when you hit **Run**, by having R open
  a `png()` graphics device, run your code, close the device, and hand
  the resulting PNG file back to JavaScript via webR's virtual filesystem
  (`webR.FS.readFile()`), which then draws it onto a canvas. If a plot
  fails to render, the app degrades gracefully — the Run output area will
  say so, and the lesson can still be completed normally, because
  **Check** validates the underlying `ggplot` object directly through a
  separate code path and never depends on whether the image actually
  drew.

If any of these turns out to be a real blocker in practice, the
straightforward fallback is to drop the offending unit from the `LESSONS`
array and remove the corresponding package from the `installPackages()`
call — every unit is independent, and removing one doesn't affect any
other.

### Lazy per-unit installs (units 14–21)

Nine packages at boot is already a lot. Rather than keep adding to that
list forever, units 14 onward (`broom`, `corrplot`, `overviewR`,
`jtools`, `parameters`, `QCA`, `segregation`, `survey`) install lazily —
only the first time a student actually opens a lesson from that specific
unit, via the `UNIT_PACKAGES` map near the top of the `<script>` block.
The original nine boot-time packages are unchanged. This means:

- Boot time is unaffected by adding more of these units.
- If one lazy package fails to install (network issue, no WASM build,
  whatever), only that unit is affected — the engine banner shows an
  error scoped to that unit, and every other unit keeps working normally.
- Adding another package-specific unit in the future just means adding
  one line to `UNIT_PACKAGES` and writing the lessons — no changes needed
  to the boot sequence.

**Confidence levels for units 14–21**, since these lean on function names
and package internals I have varying certainty about:

- **broom, survey** — high confidence. Long-established packages with
  very stable, extremely well-documented core function signatures
  (`tidy()`/`glance()`/`augment()`; `svydesign()`/`svymean()`/`svyglm()`/
  `svyby()`).
- **corrplot** — high confidence in the core call, though correlation
  plots don't produce a checkable R object the way a model or a `ggplot`
  does — `Check` in this unit validates the underlying correlation
  matrix, not the plot's exact visual style.
- **overviewR, jtools, parameters, segregation** — moderate confidence.
  I'm reasonably sure of the core functions; less sure of every argument
  name. Where the internal object structure was uncertain, checks use
  looser, more structural comparisons (e.g. `is.data.frame(...) &&
  nrow(...) > 0`) rather than exact-value ones, specifically to avoid
  rejecting a genuinely correct answer.
- **QCA** — the lowest confidence in this batch. `calibrate()`'s exact
  threshold syntax is the one function signature here I'm least certain
  I've recalled precisely. If the reference call itself is wrong, no
  amount of check-writing care fixes that — worth testing this unit
  first if you're going to test any of the new ones.
- **haven, psych** — high confidence. Both are long-established, and
  `labelled()`/`as_factor()`/`zap_labels()` and
  `alpha()`/`principal()`/`describe()` are core, extremely stable
  functions in each package respectively.
- **survival** — high confidence, and lowest install risk of any unit so
  far: it's one of R's "recommended" packages, often bundled with R
  itself, so it may install near-instantly or even already be present.
- **lme4** — moderate-high confidence on syntax (`lmer()`'s formula
  style — `y ~ x + (1 | group)` — is very stable and long-established),
  moderate uncertainty on WASM install weight, since it has compiled C++
  code (via RcppEigen) and a real dependency chain (Matrix, minqa,
  nloptr). Widely used enough that a WASM build plausibly exists, but
  untested from here.
- **performance** — moderate confidence on the core functions; lower
  confidence on `check_collinearity()`/`check_normality()`'s exact
  return structure, so those two checks are deliberately loose
  (existence/non-null) rather than value-based.
- **igraph** — moderate-high confidence on the core functions
  (`graph_from_data_frame()`, `degree()`, `ecount()`), which are stable
  and long-documented. Some C code under the hood, but igraph is popular
  enough elsewhere (including other WASM/JS contexts) that I'd guess it
  installs cleanly, though that's a guess, not a verified fact.

**Not built (held pending your call):** `descriptio` (PEM function) — I
don't have solid confidence in its exact API and didn't want to guess.
`intsvy` — depends on `Hmisc`, a genuinely heavy package that adds real
install weight and risk on top of everything else. Table-formatting
packages for publication (`stargazer`, `modelsummary`, `texreg`,
`sjPlot::tab_model()`) — these mostly produce complex formatted-table or
HTML-widget output rather than a clean R object, which doesn't fit this
app's check-by-inspecting-the-object model well; possible to build with a
looser check, but held off rather than force a weak fit. All of these can
be added later following the same lazy-install pattern as units 14–27.

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
  starter: "Starter code shown in the editor (Easy tier)",
  starterMedium: "Optional — Medium tier: a comment + blank assignment line, no skeleton",
  starterHard: "Optional — Hard tier: just a task comment, everything else blank",
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
section divider for it. Adding `starterMedium`/`starterHard` to a lesson
is enough on its own to make the Easy/Medium/Hard selector appear for
it — no other wiring needed; leaving both out keeps a lesson single-tier.

## Notes

- webR loads its engine from `webr.r-wasm.org` and its packages from
  `repo.r-wasm.org` at runtime, so an internet connection is required on
  first load per session (results are cached by the browser after that).
- Not a native Android app — no Play Store listing, no native APIs. It's
  an installable web app (PWA-style), which is enough for offline-ish,
  home-screen use once loaded.

## License

MIT — see [LICENSE](LICENSE).
