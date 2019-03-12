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

## Installation

Either way:

```shell
$ yarn install
```

```shell
$ composer run install
```

## Generate data

In order for twig templates to render properly, they need proper data input. This input comes from various places:

- ECL specifications, from ECL repository, i.e. `@ecl/ec-specs-accordion`
- Override in this workspace, i.e. `@ecl-twig/ec-component-accordion` has `demo/data`

To generate these, run the following:

```shell
$ yarn generate:ecData
```

This will iterate through all components listed in `@ecl-twig/ec-components` and will create folders for their corresponding targets. Then it will create `data.json` file for each component, which can later be used by the renderer.

## Generate HTML markup by Twig PHP

Either way:

```shell
$ yarn generate:ecHtml
```

```shell
$ composer run render
```

## Generate all assets

You can generate data and resulting HTML in a single operation:

```shell
$ yarn generate:ec
```

## Notes

The `npm` scripts facilitate integration with Node-based tool-chain. Commands' name may differ because of reserved keywords, such as `install` in composer, which is replaced by `setup`.
