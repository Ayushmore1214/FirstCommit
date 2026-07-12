# What is a Pull Request?

A pull request (PR) is a formal proposal to add your changes to a project. You've made changes on a branch, you've pushed that branch to GitHub, and now you're asking the maintainer to review and merge it into `main`.

The name comes from the action: you're requesting that they "pull" your changes into their codebase.

## What happens when you open a PR

1. GitHub shows the maintainer a diff - every line you added or removed, side by side with the original
2. Automated checks run (linting, DCO sign-off, title validation)
3. The maintainer reads through the changes and either approves, asks for changes, or leaves comments
4. You respond to any feedback, push updates to the same branch, and the PR updates automatically
5. Once approved, the maintainer merges it

## The review states

When a maintainer reviews your PR, they can leave it in one of three states:

**Approved** - everything looks good, the PR is ready to merge.

**Changes requested** - something needs to be fixed before merging. This is not a rejection. Read the comments, make the changes, push again.

**Commented** - the reviewer left notes but hasn't made a final decision yet. Usually means they want to discuss something first.

## How to respond to review feedback

Do not close your PR and open a new one. Make the changes the reviewer asked for, commit them with `git commit -s`, push to the same branch, and the PR updates on its own.

Reply to each comment explaining what you changed. This is not just courtesy - it helps the reviewer know what to look at when they come back to re-review.

## Draft pull requests

If you're not ready for review yet but want to show your progress, open the PR as a draft. GitHub marks it clearly and maintainers know not to review it yet. When you're ready, convert it to a regular PR with one click.

## Related terms

- [What is a Fork?](what-is-a-fork.md)
- [What is a Branch?](what-is-a-branch.md)
- [Understanding GitHub Issues](understanding-github-issues.md)
