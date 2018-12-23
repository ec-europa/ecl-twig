# ECL Twig Components

Twig components for the EC/EU new visual identity.

**Recommended versions of required software:**

- Node.js >= 8.x
- yarn >= 1.10.1

We recommend you to use [Node Version Manager](https://github.com/creationix/nvm) and to run `nvm install` in the root followed by `nvm use` to get the right Node.js version, the `.mvrc` file in the root of your project is selecting for you the latest available node lts release.

## Setup

```bash
yarn
```

This will installs all the external dependencies and then links the local dependencies together after running the prepublish script if available.

## Develop

**EC system:**

```bash
yarn start:ec
```

**EU system:**

```bash
yarn start:eu
```

## Lint

Check coding conventions (JS only):

```bash
yarn eslint
```

## Dist

Build the dist:

```bash
yarn dist
```

Test the dist:

```bash
 npx serve build
```
