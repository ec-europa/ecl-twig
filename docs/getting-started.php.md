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

## Rendering

```shell
$ php render.php
```
