# Getting started

**Recommended versions of required software:**

- PHP >= 7.x
- Composer >= v1.8.4

## Introduction

Files overview:

- `composer.json`: contains information about PHP dependencies, similar to `package.json`
- `composer.lock`: lock file with dependencies, similar to `yarn.lock`
- `bootstrap.php`: instantiates `$twig`
- `render.php`: uses `$twig` and renders templates

## Settings

Please select the ECL system you want to work with:

```bash
export ECL_SYSTEM=ec
```

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
