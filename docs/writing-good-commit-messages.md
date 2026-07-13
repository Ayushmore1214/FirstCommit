# Writing Good Commit Messages

A commit message is a short description of what changed and why. It gets stored permanently in the project history. A lot of developers treat commit messages as an afterthought - "fixed stuff", "wip", "asdfgh" - and then wonder why the history is useless when they're trying to debug something six months later.

Good commit messages make a project easier to maintain. They're worth getting right.

## The format this project uses

```
type: short description of what changed
```

The type tells you the category of the change:

- `feat` - a new feature or addition
- `fix` - a bug fix
- `docs` - documentation only
- `style` - CSS or formatting, no logic changes
- `content` - adding or editing glossary terms

Examples:

```
feat: add keyboard shortcut hint below search bar
fix: card border not showing on Safari mobile
docs: fix typo in what-is-a-fork.md
content: add Merge Conflict term to glossary
```

## What makes a commit message good

**It describes what changed, not what you did.** "Fix search bar" is better than "I fixed the search bar." The history already knows you made the commit.

**It's specific enough to be useful without a diff.** "Fix bug" tells nobody anything. "Fix search not resetting when filter changes" tells you exactly what broke and what was done about it.

**The type prefix matches the actual change.** If you changed CSS and called it `feat`, the next person reading the history has to open the diff to understand what happened.

## The sign-off line

Every commit in this project needs a `Signed-off-by` line from the DCO check. Add it automatically with:

```bash
git commit -s -m "fix: your message here"
```

The `-s` flag appends `Signed-off-by: Your Name <your@email.com>` using your git config. You do not have to type it manually.

## Related terms

- [Understanding GitHub Issues](understanding-github-issues.md)
- [What is a Pull Request?](what-is-a-pull-request.md)
