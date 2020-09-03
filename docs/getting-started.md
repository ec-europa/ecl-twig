# Getting started

## Setup

**Recommended versions of required software:**

- Node.js >= 10.16.0
- yarn >= 1.10.1

We recommend you to use [Node Version Manager](https://github.com/creationix/nvm) and to run `nvm install` in the root followed by `nvm use` to get the right Node.js version, the `.nvmrc` file in project root is automatically selecting the latest LTS release.

```bash
yarn
```

This command will prepare all the necessary prerequisites for working on the project.

## Develop

### Working on the EC system

```bash
yarn start:ec
```

### Working on the EU system

```bash
yarn start:eu
```

## Automated testing

The following section focuses on testing rendered output of templates.

### Snapshots

Regressions are tested by Jest snapshot testing:

```bash
yarn jest
```

Update snapshots when reported changes are desired and are to be committed as a new reference:

```bash
yarn jest:update
```
