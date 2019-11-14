# Getting started

**Recommended versions of required software:**

- PHP >= 7.x
- Composer >= v1.8.4

## Introduction

Files overview:

- `composer.json`: contains information about PHP dependencies, similar to `package.json`
- `composer.lock`: lock file with dependencies, similar to `yarn.lock`
- `bootstrap.php`: instantiates `$twig`
- `generate-data-files.js`: Creates the json files for the specs of each component
- `render.js`: Creates the js rendered files (using twing)
- `fix-data.js`: Applies fixes needed to use the specs with our components
- `story-template.txt`: A model we use to shape the story file in the initial stage
- `render.php`: uses `$twig` and renders templates, it also creates the story files used by storybook

## Installation

Either way:

```shell
$ yarn setup
```

```shell
$ composer run setup
```

Note that the `npm` scripts facilitate integration between tools in Node.js and PHP. Scripts naming may differ because of reserved keywords, such as `install` in composer, which is replaced by `setup`.

## Usage

Please use the commands from the project's root folder. In order to be able to resolve both commonjs and ES6 import style of modules for data generation, `babel` needs to be run from the root of the workspace.

From project's root, run the following:

```shell
$ yarn run | grep render
```

This will give you the list of possible operations.

Before rendering data by any engine (PHP or JavaScript), you need to generate the data. That's the only requirement in terms of order of running `render:` commands.
