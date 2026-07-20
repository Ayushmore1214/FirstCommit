# What is a Fork?

When you want to contribute to someone else's project, you cannot push changes directly to their repository. You do not have write access. What you do instead is fork it.

A fork is your own copy of the repository, created under your GitHub account. It is completely yours - you can change anything in it without affecting the original project at all.

## How forking works

Go to any repository on GitHub and click the "Fork" button in the top right corner. GitHub creates a copy of the entire project under your account, including all the files, all the branches, and the full commit history.

Once you have your fork, clone it to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/FirstCommit.git
```

You make your changes locally, push them to your fork, and then open a pull request from your fork back to the original project. The maintainer reviews your changes and decides whether to merge them.

## Your fork and the original

After you fork, your copy and the original are separate. If the original project gets new commits while you're working, your fork does not automatically pick them up. You have to pull them in manually.

The original repository is called the upstream. You add it as a remote and fetch from it when you need to sync:

```bash
git remote add upstream https://github.com/Ayushmore1214/FirstCommit.git
git fetch upstream
git merge upstream/main
```

## Why the fork model exists

The fork model is what makes open source work at scale. The maintainer does not have to give every contributor write access. Anyone can fork, make changes, and propose them. The maintainer keeps control over what actually gets merged into the project.

## Related terms

- [What is a Branch?](what-is-a-branch.md)
- [What is a Pull Request?](what-is-a-pull-request.md)
