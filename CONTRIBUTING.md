# Contributing to Nextjs Static Starter Kit

We would love for you to contribute to starter project and help make it even better than it is
today! As a contributor, here are the guidelines we would like you to follow:

## Getting started

Please check out one of the getting started guides about GitHub fork / pull requests workflow:

- [Forking project](https://guides.github.com/activities/forking/)
- [Fork a repo](https://help.github.com/articles/fork-a-repo/)
- [Forking](https://gist.github.com/Chaser324/ce0505fbed06b947d962)

## How to sync your fork

Your fork of the repo can fall behind as more work is done in the original repository.
It is always good idea to update your work before starting to work on new issue.
The fork can be updated by navigating to your for directory and running the following command...
`git checkout master --force && git fetch upstream && git merge upstream/master && git push`

This command assumes you're using unix or unix like environment (macOS, cygwin, WSL, ...).
If not you might need to execute commands one by one instead of chaining them with `&&`.

## Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the [change log](https://github.com/techhiveIO/nextjs-static-starter-kit/blob/master/CHANGELOG.md)**.

### Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**.
The **header** is mandatory and the **scope** of the header is optional.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Type

Commit types that will appear in changelog:

- **feat** - adding new feature
- **fix** - fixing bug (please use `fixes #<issue-number>` at the end of commit message)
- **perf** - changes to improve performance
- If there is **BREAKING CHANGE** text anywhere in the commit message, the commit will always appear in the changelog

Other types that will not appear in changelog:

- **docs** - changes in documentation
- **chore** - changes in build or other application unrelated changes
- **refactor** - changes to implementation without changes to functionality
- **test** - adding tests
- **style** - changes to codestyle (should be unnecessary since we use prettier)

Any line of the commit message should not be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Scope

The commit scope is specified inside of the parentheses. Scope can be omitted when changed
relates to multiple modules or even whole project. If possible, scope should refer to a module where change was performed.
Approximate steps to specify scope:

1.  change belongs to a well defined module like `core`, `shared`, `app`, ...
2.  change belongs to a "separated" bigger chung of a module,
3.  change belongs to a unique cross-cutting concern like `animations`, `logging` or `build`
4.  change belongs to a unique entity like `readme` or `contributing`

### Examples

```
fix(polyfills): add missing bootstrap reset, fixes #247
```

```
refactor(blog): reorder imports
```

```
test(tags): add dispatch filter action test, adjust existing tests
```

```
fix(app): rework main layout to prevent scrollbar issues, closes #221, closes #240
```

```
feat(post): add skeleton loading
```

```
fix(animations): fix dynamic animations in prod build, fixes #71
```

```
chore(release): 2.0.1
```

Even more [examples](https://github.com/techhiveIO/nextjs-static-starter-kit/commits/master) of commit messages from commit history of this project.

## Pull Requests (PR)

Before you submit your Pull Request (PR), consider the following guidelines:

- Search Github for an open or closed PR that relates to your submission. You don’t want to duplicate effort.
- Make your changes in a new git branch:
  `git checkout -b my-fix-branch master`
- Create your patch, following code style guidelines, and including appropriate test cases.
- Run the full test suite and ensure that all tests pass.
- Run the micro and macro performance tests against your feature branch and compare against master to ensure performance wasn’t change for the worse.
- Commit your changes using a descriptive commit messages that follows our commit message guidelines. Adherence to these conventions is necessary because release notes are automatically generated from these messages.
  `git commit -a`
  Note: the optional commit -a command line option will automatically “add” and “rm” edited files.
- Push your branch to Github.
  `git push origin my-fix-branch`
- In Github, or using your favorite Git GUI (if supported), send a pull request to master
- If the maintainers suggest changes then:
  _ Make the required updates.
  _ Re-run the test suites to ensure tests are still passing.
  _ Re-run performance tests to make sure your changes didn’t hurt performance.
  _ Rebase your branch and force push to your Github repository (this will update your pull request):
  `git rebase master -i`
  `git push -f`

After your pull request is merged
After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

- Delete the remote branch on Github either through the GitHub Web UI or your local shell as follows:
  `git push origin —delete my-fix-branch`
- Check out the master branch:
  `git checkout master -f`
- Delete the local branch:
  `git branch -D my-fix-branch`
- Update your master with the latest upstream version:
  `git pull —ff upstream master`
