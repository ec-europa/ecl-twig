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

All the packages that will be published to npm are located in `src/{ec,eu}/packages`. Those are all public packages. The other folders serve only for development purpose.

Each Twig component is an npm package. The package should be named after the component's name. Example, the EC `button` component lies in a package named `@ecl-twig/ec-component-button`. Adding `*-component-*` to the name offers us more flexibility if in the future we want to publish more packages.

In each package, the main Twig template file should be name after the component's name too, follow by `.html.twig` extension. Example, the main template file for the EC `button` component is named `button.html.twig`.

There's also an extra package: `@ecl-twig/{ec,eu}-components` which is used to automatically import all the available Twig components. Don't forget to add your newly created component to the list of dependencies of this package!

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

This library is an implementation of the ECL vanilla components using the twig render engine. Being these twig templates used primarily used in a Drupal environment the version of twig language to be used is the [1.x](https://twig.symfony.com/doc/1.x/).

Please ensure that no syntax or features from twig 2.x is used, in order to help you with the checks on the syntax and formatting of the twig templates different solution for sniffig and linting the files are available.

### Js

```bash
yarn lint
```

### Twig

The libraries we use for sniffing and linting the twig templates all are php ones, therefore in order to be able to use the functionality in ECl-twig you would need a working installation of php (7.x) and composer to be installed.

```bash
composer install --no-scripts && composer grump-en
```

We install the libraries with the no-scripts flag in order to avoid the override of the git hooks created by husky.
Grumphp would normally take over the pre-commit git hook script that is already in use in our system, indeed.
To circumvent the issue we added a script and we suggest you to run it together with the installation, anyway you can activate
the grump-php pre-commit hook by running:

```bash
composer grump-en
```

at any time.

To disable the pre-commit execution of the grump-php sniff you run:

```bash
composer grump-dis
```

You can also run the sniffer manually on the code in different ways using the command line:

```bash
composer twig-cs
```

Executes the [twigcs](https://github.com/friendsoftwig/twigcs) on all the packages.

```bash
composer cs "pathToTheTemplateFile"
```

Executes the [twigcs](https://github.com/friendsoftwig/twigcs) script on the component you specified.

```bash
composer grump-cs
```

Runs [grumphp](https://github.com/phpro/grumphp) on all the packages, one of its tasks is twigcs, the output of this command should be equal to "composer run twig-cs".

#### Disable/Enable pre-commit hook

Your environment should be already configured once composer install has run, but you can enable and disable the automatic check happening in the pre-commit hook by running these commands:

```bash
composer run grump-en
```

To enable the pre-commit hook.

```bash
composer run grump-dis
```

To disable the pre-commit hook.

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
