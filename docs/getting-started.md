# Getting started

**Recommended versions of required software:**

- Node.js >= 10.16.0
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

### ECL Compliance

The ecl-twig library comes with a special component named `ecl-compliance`, which defines a parent template for the ecl compliance checks to be performed.

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
composer install --no-scripts
```

We install the libraries with the no-scripts flag in order to avoid the override of the git hooks created by husky.
Grumphp would normally take over the pre-commit git hook script that is already in use in our system, indeed.
To circumvent the issue we added a script and we suggest you to run it together with the installation, anyway you can activate
the grump-php pre-commit hook by running:

```bash
yarn grump-en
```

To disable the pre-commit execution of the grump-php sniff you run:

```bash
yarn grump-dis
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

## Test

Check snapshots with:

```bash
yarn jest
```

Update snapshots with:

```bash
yarn jest-update
```

Check the rendering of a single component in php and js and diff the resulting templates:

```bash
yarn check:component "system(ec/eu)" "componentName"
```

Diff the existing templates

```bash
yarn diff "ec or eu"
```

Diff a component rendered via php with the ECL markup
(interactive script that fetches the html from the ECl storybook and matches that with the right variant rendered via php)

```bash
yarn diff:ecl "ec or eu"

```

Make a diff between all the available variants files and the ECL markup for the corresponding variants.

```bash
yarn diff:ecl-full "ec or eu"
```

## Dist

Build the dist for the twing based storybook:

```bash
yarn twing:dist
```

Build the dist for the php based storybook:

```bash
yarn php:dist
```

Build both:

```bash
yarn dist
```

Test the dist:

```bash
npx serve build
```

## PHP Twig Storybook

If you want test components with PHP rendering, please ensure that you have the required dependencies to work also with the PHP tool-chain, i.e. Composer.

Details are included in the `README.md` of `@ecl-twig/php-renderer`.

The following commands are available from the project root: (please ensure data is generated before executing any rendering command)

Get dependencies.

```bash
yarn php:install
```

Remove files and folders from previous builds.

```bash
yarn php:clean
```

Generate data from specification files.

```bash
yarn render:dataGen
```

Generate HTML rendered by Twig PHP:

```bash
yarn render:php
```

Generate HTML rendered by Twing

```bash
yarn render:js
```

All these commands can be executed at once passing the generated files through prettier:

```bash
yarn render-php-js "ec or eu"
```

The whole process of installing the dependencies, generating the needed files, then linting them and finally launching a storybook instance on port 9002 is done by:

```bash
yarn start:php-ec
```

```bash
yarn start:php-eu
```

All output files are stored in `./php/packages/ec` folder.

## Libraries update

The task of upgrading the dependencies is executed via the command:

```bash
yarn upgrade-interactive --latest --exact
```

which will retrieve all the possible upgrades marking them in green, yellow or red depending on the changes included in these packages.
