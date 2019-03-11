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

## Generating data

In order for twig templates to render properly, they need proper data input. This input comes from various places:

- ECL specifications, from ECL repository, i.e. `@ecl/ec-specs-accordion`
- Override in this workspace, i.e. `@ecl-twig/ec-component-accordion` has `demo/data`

To generate these, run the following:

```shell
$ yarn generate
```

This will iterate through all components listed in `@ecl-twig/ec-components` and will create folders for their corresponding targets. Then it will create `data.json` file for each component, which can later be used by the renderer.

## Rendering

Either way:

```shell
$ yarn render
```

```shell
$ composer run render
```

## Notes

The `npm` scripts facilitate integration with Node-based tool-chain. Commands' name may differ because of reserved keywords, such as `install` in composer, which is replaced by `setup`.
