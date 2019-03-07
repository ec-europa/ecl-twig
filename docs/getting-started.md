# Getting started

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

### Naming

All the packages that will be published to npm are located in `src/{ec,eu}/packages`. Those are all public packages. The other folders serve only for developement purpose.

Each Twig component is an npm package. The package should be named after the component's name. Example, the EC `button` component lies in a package named `@ecl-twig/ec-component-button`. Adding `*-component-*` to the name offers us more flexibility if in the future we want to publish more packages.

In each package, the main Twig template file should be name after the component's name too, follow by `.html.twig` extension. Example, the main template file for the EC `button` component is named `button.html.twig`.

There's also an extra package: `@ecl-twig/{ec,eu}-components` which is used to automatically import all the availble Twig components. Don't forget to add your newly created component to the list of dependencies of this package!

### Testing

Each component comes with a story `*.story.js` which is consumed by [Storybook](https://storybook.js.org/). In this story file, you import the main Twig template and you pass data to it. That's it!

You can use knobs to make the showcase more dynamic and interactive.

More features will come in the near future...

### EC system

```bash
yarn start:ec
```

### EU system

```bash
yarn start:eu
```

## Lint

Check coding conventions (JS only):

```bash
yarn lint
```

## Test

Check snpashots with:

```bash
yarn jest
```

Update snapshots with:

```bash
yarn jest-update
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
