## Develop

### Defining a component

Public packages which are published on NPM registry are located in `src/ec/packages`. Packages in other folders are private and are for development purposes only.

Each ECL-Twig component is an npm package. Packages are named after components. For example, the EC `button` component lies in a package named `@ecl-twig/ec-component-button`. The `*-component-*` pattern allows for future publishing flexibility.

The Twig template file in each package should be named after the component too. For example, the main template file for the EC `button` component is named `button.html.twig`.

The extra (meta) package `@ecl-twig/ec-components` is used to automatically import all the available Twig components. New components must be added in this package!

### Rendering a component

Each component comes with a [Storybook](https://storybook.js.org/) story file `*.story.js`. Twig templates are imported and visualized through these stories for demonstrating components' visual design as well as data structures and behaviors.

### EC/EU systems

The library was built with two independent systems in mind, EC and EU, the filesystem is still reflecting that although in ECL-Twig only the EC components are defined and two different storybook instances are prepared to render the components with the right style.  
Sometimes components diverge in the two systems in terms of content or data for the input that we receive as specs from ECL, if this cannot be simply handled in a single `*.story.js` file, two story files can be created, the system will select the right one for the different system looking at the beginning of the file name: `ec-{compnent}.story.js` will be chosen when starting EC and `eu-{compnent}.story.js` when starting EU.

#### Working on the EC system

```bash
yarn start:ec
```

#### Working on the EU system

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
yarn jest-update
```

## Linting

Standards for the way of writing templates is ensured with static code analysis.

The ECL-Twig library is an implementation of the ECL vanilla components using the twig render engine. Since templates are targeting Drupal primarily, ECL-Twig is based on twig [1.x](https://twig.symfony.com/doc/1.x/).

No syntax or features from twig 2.x can be used. There are a few utilities for ensuring these standards.

### JavaScript

```bash
yarn lint
```

### Twig

Libraries for sniffing and linting twig (language) templates are based on PHP. The following software packages are required for the following scripts to work:

- PHP 7 or higher
- [Composer](https://getcomposer.org/) (following scripts assume [global install](https://getcomposer.org/doc/00-intro.md#globally))

Install dependencies:

```bash
composer install --no-scripts
```

The `no-scripts` flag prevents Grumphp from overriding existing git hooks from husky (npm toolchain). To circumvent this issue, it's recommended to also run the following script:

```bash
yarn grump-en
```

It's possible to disable this pre-commit hook by:

```bash
yarn grump-dis
```

The sniffer can also be ran manually by:

```bash
composer twig-cs
```

The latter executes [twigcs](https://github.com/friendsoftwig/twigcs) on all the packages. To run the sniffer on a specific file:

```bash
composer cs /path/to/specific/template/file
```

```bash
composer grump-cs
```

Runs [grumphp](https://github.com/phpro/grumphp) on all the packages, one of its tasks is twigcs, the output of this command should be equal to "composer run twig-cs".

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
yarn render-php-js (ec|eu)
```

The whole process of installing the dependencies, generating the needed files, then linting them and finally launching a storybook instance is done by:

```bash
yarn start:php-ec
```

```bash
yarn start:php-eu
```

All output files are stored in `./php/packages/ec` and `./php/packages/eu` folder.

## Development tools

**(`yarn php:install` needs to be executed before using the following scripts)**

### Language-specific rendering

To compare rendering output of a given component in PHP and JavaScript and make a diff comparison between the two language implementations:

```bash
yarn check:component (ec/eu) (componentName)
```

### Diff comparison

The commands below rely on the existence of PHP filesystem: `yarn render-php-js`.

Make a comparison on a system-level:

```bash
yarn diff (ec|eu)
```

Make a comparison of a component rendered in PHP with the ECL version markup.

```bash
yarn diff:ecl (ec|eu)
```

For a full comparison of all components and their variants:

```bash
yarn diff:ecl-full (ec|eu)
```

Using it with no argument it will generate a report in the two systems independently.

## Building the project (creating a dist)

Build the dist for the twing-based storybook:

```bash
yarn twing:dist
```

Build the dist for the PHP-based storybook:

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

## Libraries update

The task of upgrading the dependencies is executed via the command:

```bash
yarn upgrade-interactive --latest --exact
```

which will retrieve all the possible upgrades marking them in green, yellow or red depending on the changes included in these packages.
