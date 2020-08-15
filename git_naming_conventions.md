###### [Introduction](README.md) > **Git Naming Conventions**

# Git Naming Conventions

## Description

This naming practice is adapted from [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) to name branches. As for commit messages, it follows guides from the project [commitlint](https://github.com/conventional-changelog/commitlint).

## Branches

### Guides

`master` - Production; we should be careful before merging.
`develop` - Main development branch; we merge `feature/*` PRs into this branch.
`feature/*` - A feature branch just for a SINGLE feature/fix; We try to keep these as SMALL AS POSSIBLE so our PR reviews are not too challenging.
`release/vX.X.X` Used to release the sprints work into production.
`hot-fix/*` - We can create some immidiate fixes to patch `master` branch; however it also should be used with care

### Example

```
feature/hero-section
```

```
release/v0.0.1
```

## Commit messages

### Guides

According to commitlint, a valid commit message should follow this syntax:
`git commit -m "type(scope)?: subject`

However, as this page is not a big project, so we can skip the "scope", and keep the remaining parts which are the "type" and "subject".

The purpose of following this practice is to keep the history log clean so we can track back and recover our project when errors happen.

#### The Type

There are certain types which can be used in our commit messages:

- feat: a new feature
- fix: a bug fix
- docs: changes to documentation
- style: formatting, missing semicolons, etc; no code change
- test: adding tests, refactoring test; no production code change

There are absolutely more types than the above list. If you want to know/add more, please refer to this [link](https://github.com/conventional-changelog/commitlint).

#### The subject

Subjects are simply what we have done when adding changes to our code base. When writing a subject, it's recommended to be in _present tense_ to keep it simple.

### Examples

```
fix: change color of the nav-bar
```

```
feat: add footer
```

**[Click here](README.md)** to return to Introduction Page.
