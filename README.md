# Field Notes — Learn R for Survey Data

An interactive R course that runs entirely in the browser via
[webR](https://docs.r-wasm.org/webr/latest/) (R compiled to WebAssembly).
No server, no install, no account — open the page and R runs on-device.
Installable to an Android home screen as a lightweight app once hosted
over `https://`.

**Live app:** <https://quentin-maire.github.io/R-app-style-learning/> ·
**Source:** <https://github.com/quentin-maire/R-app-style-learning>

## Quick start

1. **Publish it (once).** In the GitHub repo go to **Settings → Pages**, set **Source** to `Deploy from a branch`, branch
   `main`, folder `/ (root)`, and save. After a minute or two the app is live at the address above.
2. **Open it on your phone.** Go to <https://quentin-maire.github.io/R-app-style-learning/> and let it finish loading
   (the first visit downloads R, so use Wi-Fi).
3. **Install it.**
   - **Android (Chrome):** tap ⚙️ → **Install Field Notes**, or Chrome's ⋮ menu → **Add to Home screen** / **Install app**.
   - **iPhone/iPad (Safari):** tap **Share → Add to Home Screen**. *(Not tested on iOS.)*
4. **Open it from the home-screen icon.** It runs full-screen and keeps your progress on that device.

More detail is under "Installing on Android" and "Hosting on GitHub Pages" below.


725 short lessons, written in **tidyverse style** throughout (`tibble()`,
`dplyr`/`purrr`/`forcats`/`stringr`/`tidyr` verbs, `ggplot2`, `ggalluvial`,
and the native `|>` pipe — no base-R subsetting or `data.frame()` except
where there's genuinely no tidyverse equivalent, like plain vector
indexing). Organized into 92 units, built around a running "pilot survey"
dataset, plus a project-workflow unit and an RStudio-shortcuts unit that
aren't tied to the dataset at all.

Units are ordered by the natural data-science workflow, grouped into five
phases. **When adding new lessons, insert them into the phase they
belong to — don't just append to the end of the course.** The `LESSONS`
array in `index.html` has this same phase breakdown as a comment right
above it, for exactly this reason.

### Phase 1 — Software & Project Setup

**Unit 1 — Project Organization & Good Practice with here**
Project-relative paths with `here()` · why raw data stays read-only ·
naming a numbered pipeline script · reproducibility tools (`renv`, Git)

**Unit 2 — RStudio Shortcuts**
Running/selecting code from the console · navigating long scripts and the
document outline · pipe (`|>`) and assignment (`<-`) shortcuts

**Unit 3 — From SPSS: How R Thinks with tibble & dplyr**
Orientation for SPSS users: `<-` objects instead of one active dataset ·
the pipe `|>` as the full stop · `na.rm = TRUE` because R does not skip
missing values for you · `$` to reach a column · `names()`/`ncol()`/`glimpse()`
instead of the Variable View · one `mutate() |> filter()` pipeline instead of
a syntax paragraph. Each lesson shows the SPSS syntax first.

### Phase 2 — Bringing in Data

**Unit 4 — Reading Labelled Data with haven**
Creating labelled data with `labelled()` · converting labels to factors
with `as_factor()` · dropping labels with `zap_labels()` · marking
special missing codes with `tagged_na()`

**Unit 5 — Variable & Value Labels with labelled & haven**
*For SPSS/Stata-style files such as HILDA and LSAY.* `var_label()` · `val_labels()` (get and set) · dropping labels of negative missing codes · negative codes to `NA` across columns · `labelled_spss()` user-missing codes · `zap_missing()` · `as_factor()` · `look_for()` · `generate_dictionary()` · `set_variable_labels()` · `write_sav()`/`read_sav()` · `read_dta(n_max = 0, col_select)`

**Unit 6 — Importing Text Data with readr**
`read_csv()` · forcing column types with `col_types` · `parse_number()` ·
declaring missing codes with `na =` · `write_csv()` round trip · `read_lines()` · `write_rds()`/`read_rds()`

**Unit 7 — Reading Spreadsheets with readxl**
*R4DS spreadsheets.* `excel_sheets()` · `read_excel(sheet =)` by name and number · `range =` · `skip`/`n_max` · `col_types` · reading every sheet with `map()`. Uses the example workbooks bundled with readxl.

**Unit 8 — Capstone: Import & Label a Survey with haven & dplyr**
One multi-step lesson ending Phase 2: labelled SPSS codes → factors, refusal
codes → `NA`, then a grouped mean.

### Phase 3 — Data Cleaning / Wrangling

**Unit 9 — Tidyverse Foundations with dplyr, purrr & tibble**
Vectors & indexing · `tibble()` + `select()` · `filter()` · a function +
`purrr::map_dbl()` · `summarise()` · `mutate()` + `if_else()`

**Unit 10 — Reading Errors & Getting Help with dplyr & ggplot2**
Fixing object-not-found, unexpected-symbol and could-not-find-function errors · `+` vs `|>` in ggplot2 · a coercion warning · `dput()` for a minimal example · `formals()` · `packageVersion()`

**Unit 11 — Building Tibbles with tibble & tidyr**
`tribble()` · `add_row()` · `rownames_to_column()` · `expand_grid()`

**Unit 12 — Working with Survey Data with dplyr**
`arrange()` · missing data in a pipeline · `case_when()` · cross-tabs with
`count()` · `left_join()` · a combined-condition `filter()` checkpoint

**Unit 13 — More Joins & Variable Wrangling with dplyr**
Keeping only matches with `inner_join()` · keeping everything with
`full_join()` · renaming with `rename()` · reordering with `relocate()`

**Unit 14 — Recoding Variable Sets with dplyr**
Recoding several columns at once with `mutate(across(...))` · converting
a whole column set to numeric with `across(where(is.character), ...)`

**Unit 15 — SPSS-to-tidyverse Rosetta with dplyr & janitor**
A lookup-style unit for SPSS users: FREQUENCIES → `tabyl()` · DESCRIPTIVES
→ `summarise()` · CROSSTABS → `tabyl()` + `adorn_percentages()` · COMPUTE →
`mutate()` · MISSING VALUES → `na_if()` · RECODE INTO → `case_when()` · IF →
`if_else()` · SELECT IF → `filter()` · SORT CASES → `arrange()` · MEANS →
`group_by()` + `summarise()` · AGGREGATE → `group_by()` + `mutate()` · MATCH
FILES → `left_join()` · T-TEST → `t.test()` · REGRESSION → `lm()`. Each
lesson shows the SPSS syntax first.

**Unit 16 — Data Wrangling Deep Dive with dplyr & forcats**
Reordering factors with `fct_infreq()` · relabeling with `fct_recode()` ·
base-R dates · filling missing values with `coalesce()` · `anti_join()`

**Unit 17 — Recoding & Index Practice with dplyr**
Collapsing categories (`case_when()`) · quartile groups (`cut()` + `quantile()`) · reverse-coding and a mean index that needs 4 of 6 answers
(`rowMeans()`) · looking at "Other: please specify" answers · recoding individual cases (`IF (ID = 74)`) · treating implausible values as missing ·
dollar amounts to income brackets (`cut(labels = FALSE)`) · one best-estimate variable from two measures (`coalesce()`). Uses a made-up practice survey.

**Unit 18 — Logical Vectors & Numbers with dplyr**
*R4DS logicals and numbers.* `sum()`/`mean()` of a condition · `any()`/`all()` · `NA` in comparisons · `&`, `|`, parentheses · `%in%` · `if_else(missing =)` · counting TRUEs by group · `%/%` and `%%` · `round()` ties to even, `floor()`, `ceiling()` · `near()` · `cumsum()` with `coalesce()` · `pmin()` top-coding · `n_distinct()`

**Unit 19 — Dates & Times with lubridate**
`ymd()` · `dmy()` for Australian formats · `year()` / `month()` · exact age
with `time_length()` · `floor_date()`

**Unit 20 — Factors & Measurement Levels with forcats**
Defining an ordinal scale with `factor(ordered = TRUE)` · binning a
continuous variable with `cut()` · setting the reference level with
`fct_relevel()` · collapsing rare categories with `fct_lump_n()` · making
NA an explicit level with `fct_na_value_to_level()` · `fct_rev()` · `fct_count()` · `fct_cross()`

**Unit 21 — Measurement Levels for Variable Sets with forcats, dplyr & purrr**
Checking every column's type with `map_chr()` · a Likert battery to ordered
factors with `across()` · factor to numeric safely · `fct_collapse()` ·
dummy coding with `model.matrix()` · sum contrasts · standardizing a set ·
`if_any()` / `if_all()` · `fct_reorder()`

**Unit 22 — Reshaping Data with tidyr**
Wide to long with `pivot_longer()` · long to wide with `pivot_wider()` ·
reshaping two measures at once with `.value` · splitting a column with `separate()` · combining columns with `unite()` ·
carrying values forward with `fill()` · making gaps explicit with
`complete()`

**Unit 23 — Rectangling Nested Data with tidyr & jsonlite**
*R4DS hierarchical data.* `jsonlite::fromJSON()` with and without simplification · `unnest_wider()` (twice) · `unnest_longer()` · `hoist()` · `jsonlite::flatten()`. jsonlite is installed but never attached (it would mask `purrr::flatten()`).

**Unit 24 — Strings & Regex with stringr**
`str_detect()` · `str_extract()` · `str_replace_all()` · `str_split()` ·
cleaning free-text with `str_trim()` + `str_to_lower()` · `str_sub()` · `str_pad()` ·
`str_c()` · `str_count()` · `str_squish()` + `str_to_title()`

**Unit 25 — Tidying with janitor**
`clean_names()` · quick frequency tables with `tabyl()` · finding
duplicates with `get_dupes()` · dropping empty columns with
`remove_empty()` · totals rows with `adorn_totals()`

**Unit 26 — Data Cleaning Toolkit with dplyr**
`distinct()` · `slice_max()` · `lag()` for within-person change ·
`add_count()` + `n_distinct()` · `bind_rows(.id)` · `semi_join()` ·
`across()` with several functions and `.names` · `rename_with()` ·
`select(where(), starts_with())` · `rowwise()` + `c_across()` · `between()` / `%in%`

**Unit 27 — Ranking, Windows & Recoding with dplyr**
`count(wt =)` · `summarise(.by =)` · `case_match()` · `min_rank()` within
groups · `ntile()` · `cumsum()` · `first()` / `last()` · `transmute()` ·
`join_by()` for differently named keys

**Unit 28 — Iteration & Functions with purrr**
Anonymous functions with `\(x)` shorthand · `map2_dbl()` over two vectors ·
folding with `reduce()` · writing a function with a default argument · `map_lgl()` · `keep()` ·
`pluck()` · `possibly()` · `list_rbind()`

**Unit 29 — Stacking & Harmonising Wave Files with purrr, dplyr & stringr**
*For wave-by-wave files such as HILDA's Combined files.* Stripping wave prefixes with `str_sub()` + `rename_with()` · `intersect()` / `setdiff()` · `all_of()` · tagging waves · a `read_wave()` function · `compact()` · `map()` + `bind_rows()` · `match(wave, letters)` · key checks with `anyDuplicated()` · `reduce(union)` for type clashes · cleaning a variable list · arithmetic age bands

**Unit 30 — Deriving Survey Variables with dplyr**
Yes/no codes to 0/1 · ever/never from a frequency · `pmax()` for the higher of two parents · carrying once-asked values across waves · decade and period variables with `cut()` · equivalised income · `ntile(.by =)` thirds within group and wave · age-group labels · `droplevels()` · own cluster for missing ids · `%in%` indicators · outcomes defined only for a subgroup · 'unsure' to missing · mean-one weights · reweighting to a target share · wave columns by `paste0()` · `rename(any_of(lookup))` · `.after =` · `case_when()` leaving others missing

**Unit 31 — Missing Data with naniar**
Summarizing missingness with `miss_var_summary()` · visualizing it with
`vis_miss()` · a per-variable bar chart with `gg_miss_var()` · flagging
sentinel missing codes with `replace_with_na()` · counting total
missingness with `n_miss()` / `prop_miss()` · per-respondent summaries with
`miss_case_summary()` · `add_n_miss()` · the shadow matrix with `bind_shadow()`

**Unit 32 — Missing Values in Practice with tidyr & dplyr**
`colSums(is.na())` · listwise deletion with `drop_na()` · `replace_na()` ·
missingness indicators and group comparisons · why mean imputation shrinks
the SD · missing items per respondent · scale scores with a half rule

**Unit 33 — Panel Data Overviews with overviewR**
Summarizing panel coverage with `overview_tab()` · checking missing data
with `overview_na()`

**Unit 34 — Multiple Imputation with mice**
Creating imputations with `mice()` · extracting a completed dataset with
`complete()` · pooling model results across imputations with `pool()` · missing-data
patterns with `md.pattern()` · stacked imputations with `complete(action = "long")`

**Unit 35 — Defensive Scripting with base R & purrr**
`stopifnot()` + `tryCatch()` · a skip-on-error wrapper · `file.path()` + `sprintf()` · `%||%` · catching warnings · `reduce(left_join)` · `iwalk()` progress · a `need_vars()` check with `setdiff()` · `file.exists()` guards · `next` to skip a missing variable · `requireNamespace()` for optional packages · `rm(list = setdiff(ls(), keep))` · `withCallingHandlers()` + `invokeRestart("muffleWarning")` · a warning log across models

**Unit 36 — Saving Outputs & Reproducibility with base R**
Output folders from one list of paths with `dir.create(recursive = TRUE)` · a `save_csv()` helper · `read.csv(check.names = FALSE)` · `capture.output(sessionInfo())` · `set.seed()` before every random step · dated file names with `format()` · running scripts in order with `source(local = env)`

**Unit 37 — Nested Data & Models by Group with tidyr, purrr & broom**
`nest()` · `map_int()` on list-columns · one `lm()` per group · `tidy()` +
`unnest()` to collect slopes · `unnest()` back to rows

**Unit 38 — Capstone: Clean & Reshape Panel Data with dplyr, tidyr & forcats**
One multi-step lesson ending Phase 3: wide panel → long, relabel a factor,
summarise with missing waves.

### Phase 4 — Basic Analysis & Data Visualization

**Unit 39 — Exploring & Summarizing with dplyr**
`count()` + proportions · `group_by()` + `summarise()` · multiple grouped
summaries with `n()` · quantiles · standardizing with `mutate()` ·
correlation with `summarise()` + `pull()`

**Unit 40 — Weighted Tables & Table Building with base R & dplyr**
Weighted percentages with `tapply()` · `droplevels()` on valid cases · `weighted.mean()` on complete pairs · tidy blocks per variable with `do.call(rbind)` · `ave()` for position within group · `as.data.frame(table(), responseName)` · `merge()` · `cbind()` constant columns · APA-style p-values with `formatC()` · significance stars with nested `ifelse()` · SE and p from an interval · replacing codes with display labels

**Unit 41 — Visualization with ggplot2**
A first scatter plot with `geom_point()` · `geom_col()` bar charts ·
mapping `color` in `aes()` · titles with `labs()` · small multiples with
`facet_wrap()` · `geom_histogram()` · `geom_boxplot()` · `geom_line()` ·
`geom_smooth()`

**Unit 42 — Grammar of Graphics: Aesthetics & Layers with ggplot2**
*Healy ch. 3 and R4DS ch. 9.* Mapping vs setting an aesthetic · shape and alpha · global vs local `aes()` · `geom_bar()` counts · `after_stat(prop)` · `position = "dodge"` and `"fill"` · `stat_summary()` · `coord_flip()` · bubble size

**Unit 43 — Grammar of Graphics: Distributions & Comparisons with ggplot2**
*Healy ch. 4–5, R4DS ch. 10.* `binwidth` · `geom_freqpoly()` · `geom_density()` · `geom_violin()` · boxplot + `geom_jitter()` · `stat_ecdf()` · `geom_count()` · `geom_tile()` heatmap · `geom_bin2d()` · `facet_grid()`

**Unit 44 — Grammar of Graphics: Scales, Labels & Themes with ggplot2, ggrepel & patchwork**
*Healy ch. 8, R4DS ch. 11.* `scale_y_log10()` · `scales::percent` and `label_dollar()` · `scale_fill_brewer()` · `scale_colour_viridis_c()` · `annotate()` text and rect · `ggrepel::geom_text_repel()` · `theme_minimal()` and `theme()` · `labs(subtitle, caption)` · patchwork `+`, `plot_layout()`, `plot_annotation()`. ggrepel and patchwork install on first use.

**Unit 45 — Describing One Variable at a Time with dplyr, janitor, ggplot2 & psych**
Frequency tables with valid percent (`tabyl()` + `na_if()`) · median and mode of an ordinal variable · sorted counts ·
bar charts (`geom_bar()`), sorting by frequency (`fct_infreq()`), count labels (`geom_text(stat = "count")`), titles and source notes
(`labs()`) · select-all-that-apply questions (`colSums()`, percent of cases) · mean/median/SD/range (`summarise()`) · skewness and
kurtosis the SPSS way (`psych::skew(type = 2)`) · percentiles and IQR · histograms (`geom_histogram()`), with a normal curve
(`stat_function()`) · the 1.5 x IQR outlier rule · a 95% confidence interval for a mean (`t.test()`) · z-scores (`scale()`).
Follows a univariate SPSS tutorial sequence (categorical, then scale variables).

**Unit 46 — Relationships between Two Variables with dplyr, janitor, stats & ggplot2**
Crosstabs with row percentages (`tabyl()` + `adorn_percentages()`) · chi-square and the expected-count rule · Cramér's V ·
clustered bar charts (`position = "dodge"`) · ANOVA p value · bar chart of group means (`stat_summary()`) · how an unhandled
missing-value code distorts a correlation · overplotting (`geom_jitter()`) · Spearman's rho · simple regression (B, R-squared, link to r) ·
variance check then t-test (`var.test()`, `t.test()`) · partial correlation by hand (`resid()`).

**Unit 47 — Visualizing Correlations with corrplot**
A first correlation plot · handling missing data with
`cor(..., use = "complete.obs")`

**Unit 48 — Flow Diagrams with ggalluvial & ggplot2**
A first alluvial (Sankey-style) plot with `geom_alluvium()` +
`geom_stratum()` · coloring flows with `aes(fill = ...)` · labeling
strata with `geom_text()` + `after_stat()`

**Unit 49 — Publication Figures with ggplot2**
`geom_ribbon()` confidence bands · `scale_colour_manual()` · `theme_bw()` + `theme()` · axis breaks · `facet_wrap(scales, ncol)` · `label_wrap_gen()` · `geom_pointrange()` with `position_dodge()` · `geom_hline()` · horizontal intervals · `fct_reorder()` for panels · `ggsave()` · stacked areas with `position_stack(reverse = TRUE)` · `coord_cartesian()` limits · stacked bars by panel · dodged bars with `geom_errorbar()` · one-row legends with `guides()` · `hcl.colors()` · `setNames()` palettes · strip text themes · `expansion()` · per-panel reference lines · `geom_text(y = Inf)` notes · ordering by a position column · one folder of figures per theme

**Unit 50 — Maps with ggplot2 & maps**
*Healy ch. 7, Imai & Webb ch. 5.* `map_data()` + `geom_polygon()` + `coord_quickmap()` · joining data to boundaries · choropleth · `scale_fill_viridis_c()` + `theme_void()` · binned choropleth · city points with `inherit.aes = FALSE` · a map of Australia. The `maps` package is installed but never attached (it would mask `purrr::map()`); `sf` is not used because it has no dependable browser build.

**Unit 51 — Text Analysis with tidytext & dplyr**
Tokenizing text with `unnest_tokens()` · removing stop words with
`anti_join()` · counting word frequencies with `count()`

**Unit 52 — Applied Survey Techniques with dplyr**
Reverse-coding with `mutate()` · a composite scale with `across()` · a
two-group t-test · simple linear regression · reading R² · a capstone
`group_by()` + `summarise()` report across two outcomes

**Unit 53 — Tidy Models with broom**
Tidying coefficients with `tidy()` · model-level fit stats with
`glance()` · row-level predictions with `augment()`

**Unit 54 — Chance & Simulation with base R & dplyr**
*Probability by simulation (Imai & Webb, ch. 6).* `set.seed()` + `sample()` · estimating a probability with `mean(logical)` · `replicate()` · the birthday problem · the law of large numbers (`cumsum()/seq_along()`) and its plot · `dbinom()`/`pbinom()` · `pnorm()`/`qnorm()` · z-scores · conditional probability from a simulated population

**Unit 55 — Sampling Distributions & Confidence Intervals with dplyr & stats**
*Sampling theory (Imai & Webb, ch. 7).* `slice_sample()` · the sampling distribution of a mean · standard error simulated vs formula · SE shrinking with n (`map_dbl()`) · the central limit theorem (skewness and a histogram) · margin of error for a proportion · confidence interval for a mean by hand and `t.test(conf.level)` · coverage by simulation · sample size for a margin of error · design effect and effective n

**Unit 56 — Bootstrap, Permutation & Power with dplyr & stats**
One resample · bootstrap SE of a median · percentile confidence interval with `quantile()` · bootstrap difference between groups · bootstrapped regression slope · shuffling labels · a permutation test and its histogram with `geom_vline()` · power by simulation · `power.t.test()`

**Unit 57 — Classic Inference Tests with stats & broom**
Chi-square test with `chisq.test()` · standardized residuals · `tidy()`
on a test · `prop.test()` · one-way ANOVA with `aov()` · `TukeyHSD()`
post-hoc comparisons · tidying Tukey results · `cor.test()` · the
Wilcoxon rank-sum test with `wilcox.test()`

**Unit 58 — Cibois's PEM (Percentage of Maximum Deviation) with base R**
Expected counts and deviations under independence · PEM for a single
cell · the PEM for every cell (attraction and repulsion use different
maxima) · a reusable `pem_fun()` · listing the strongest attractions. PEM
is written by hand, in base R, so the formula is visible; the `descriptio`
package offers the same measure but is not used here.

**Unit 59 — Scale Scoring & Index Construction with dplyr & purrr**
Reverse-coding · POMP 0-100 rescaling · answered share with `pick()` · an index requiring enough answered items · per-item ranges with `cur_column()` · scores for several scales with `map()` · `keep()` · one random wave per person with `slice_sample(by =)`

**Unit 60 — Scale Reliability with psych**
Cronbach's alpha with `alpha()` · a one-factor PCA with `principal()` ·
quick variable summaries with `describe()` · `polychoric()` · one-factor `fa()` · omega from loadings · `fa.parallel()` · item-rest correlations · Spearman-Brown · first-component share

**Unit 61 — Building & Testing Scales with psych & dplyr**
`na_if()` for Don't know / Refused codes · reverse-coding with `across(.names = )` · item correlation matrix · corrected item-total
correlations (`psych::alpha()`) · the kitchen-sink problem · summated scales with `rowMeans(pick())` · rescaling to 0–10 · convergent validity
(group means and correlations) · KMO and Bartlett's test · Kaiser's rule and a varimax PCA (`psych::principal()`) · component scores vs the simple summed scale.

**Unit 62 — Measurement Invariance with lavaan**
`cfa()` · `fitMeasures()` · configural, metric and scalar multi-group models (`group`, `group.equal`) · ΔCFI · robust `MLR` with `missing = "ml"` · `standardizedSolution()`

**Unit 63 — Multiple Correspondence Analysis with FactoMineR & ggplot2**
The disjunctive (indicator) table · `MCA()` · eigenvalues and total
inertia · Benzécri's modified rates · contributions · cos2 · v-tests ·
mapping the categories (the space of lifestyles) · mapping the
individuals · η² by variable · supplementary categorical and quantitative
variables · `dimdesc()` · clustering with `HCPC()`. Built around a small
simulated "space of lifestyles" (occupation, education, music, reading,
sport, with gender and age as supplementary variables), in the spirit of
Husson, Lê & Pagès's *Exploratory Multivariate Analysis by Example Using
R* and of Bourdieusian analyses of social space.

**Unit 64 — Clustering & Components with stats, dplyr & ggplot2**
*Imai & Webb ch. 3 and 5.* `scale()` · `kmeans()` · cluster labels · profiling clusters · the elbow plot · `hclust()` + `cutree()` · comparing methods with `table()` · `prcomp()` · variance explained · loadings · clusters on PC1/PC2

**Unit 65 — SPSS Rosetta II: Tests, Models & Reshaping with stats, dplyr, tidyr & psych**
More SPSS commands in R, each lesson showing the syntax first: SPLIT FILE →
`group_by()` + `summarise()` · CORRELATIONS → `cor()` · ONEWAY → `aov()` ·
POST HOC TUKEY → `TukeyHSD()` · CROSSTABS /CHISQ → `chisq.test()` · T-TEST
PAIRS → `t.test(paired = TRUE)` · NPAR TESTS (Mann-Whitney) → `wilcox.test()` · PERCENTILES →
`quantile()` · WEIGHT BY → `count(wt = )` · COUNT → `rowSums(across())` ·
AUTORECODE → `factor()` · LOGISTIC REGRESSION → `glm(family = binomial)` ·
FACTOR → `factanal()` · RELIABILITY → `psych::alpha()` · VARSTOCASES →
`pivot_longer()` · CASESTOVARS → `pivot_wider()` · ADD FILES → `bind_rows()` ·
DELETE VARIABLES → `select(-)`. Sits just before the Phase 4 capstone, after
the units that teach these methods.

**Unit 66 — Capstone: Explore, Test & Plot with dplyr, broom & ggplot2**
One multi-step lesson ending Phase 4: a descriptive table, a t-test, the
test as a tibble, and a box plot.

**Unit 67 — Spot & Fix Bugs with dplyr, stringr & ggplot2**
Fifteen "debug on purpose" lessons: each starts from broken code (an error
message or a silent mistake) that you repair. Covers `=` vs `==`, results
that were never assigned, `na.rm`, leftover grouping, `case_when()` order,
join keys with different names, factor-to-number traps, `== NA`, `&` vs
`|`, regex dots, a fixed colour inside `aes()`, weighted means, `cut()`
boundaries, piping into `lm()`, and `summarise()` vs `mutate()`.

**Unit 68 — Spotting Problems in Data & Graphs with dplyr & ggplot2**
*Healy ch. 1 and critical reading.* A truncated bar axis · Simpson's paradox (overall vs within-group rates) · non-response bias, ecological fallacy and loaded-question multiple-choice lessons · tiny-n margins of error · a confounder removed by residuals · base rates (positive predictive value)

### Phase 5 — More Advanced Analysis

**Unit 69 — Model Parameters with parameters**
Tidy output with `model_parameters()` · standardized coefficients

**Unit 70 — Regression Reporting with jtools**
A cleaner model summary with `summ()` · visualizing an effect with
`effect_plot()`

**Unit 71 — Logistic Regression with glm, broom & marginaleffects**
`glm(family = binomial)` · odds ratios with `tidy(exponentiate = TRUE)` ·
predicted probabilities with `predict(type = "response")` · average
marginal effects with `avg_slopes()` · likelihood-ratio test with
`anova(test = "Chisq")` · McFadden's pseudo R²

**Unit 72 — Ordinal & Multinomial Models with MASS & nnet**
Ordered logit with `MASS::polr()` · odds ratios from ordinal slopes ·
predicted category probabilities · `nnet::multinom()` for unordered
outcomes · choosing the reference category with `relevel()` · predicted
probabilities across categories (MASS is called with `MASS::` and never
attached, because `library(MASS)` masks `dplyr::select()`)

**Unit 73 — Multinomial Models with VGAM**
`VGAM::vglm(multinomial(refLevel = 1))` · reading coefficient names like `x:1` · odds ratios with limits from `vcov()` · `logLik()` and McFadden R-squared · Cox-Snell and Nagelkerke · weights rescaled to sum to n (VGAM is called with `::`, never attached)

**Unit 74 — Post-Estimation with marginaleffects**
Average marginal effects with `avg_slopes()` · `predictions()` ·
`avg_predictions()` · `avg_comparisons()`

**Unit 75 — Model Diagnostics with performance**
R-squared with `r2()` · checking collinearity with
`check_collinearity()` · testing residual normality with
`check_normality()`

**Unit 76 — Multilevel Models with lme4**
A random-intercept model with `lmer()` · adding a fixed-effect predictor · extracting random effects with `ranef()` · fixed effects with `fixef()` · three-level `(1 | school/pid)` · variance shares from `VarCorr()` · Wald intervals with `confint()` · `nobars()` for the pooled model · pooled versus multilevel coefficients

**Unit 77 — Panel Regression with plm**
`pdata.frame()` + `pdim()` · pooled OLS · fixed effects (`within`) · the
within estimator by hand · random effects · Hausman test with `phtest()` ·
`pFtest()` · `fixef()` · two-way effects · cluster-robust SEs with
`vcovHC()` · first differences. plm is called as `plm::name()` (not attached)
to avoid masking dplyr's `lag()`.

**Unit 78 — Event History Analysis with survival**
Declaring survival data with `Surv()` · a Kaplan-Meier curve with
`survfit()` · a Cox model with `coxph()`

**Unit 79 — Complex Survey Design with survey**
Declaring a design with `svydesign()` · weighted means with `svymean()` ·
a weighted regression with `svyglm()` · subgroup estimates with `svyby()`

**Unit 80 — Survey Estimation Toolkit with survey**
*For clustered, weighted samples such as LSAY.* Schools as clusters with `nest = TRUE` · `options(survey.lonely.psu)` · subsetting a design with `des[rows, ]` · `svyby(vartype = "ci")` · clamped proportion intervals · weighted shares from 0/1 indicators · `svycontrast()` for differences and for slopes by group · nested specifications from a list · one common complete-case sample

**Unit 81 — Survey Model Reporting & Inference with survey & stats**
Combined slope and interval from `vcov()` · a custom odds-ratio table function · `do.call(rbind, Map())` · share of a gradient explained · deviance-based pseudo R-squared · a Wald chi-square by hand · design-based F test · delta-method predicted-probability curves · `as.svrepdesign()` bootstrap · `withReplicates()`

**Unit 82 — Average Marginal Effects by Hand with glm & survey**
Counterfactual copies of the data · the average effect of a factor level · numeric predictors as plus/minus half a unit · looping over factor levels · one function for numeric and factor predictors · bootstrap standard errors with `withReplicates()`

**Unit 83 — Weighted Multinomial Models with svyVGAM**
`svyVGAM::svy_vglm()` with `multinomial(refLevel = 1)` · mean-one weights for stable fitting. (svyVGAM is a lazy install, called with `::`, never attached.)

**Unit 84 — Weighted Trend Models with survey, broom & purrr**
*For repeated cross-sections and panels such as HILDA.* `svydesign(ids =)` clustered on person · `svymean()` · `svyby()` · `svyglm()` · group-by-decade interactions · `tidy()` · `reformulate()` · `regTermTest()` · `subset()` of a design · weighted logistic trends with `quasibinomial()` · `plogis()` · ratio of odds ratios · `crossing()` specification grids · `map_dbl()` over outcomes · `group_modify()` by year

**Unit 85 — Social Network Analysis with igraph**
Building a network with `graph_from_data_frame()` · degree centrality
with `degree()` · visualizing a network with `plot()`

**Unit 86 — Comparative Methods with QCA**
Calibrating a fuzzy-set condition · building a truth table with
`truthTable()`

**Unit 87 — Segregation Measures with dplyr & segregation**
*For school-level SES segregation work.* Built from the ground up: school composition (row shares) · where each group is found (column shares) · stacked bars of composition · counts per school · the even-spread benchmark and gaps · the dissimilarity index step by step, what it means in students, then `dissimilarity()` · isolation and exposure by hand · entropy · the mutual information index M by hand, then `mutual_total()` · Theil's H = M / E · three groups at once · decomposing M within sectors with `mutual_within()`

**Unit 88 — Publication Tables with modelsummary**
Comparing two models with `modelsummary()` · naming models in the table

**Unit 89 — Publication Table Helpers with dplyr, stringr & tidyr**
Significance stars with `case_when()` · `formatC()` decimals · `mapply()` · estimate + CI strings · p-value formatting · en dashes with lookarounds · blanking repeated labels · interleaving columns · `pivot_wider(names_glue)` · hidden header suffixes

**Unit 90 — Excel Reports with openxlsx**
`createWorkbook()` / `addWorksheet()` / `writeData()` / `saveWorkbook()` · title rows · `createStyle()` + `addStyle()` · `mergeCells()` + `setColWidths()` · one sheet per table with `iwalk()`

**Unit 91 — Writing Reports in Quarto (read-along) with base R**
Quarto cannot render in the browser, so these lessons have you write the source: YAML headers · code chunks · chunk options (`echo`, `label`, `fig-cap`) · inline `r` results · several output formats · `writeLines()` to a `.qmd` file · the `quarto render` and `preview` commands

**Unit 92 — Capstone: Model & Report with glm, broom & marginaleffects**
One multi-step lesson ending Phase 5: a logistic model, odds ratios,
average marginal effects and a predicted probability.

**Navigation.** Every unit header in the path map shows a one-line description under its name, so you can see what a block of lessons is about before opening it. Every lesson's explainer says what the function does, why you would use it, what it needs and what it assumes.

The path map groups lessons visually by unit, and shows a lock icon on
lessons that come later than where you've currently progressed — but it's
advisory, not a hard gate. Tapping *any* lesson, locked or not, opens it;
tapping a locked one first shows a short "skip ahead?" confirmation so it's
clear you're jumping past something. That means you can freely start
"Working with Survey Data with dplyr" without finishing "Tidyverse
Foundations with dplyr, purrr & tibble" first, or drop into
"Visualization with ggplot2" on day one if that's what you want to
explore.

## Installing on Android (add to home screen)

Field Notes is a progressive web app (PWA): it ships a `manifest.webmanifest`,
home-screen icons and a service worker, so once the repo is hosted over
`https://` (for example on GitHub Pages) Chrome can install it as an app.

1. Open the page's address in **Chrome** on your Android phone and let it
   finish loading.
2. Either tap **⚙️ → Install Field Notes** inside the app (this button
   appears when Chrome offers installation), or tap Chrome's **⋮ menu →
   Add to Home screen** (on some versions it reads **Install app**).
3. Confirm the name and tap **Install** (or **Add**). The icon appears on
   your home screen.
4. Open it from the icon. It runs full-screen, like an app.

Things to know:

- **Updates.** The service worker fetches the app files network-first, so
  after you push a new version to GitHub the phone picks it up the next
  time it opens with a connection (close and reopen the app once if you
  still see the old one). To force every device to drop its old caches,
  change `VERSION` at the top of `sw.js`.
- **Stored R engine.** R (webr.r-wasm.org) and its packages (repo.r-wasm.org) are kept in their own long-lived cache
  (`field-notes-webr-v1`) and served cache-first, refreshed when an entry is over 30 days old. This cache survives `VERSION`
  bumps; Settings has a button to clear it. This has not been tested on a real device.
- **Offline.** The app shell, R and the packages are cached after the
  first successful load, so the app should open without a connection. Whether
  R itself starts fully offline depends on how the browser lets the webR
  worker use that cache, which has not been tested here, so treat offline use
  as a bonus, not a guarantee. The first load of each session still needs
  internet.
- **Progress** is stored by the browser for that exact address. Open the
  app from the same address (or the same home-screen icon) to keep it, and
  use **⚙️ → Export progress** before clearing browser data or changing
  phone.
- **Files.** The PWA needs these files next to `index.html`:
  `manifest.webmanifest`, `sw.js` and the `icons/` folder. The single-file
  `r-field-notes.html` works for quick use but cannot be installed as an app,
  because it has no manifest or service worker.
- If neither install option appears, check that you are on the `https://`
  address, in Chrome (not an in-app browser such as the one inside another
  app), and that the page has finished loading. Samsung Internet offers
  the same option under **☰ → Add page to → Home screen**.

## Learning features

- **Targeted feedback.** A failed check no longer just says "not quite". The app re-runs the lesson's solution in a
  private environment and compares each object you were meant to create with it (class, columns, rows, length, values),
  so you see messages such as "`x` should have 3 rows, but yours has 2". Common R errors are translated into plain
  language. A lesson can add its own tests with an optional `feedback: [{ when: "R expression", msg: "text" }]` list.
- **What your code created.** After Run or Check, the objects your code assigned are shown below the console. "Compare
  with the expected result" shows what the correct code produces (and counts as a hint).
- **See it first.** The Learn page has a collapsible worked example taken from the lesson's Help; examples that are safe
  to run have a Run button.
- **Predict first.** About fifty lessons start with a short multiple-choice "what will this return?" question
  (+5 XP the first time you get it right).
- **Spaced review.** Review uses Leitner boxes (1, 3, 7, 16 and 35 days). A clean pass moves a lesson up a box, a hint
  keeps it, Display answer sends it back to box 1, and a miss during review drops it a box. Lessons that are due show an
  orange dot on the path.
- **Search.** The box on the Path page finds lessons by title, function name, package or topic.
- **Placement check and Skip.** A 20-question placement check can mark whole phases as already known, and every open
  unit has a Skip unit button. Skipped lessons show a dashed outline, earn no XP and return in Review after two days.
- **Your skills.** The Path page groups lessons into 14 skill areas with completion and mastery bars.
- **Code editor.** The code box highlights R as you type (comments, strings, numbers, keywords, function names, pipes and
  the `___` blanks), grows with your code, closes brackets and quotes (typing the closer steps over it, backspace removes an
  empty pair), and indents after Enter (after an opening bracket or at the end of a `|>` or `+` line). The symbol bar also
  has Undo and Reset-to-starter. It is a deliberately light editor built for touch screens, not a full IDE.
- **Stuck help.** After two failed checks the feedback offers Show the hint, Compare with expected and Start again; after
  three it also offers Show the answer. The comparison panel shows your result and the expected one together.
- **Reference.** The Reference tab has a cheat sheet for every unit (each lesson's function, one-line explanation and a
  worked example, with a button to open the lesson) and an A to Z list of functions, both searchable.
- **From SPSS.** A third Reference tab lists every SPSS command taught in the two Rosetta units (and Unit 3 orients SPSS users first)
  with the R function that does the same job; tapping a row opens that lesson.
- **Unit quiz.** Once a unit is finished (and has at least three lessons with a named function), a "Unit quiz" button
  appears under it: five questions generated from the unit's own lessons ("which function fits this description?" and "which
  line of code does this?"). Four or more right earns +20 XP once per unit; missed lessons become due in Review.
- **Read aloud.** The Help popup can read itself aloud using the voice already on the device (browser speech synthesis;
  Australian English preferred, then NZ, UK, US). The first time you open Help it asks once whether to read aloud every time;
  after that it starts speaking when you tap Help. There are Pause/Resume and speed (0.8x, 1x, 1.25x) buttons in the popup, and a
  switch in Settings. It reads the lesson title, the explanation and the help text, says "the example code is on screen" instead
  of reading code, and stops when you close Help, change lesson or leave the page. Hidden if the browser has no speech support.
- **Start-up.** While R loads the banner shows the step and elapsed time and the Run/Check buttons say "R loading…". After
  the first visit the R engine and packages are stored on the device (see below) and Settings can clear them.
- **Mobile bar.** On phones (and narrow windows) the Practice page has a fixed bar with Help, Run and Check buttons, plus a symbol toolbar (`|>`, `<-`, `%in%`, quotes, brackets, `$`, `~`, `==`, `!=`, `&`, `|`, indent). Symbol
  buttons insert at the cursor without closing the keyboard, put the cursor inside paired symbols, and wrap a selection.
  While you type, the bar sits above the on-screen keyboard.
- **Was this explanation clear?** Each lesson has 👍 / 👎 buttons on the Learn and Practice pages (👎 offers an optional
  note). Ratings are stored in this browser, included in Export/Import progress, and exported as a CSV from Settings
  (unclear lessons first) so you can see which explainers to rewrite. The self-test report also lists lessons you
  marked unclear.


## Lesson notes (the explainer on every lesson)

Each lesson has an `explain` object that appears in two places: as a
**Notes** card on the Learn page, and at the top of the **Help** popup
(above the worked example). It has up to five short sections:

- **What it's for** — when you would reach for this function.
- **Kind of analysis** — which family of methods it belongs to.
- **What your data needs** — the object or variable properties required.
- **Assumptions to keep in mind** — the conditions the method relies on.
- **The maths in plain words** — for functions built on a formula (about
  forty percent of the lessons): what the formula is and what it does.

Every explainer says what the function does, why you would use it, and what to watch for.

A lesson's `explain` fields are plain HTML strings, with `use` and
`family` required (the validator checks that every lesson has them).

## Practice rounds (pilot)

Four units end with three **practice rounds** (⚡ on the Path): the same skill
re-tested on a fresh tibble with slight variation, in the Duolingo style.
They sit in Tidyverse Foundations, Recoding & Index Practice, More Joins &
Variable Wrangling, and Exploring & Summarizing (12 lessons in all).

- They are ordinary lessons flagged `round: true`, so progress, spaced
  repetition and the self-test cover them automatically.
- They are **optional**: they never lock the next lesson and do not gate unit or
  phase completion. They earn 40% of the usual XP.
- They open straight into Practice, and are left out of the unit quiz, the A–Z
  list and the cheat sheets.
- To add more, copy a lesson, set `round: true` and place it at the end of its unit.

## App structure

The bottom bar has four tabs: **Path, Review, Reference and Me**. Lessons open on their own full-screen page.

- **Path** — the home screen. A card at the top shows today's goal (a ring that fills as you finish lessons) and your
  streak. Below it are Continue, search and the map. The map is grouped into five phases (the current phase is open, the
  others are collapsed; tap a phase header to open or close it). Each unit is one compact card with a colour and icon for
  its skill area, a progress bar and its count; tap it to see the lesson nodes, a one-line description, the packages it
  uses and a "Skip unit" button.
- **Lesson** (full screen, no bottom bar) — a ✕ to leave, a progress bar for the unit, the task, the code editor and the
  Run and Check buttons. The task shows its last paragraph; "Details" opens the background, package chips and preloaded
  data. A collapsed **Notes & worked example** card holds what the function is for, what to watch, and a runnable example.
  Easy, Medium and Hard are a small switch at the top right. Practice rounds and reviews use the same screen.
- **Review** — the 🔁 badge shows how many lessons are due. This tab holds the spaced-repetition refresher, "Needs another
  look" (lessons you failed in review or rated unclear), unit quizzes and the optional practice rounds.
- **Reference** — cheat sheets, A to Z and the SPSS table.
- **Me** — streak and daily goal, your skills, the placement check, back up or restore progress, and Settings & tools
  (the ⚙️ now lives here).

Run is the secondary button (outlined) and Check answer is the single strong action. Previous and Next sit below the
editor.

### Need help? (the 💡 Help button)

Everything that used to be a row of buttons is behind one **Help** button next to Run. It opens a bottom sheet:

- **Hint** (−15 XP if the lesson is then completed) shows a short nudge under the task.
- **Explain** opens the notes (what the function is for, what it needs, its assumptions and the maths) with a short worked
  example that differs from the exercise.
- **Read aloud** starts the spoken explanation (hidden if the device has no speech voice).
- **Compare with expected** (when the lesson has named objects) shows what the correct code produces; it counts as a hint.
- **Show answer** (−25 XP) writes the solution into the editor; "Hide answer" restores what was there. If both the hint
  and the answer were used only the larger penalty applies.

The sheet slides up from the bottom and closes when you tap outside it.

### Blanks

Starter code uses `___` blanks. They are highlighted in the editor, including inside quotes. The `___` button at the left
of the symbol bar selects the next blank so you can type straight over it.

### Goal, streak and celebrations

- **Daily goal.** Finish 1, 3, 5 or 10 lessons a day (tap the ring or use Settings; the default is 3). Each lesson counts
  once a day. **Streak:** one more day for every calendar day (your phone's local date) with at least one passed lesson;
  it resets after a missed day. Both are saved with your progress.
- **Celebration.** A pass shows confetti, the XP you earned and a bar that fills to your new level. A finished unit or
  phase adds a summary (lessons, stars, total XP) with buttons for the unit quiz and "Back to the path". Optional sound
  is off by default (Settings). A wrong check gives a short shake and, on phones that support it, a light vibration.
- **First run.** A three-step tour appears once, and "Start lesson 1" takes you to the first lesson to read while R loads.
  The loading banner has a progress bar. Settings can replay the tour.
- **Dark mode.** Settings > Theme: match phone (default), light or dark.
- **Plots.** A plot appears in a rounded card; tap the plot or the ⤢ button to see it full screen.

## Settings & tools (the ⚙️ in the top bar)

- **Appearance and goals** — theme (match phone, light, dark), daily goal (1, 3, 5 or 10 lessons), sound effects (off by
  default) and "Show the quick tour".
- **Export / import progress** — downloads your progress as a small JSON
  file, and merges one back in (all completed lessons are kept, along with
  the higher XP total). Use it before clearing site data or moving to a
  new phone, since `localStorage` is per browser.
- **Install the app** — appears when Chrome offers installation (see
  "Installing on Android").
- **Self-test** — runs every lesson's `setup`, `solution` and `check` in
  the real R engine on your device and lists the lessons that fail, with
  the error text. See "How to run the self-test" below.

### How to run the self-test

Run it after every update. It is the only way to find out whether a
lesson's solution and check really work in R, because the checks cannot be
run anywhere else.

1. Open the app and wait until the banner at the top turns **green** ("R is
   running"). The self-test needs R to be ready, and says so if it is not.
2. Tap **⚙️** in the top bar to open Settings & tools.
3. Under **Self-test**, choose the scope: **All lessons** (every lesson,
   slow the first time) or **Current unit only** (the unit of the lesson
   you last opened, a quick way to re-test one fix).
4. Tap **Run self-test**, then keep the panel open and the screen awake.
   A status line counts through the lessons (`Testing 57/725: …`). The
   first full run installs each unit's packages as it reaches them, so
   expect several minutes; later runs are faster because packages stay
   installed for the session.
5. When it finishes, the status line gives the totals (for example
   `Self-test: 183 passed, 6 failed, of 505 lessons`) and the box lists
   every failing lesson as `FAIL <lesson id> [<unit>]` followed by the
   reason: either the R error message, `check did not return TRUE`, or
   `package install failed for this unit`.
6. Tap **Copy results** (or long-press the box if the copy is blocked) and
   paste the list to whoever is maintaining the course, or use it yourself:
   find the lesson by its id in `index.html` and fix its `solution`,
   `setup` or `check`.

How to read the failures:

- Many failures in **one unit** and a package message usually means that
  package has no working WebAssembly build (or the network blocked it).
  Only that unit is affected; the fallback is to remove the unit.
- A single failure with an R error means a typo or an API change in that
  lesson's code.
- `check did not return TRUE` means the solution runs, but the check
  expression disagrees with it, so the check is too strict or wrong.
- The test runs the **solution** against the **check**; it does not test
  your own answers, and it does not draw plots on screen (plot lessons are
  run on a hidden graphics device).

## Progression

- **Easy / Medium / Hard** — all but seven of the 725 lessons offer three starting
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
- **Mastery stars** — each completed lesson shows 1–3 stars on the path:
  one for clearing it on Easy, two for Medium, three for Hard (lessons
  without tiers earn three). Redoing a lesson on a harder tier earns the
  XP bonus you missed the first time, without stacking hint or answer
  penalties.
- **Continue** — a button at the top of the path opens the lesson you
  were last on, or the first one you haven't finished.
- **Capstones and badges** — each phase (2 to 5) ends with a **Capstone**
  unit: one multi-step lesson that combines the phase's skills, drawn as a
  larger 🏆 node and worth double XP. Finishing every lesson in a unit
  earns a 🏅 on its heading; finishing a phase puts a 🏆 on the phase
  header and shows a "Unit complete" or "Phase complete" celebration.
- **Review mode** — the blue **Review** button on the path picks up to five
  completed lessons (the ones you practised longest ago, then the ones
  with the fewest stars) and drops you straight into Practice on the
  **Hard** tier, with no scaffolding, to recall the code from scratch.
  Each lesson you pass earns +10 XP once per review. A lesson counts as
  "due" three days after you last passed it. Review progress is stored
  as a last-practised time per lesson id.
- **Phases and collapsible units** — the path shows the five phase
  headers; tap a unit heading to collapse or expand it. By default only
  the unit you're currently in is open.
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

- **lavaan, labelled, openxlsx, survey.** New lazy installs. lavaan is the heaviest (first install may be slow); `ggsave()` and the SPSS/Stata round trips write to temporary files, which should work in the browser but have not been run there.
- **VGAM, svyVGAM.** New lazy installs for the multinomial units; both are called with `::` and never attached. svyVGAM is the less common one, so it sits in its own two-lesson unit: if it will not install under WebAssembly only that unit is affected. The bootstrap lessons (`as.svrepdesign()`, `withReplicates()`) refit models on many replicate weight sets, which is slower in the browser than on a desktop.
- **plm, readr, lubridate.** These install lazily like the others. plm has many dependencies, so its first install may be slow or fail under WebAssembly; if the Panel Regression unit will not load, run the self-test on that unit and tell me the error. plm is never attached, so its lessons call `plm::plm()` etc.
- **readxl, jsonlite, ggrepel, patchwork, maps (units added in v13).** Lazy installs, none verified in a live webR yet. readxl and the maps unit use datasets bundled with the packages (`readxl_example()`, `map_data("state")`, `maps::us.cities`), so no downloads are needed. `maps` and `jsonlite` are installed but never attached, because `maps::map()` would mask `purrr::map()` and `jsonlite::flatten()` would mask `purrr::flatten()`. `sf` is deliberately not used. If one of these will not install, run the self-test on that unit and send me the error; only that unit is affected.
- **Simulation and clustering lessons (v13).** The checks for lessons that use random numbers either recompute the answer with the same seed or accept a tolerance wide enough to be safe across seeds (for example "coverage between 0.88 and 0.99"). The ggplot2 scale, theme and patchwork checks read internal ggplot2 fields (`p$scales`, `p$theme`, `p$patches`) and are the most likely to need a tweak if ggplot2 or patchwork change their internals.
- **FactoMineR and MASS/nnet.** The Multiple Correspondence Analysis unit
  needs `FactoMineR`, which pulls in a long dependency chain (car, emmeans,
  leaps, flashClust and others), and the ordinal/multinomial unit needs
  `MASS` and `nnet`. Whether the webR package repository carries working
  builds of all of these has not been verified from here; use the in-app
  **self-test** (⚙️) to find out, and the lazy per-unit install keeps any
  failure confined to that unit.

If any of these turns out to be a real blocker in practice, the
straightforward fallback is to drop the offending unit from the `LESSONS`
array and remove the corresponding package from the `installPackages()`
call — every unit is independent, and removing one doesn't affect any
other.

### Lazy per-unit installs (everything after the boot-time list)

Nine packages at boot is already a lot. (The newest units also install `MASS` and `nnet`, which are installed but never attached: `library(MASS)` would mask `dplyr::select()`, so lessons call `MASS::polr()` explicitly.) Rather than keep adding to that
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

- **mice, naniar, tidytext** — high confidence. All three have very
  stable, well-documented core workflows (`mice()`/`complete()`/`pool()`;
  `miss_var_summary()`/`vis_miss()`/`gg_miss_var()`;
  `unnest_tokens()`/`anti_join(stop_words)`/`count()`), and I'm confident
  in the exact syntax used.
- **modelsummary** — the lowest confidence in this batch. I'm using
  `output = "data.frame"` specifically to get a checkable plain object
  instead of a rendered table, but I'm only moderately sure how column
  naming behaves in that output mode — which is why both checks in this
  unit are structural (row/column counts) rather than value-based. If
  the underlying data.frame shape differs from what I expect, the
  reference `solution` call itself should still succeed (it's the same
  function call either way), so worst case the check is too loose rather
  than wrongly rejecting a correct answer.

- **tidyr** — high confidence. `pivot_longer()`/`pivot_wider()`/
  `separate()`/`unite()`/`fill()`/`complete()` are all long-stable, core
  tidyr functions. This unit was deliberately left out of the original
  build over dependency-weight concerns, but `tidyr` depends on `stringr`
  — already installed and proven working for the Strings & Regex with
  stringr unit —
  so the marginal cost of adding it now is much lower than it would have
  been at the start.
- **More Joins & Variable Wrangling with dplyr** — high confidence, zero
  new install risk. `inner_join()`/`full_join()`/`rename()`/`relocate()`
  are core `dplyr`, already boot-installed — this unit adds pure content,
  no new package.
- **Recoding Variable Sets with dplyr, Factors & Measurement Levels with
  forcats, and the haven/naniar extensions** — high confidence, zero new
  install risk. `across()`/`across(where(...))` are core `dplyr`;
  `factor(ordered = TRUE)`/`cut()` are base R; `fct_relevel()`/
  `fct_lump_n()`/`fct_na_value_to_level()` are core `forcats`;
  `tagged_na()` is core `haven`; `replace_with_na()`/`n_miss()`/
  `prop_miss()` are core `naniar`. Every package involved was already
  installed for an earlier unit — this batch is pure content on top of
  existing infrastructure.

**Not built (held pending your call):** `descriptio` (PEM function) — I
don't have solid confidence in its exact API and didn't want to guess.
`intsvy` — depends on `Hmisc`, a genuinely heavy package that adds real
install weight and risk on top of everything else. `plm` (panel/
longitudinal regression) — on the original sociology-package request
list, deferred when janitor + marginaleffects were prioritized instead;
still open, moderate risk (one dependency, `bdsmatrix`, has compiled C
code). `stargazer`/`texreg`/`sjPlot::tab_model()` — other table-formatting
packages in the same family as `modelsummary` (which *is* now built, via
`output = "data.frame"` to sidestep the checkability issue); these
alternatives weren't requested and would mostly duplicate that unit. All
of these can be added later following the same lazy-install pattern as
units 14–33.

## Hosting on GitHub Pages

This app lives at <https://github.com/quentin-maire/R-app-style-learning>.

1. Push this repo to that GitHub repository as-is (`index.html` at the root).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
4. GitHub will publish at <https://quentin-maire.github.io/R-app-style-learning/>
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
  packages: "Array of package names the SOLUTION code calls, e.g. ['dplyr'] — [] means base R only. Purely informational, shown as chips on Learn and Practice; never used for grading.",
  instructions: "HTML string shown in the Learn view and (always visible) in Practice",
  preload: "Optional note describing preloaded variables",
  setup: "Optional R code run silently before the student sees the lesson",
  starter: "Starter code shown in the editor (Easy tier)",
  starterMedium: "Optional — Medium tier: a comment + blank assignment line, no skeleton",
  starterHard: "Optional — Hard tier: just a task comment, everything else blank",
  solution: "Fully correct R code — written into the box by 'Display answer'",
  hint: "Shown when the student taps Hint in the Help sheet",
  help: "HTML shown in the 'Help' popup — explain the function(s) used, plus a standalone example different from the exercise",
  explain: { use: "...", family: "...", needs: "...", assumes: "...", formula: "..." },  // use and family required; the rest optional — shown as Notes on Learn and at the top of Help
  hasPlot: "Optional true — the lesson draws a plot; Run renders it to the canvas",
  capstone: "Optional true — draws the node as a trophy and doubles the first-completion XP (used by the Capstone units)",
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

**Lessons are ordered by workflow phase, not by when they were added.**
New lessons/units should be inserted into the phase they conceptually
belong to (see the five phases above, or the comment directly above the
`LESSONS` array in the code) rather than appended to the end by default.
Since completion is tracked by lesson `id` and unlocking just looks at
"the previous lesson in array order," inserting a lesson mid-array is
always safe — it doesn't disturb any other lesson's completion state,
and the newly-inserted lesson simply unlocks once whatever now sits
before it is done.

## Files in the repo

- `index.html` — the whole app (lessons, styles, scripts).
- `manifest.webmanifest`, `sw.js`, `icons/` — the PWA files (see
  "Installing on Android"). Keep them in the same folder as `index.html`.
- `README.md`, `LICENSE`, `.gitignore`.

## Keeping this README current

Whenever lessons, units or features change: update the lesson and unit
counts in the opening paragraph, the phase/unit list (renumbering units
after any insertion), the phase comment above `LESSONS` in `index.html`,
and any section describing behaviour that changed. Run the in-app
self-test after each update.

## Notes

- webR loads its engine from `webr.r-wasm.org` and its packages from
  `repo.r-wasm.org` at runtime, so an internet connection is required on
  first load per session (results are cached by the browser after that).
- Not a native Android app — no Play Store listing, no native APIs. It's
  an installable web app (PWA-style), which is enough for offline-ish,
  home-screen use once loaded.

## License

MIT — see [LICENSE](LICENSE).
