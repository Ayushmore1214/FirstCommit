# Understanding GitHub Issues

An issue is a tracked conversation on a GitHub repository. It could be a bug report, a feature request, or a question. Issues are how a project organizes its work - everything that needs to happen eventually starts as an issue.

## What issues look like

Every issue has a title, a body, labels, and a number. The number is how people reference it in commits and PRs. If you write `Fixes #14` in a PR description, GitHub automatically closes issue #14 when the PR is merged.

Issues stay open until they're resolved or the maintainer decides they're no longer relevant and closes them.

## How to read an issue before claiming it

Before you comment to claim an issue, read the whole thing. Check:

- What exactly is being asked for - sometimes the title and the body describe slightly different things
- Whether anyone else has already claimed it (look for a comment, or check if it's assigned to someone in the sidebar)
- Whether there's been any discussion in the comments that changes what needs to be done

Jumping straight to "I'd like to work on this" without reading the full issue is how you end up doing the wrong thing.

## Labels

Labels organize issues by type and area. This project uses labels like `good first issue`, `docs`, `style`, and `javascript` to help contributors find issues that match what they're comfortable with. The full label guide is in [LABELS.md](../LABELS.md).

## The difference between an issue and a PR

An issue describes a problem or a task. A PR is the solution. Issues can exist without PRs (a bug that's known but not yet fixed), and PRs can exist without issues (a small fix that doesn't need a full discussion). For most changes in this project, there's an issue first and a PR that closes it.

## Related terms

- [What is a Pull Request?](what-is-a-pull-request.md)
- [Writing Good Commit Messages](writing-good-commit-messages.md)
