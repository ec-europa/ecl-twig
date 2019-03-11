# Getting started

**Recommended versions of required software:**

- PHP >= 7.x
- Composer >= v1.8.4

## Introduction

Files related to PHP:

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

## Rendering

Either way:

```shell
# yarn render
```

```shell
$ composer run render
```

## Notes

The `npm` scripts facilitate integration with Node-based tool-chain. Commands' name may differ because of reserved keywords, such as `install` in composer, which is replaced by `setup`.
