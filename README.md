<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/cncf/artwork/main/other/cncf/horizontal/white/cncf-white.svg" width="320">
    <img src="https://raw.githubusercontent.com/cncf/artwork/main/other/cncf/horizontal/color/cncf-color.svg" width="320" alt="CNCF" />
  </picture>
</p>

<h1 align="center">First PR Lab</h1>

<p align="center">
  <a href="https://ayushmore1214.github.io/First_Pr_lab/">Live Site</a> &nbsp;·&nbsp;
  <a href="https://github.com/Ayushmore1214/First_Pr_lab/issues">Issues</a> &nbsp;·&nbsp;
  <a href="CONTRIBUTING.md">How to Contribute</a>
</p>

<p align="center">
  <a href="https://github.com/Ayushmore1214/First_Pr_lab/actions/workflows/deploy.yml"><img src="https://github.com/Ayushmore1214/First_Pr_lab/actions/workflows/deploy.yml/badge.svg" alt="Deploy" /></a>
  <a href="https://github.com/Ayushmore1214/First_Pr_lab/issues"><img src="https://img.shields.io/github/issues/Ayushmore1214/First_Pr_lab" alt="Open Issues" /></a>
  <a href="https://github.com/Ayushmore1214/First_Pr_lab/pulls"><img src="https://img.shields.io/github/issues-pr/Ayushmore1214/First_Pr_lab" alt="Open PRs" /></a>
  <a href="https://github.com/Ayushmore1214/First_Pr_lab/graphs/contributors"><img src="https://img.shields.io/github/contributors/Ayushmore1214/First_Pr_lab" alt="Contributors" /></a>
  <a href="https://github.com/Ayushmore1214/First_Pr_lab/stargazers"><img src="https://img.shields.io/github/stars/Ayushmore1214/First_Pr_lab" alt="Stars" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/Hacktoberfest-friendly-orange" alt="Hacktoberfest friendly" />
</p>

<p align="center">If this helped you understand one new thing, a star means the next person finds it too.</p>

---

Everyone says "just open a PR" like that sentence means something to someone who has never done it.

You go to the repo. You stare at the Issues tab. Nothing makes sense. You close the tab and never come back.

Sound familiar? Good. You found the right place.

This is an open source glossary of open source terms. Yes, that is recursive. The whole point is that you learn how open source works *by actually doing it* - on a project built specifically for that moment. Fork it, add your name, fix a typo in the docs, and by the end you have done the exact same workflow that every real contributor uses. On a live site. With real CI. With real code review.

No hand-wavy tutorials. Just the thing itself.

---

## What is this?

A glossary of 18 open source terms - fork, pull request, branch, upstream, DCO, maintainer, CI/CD, and more - built as a live website that you contribute to while learning these concepts. The terms sit at the foundation of the CNCF ecosystem. If you are heading toward Kubernetes, Prometheus, or any cloud native project, this is where the vocabulary starts.

The site is live at [ayushmore1214.github.io/First_Pr_lab](https://ayushmore1214.github.io/First_Pr_lab/). When your PR gets merged, your change ships there. Real URL. Real deploy. Something you can actually point to.

## Who is this for?

You if:

- You have heard of open source but never actually contributed
- You tried once, got lost somewhere in the fork-clone-branch maze, and quietly gave up
- You know the commands but want a safe place to practice the real workflow
- You are a student, a career changer, or someone who has been coding for years but never opened a PR

Not for you if you are expecting a project with zero friction and a merge button that just says "yes." There is a real review process here. That is the whole point.

(Stars from people who are just passing through are still welcome though.)

## Why I built this

I kept watching people give up before their first contribution. Not because they could not code - because the vocabulary was dense, the tools were confusing, and every "beginner-friendly" resource assumed you already knew what a remote was.

I wanted to build the project I wish existed when I was starting. Something with real CI/CD, real code review, real git workflow - but scoped small enough that you can understand the whole codebase in one sitting and actually ship something by the end of the day.

If this gets even one person past their first PR, it did its job.

## What is in the repo

```
src/
  index.html   the live glossary - 18 terms, 4 categories, search + dark mode
  styles.css   all the styling
  main.js      search, filter, dark mode, keyboard shortcuts

docs/
  6 plain-English guides on open source concepts

.github/
  workflows/   5 automated workflows (deploy, DCO check, HTML lint, PR title, stale bot)

CONTRIBUTING.md   every command, every step, written for people who have never done this
CONTRIBUTORS.md   everyone who has contributed (your name goes here)
LABELS.md         what every label in this project means
WORKFLOW.md       what each automated check does and why
```

No npm. No Docker. No "install these 14 things first." If you can open a file in a browser, you can run this.

## How contributing works

Two steps. In order.

**Step 1 - Intro PR.** Add your name to `CONTRIBUTORS.md`. The PR title must be exactly `My First Open Source Contribution`. This takes about 20 minutes including setup and teaches you the full workflow - forking, cloning, branching, committing with a DCO sign-off, pushing, and opening a PR.

**Step 2 - Pick a real issue.** Once your intro PR is merged, go to the [Issues tab](https://github.com/Ayushmore1214/First_Pr_lab/issues) and find something labeled `good first issue`. Leave a comment to claim it. The maintainer assigns it to you within 24 hours. You fix it. It ships live.

The complete guide - what is git, what is a fork, every command, what to do when something breaks - is in [CONTRIBUTING.md](CONTRIBUTING.md). Written for people who have never touched open source, not "beginner-friendly" in the way that documentation sometimes says beginner-friendly and immediately assumes you know what HEAD means.

## Running it locally

```bash
git clone https://github.com/YOUR-USERNAME/First_Pr_lab.git
cd First_Pr_lab

open src/index.html       # Mac
start src/index.html      # Windows
xdg-open src/index.html   # Linux
```

That is genuinely it.

## Contributors

| Name | GitHub | LinkedIn |
|------|--------|----------|
| Ayush More | [@Ayushmore1214](https://github.com/Ayushmore1214) | [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true) |

Your name goes here after your intro PR is merged. No minimum experience required. No maximum either - if you have been writing production code for ten years and you are here adding a table row, this is a judgment-free zone. We have all been a beginner at something.

## Spread the word

If this helped you land your first contribution, share it on LinkedIn. Tag [Ayush](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true) - every post helps the next person find this, and there is a real human on the other end who will see it and appreciate it.

And if you want to say thanks without writing anything - the star button is right there at the top. Takes two seconds. Means a lot.

## Questions

Stuck at any step - any command, any error, anything confusing - reach out to Ayush on [LinkedIn](https://www.linkedin.com/in/ayush-more-3b4154341/?skipRedirect=true). Real person. Real responses. The offer is genuine.

[MIT License](LICENSE).
