# Keeping your Fork in Sync

After your first contribution, something slightly confusing happens.

You come back a few days later, open the repository again, and notice that the original project has changed. New issues have been closed, new features have been added, and other people have merged pull requests.

But your fork still looks exactly the same.

That's normal.

A fork is your own copy of the project. Once GitHub creates it, it does not automatically stay updated with the original repository. If the original project changes, you have to bring those changes into your fork yourself.

## Understanding `origin` and `upstream`

When you clone your fork, Git automatically creates a remote called `origin`.

`origin` points to **your fork** on GitHub. This is where you push your own commits.

The original repository is usually added as another remote called `upstream`.

`upstream` points to **the project you forked from**. You normally fetch updates from it, but you do not push your own changes there.

You can see which remotes your repository knows about by running:

```bash
git remote -v
```

This lists every remote and the URL it points to.

## Adding the upstream remote

If you have not added the original repository yet, run:

```bash
git remote add upstream https://github.com/OWNER/REPOSITORY.git
```

Replace the URL with the original repository's URL.

After adding it, check that everything looks correct:

```bash
git remote -v
```

You should now see both `origin` and `upstream`.

## Fetching the latest changes

Before starting a new contribution, download the latest changes from the original project:

```bash
git fetch upstream
```

This command downloads the newest commits from the original repository. It does **not** change your files yet. It simply makes the new commits available on your computer.

Next, switch to your local `main` branch:

```bash
git checkout main
```

This makes sure you're updating the correct branch.

Now merge the latest changes into your local copy:

```bash
git merge upstream/main
```

This updates your local `main` branch with everything that has been added to the original project since you last synced.

If you also want your fork on GitHub to match your updated local branch, push the changes:

```bash
git push origin main
```

This updates your fork so it stays in sync as well.

## What if Git reports a conflict?

Sometimes Git cannot automatically combine your changes with the latest updates.

This is called a **merge conflict**.

Merge conflicts are completely normal and do not mean you broke anything. Git is simply asking you to decide which version of the conflicting changes should be kept.

Take your time, resolve the conflicts, and continue. Most contributors run into merge conflicts eventually.

## Build the habit early

The easiest way to avoid problems is to sync your fork **before** creating a new branch, not after.

A simple workflow looks like this:

1. Fetch the latest changes from `upstream`.
2. Update your local `main` branch.
3. Push the updated `main` branch to your fork.
4. Create a new feature branch.
5. Start working.

Keeping your fork up to date makes future pull requests much easier and helps you avoid unnecessary conflicts.