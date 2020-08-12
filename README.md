# ECL-Twig Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/ecl-twig/status.svg)](https://drone.fpfis.eu/ec-europa/ecl-twig)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The ECL-Twig is a library of [twig](https://twig.symfony.com/) templates, implementing the Europa Component Library (ECL) vanilla components.
ECL is a library of components applicable to all European Commission websites (hosted under europa.eu and ec.europa.eu domains), the library contains all the available components to build your website.

For information on how to use the ECL library please refer to the information available in the [ECL docs](https://github.com/ec-europa/europa-component-library/blob/v2-dev/docs/README.md)

The twig implementation of the ECL components is mainly meant to serve [Drupal 8](http://drupal.org) applications, therefore the version of twig in use is "1.x".

## EC/EU

ECL is a library used both for EC (European Commission) and EU (European Union) websites, it comes indeed with two sets of distributes resources (css, js) for the two institutions.

Although they may differ in style, in the current v2 version, the HTML markup is the same. ECL-Twig is shipping one single component that can be used while working on both EC and EU website. Templates are not system-aware because they don't need to be.

## The ECL-Twig website(s)

ECL-Twig is capable of rendering the twig templates using both a javascript implementation of twig (twing) and twig as a php package.
Two different instances of [Storybook](http://storybookjs.org) are distributed:

- [ECL-Twig Js](https://ecl-twig-js.netlify.com) - interactive (renders the twig templates)
- [ECL-Twig Php](https://ecl-twig-php.netlify.com) - static (renders html files)

The two versions EC/EU are available as a separated storybook instance in the two websites, the first page offers a simple choice between the two.

### Browser support

Unfortunately the ECL-Twig websites are not usable with Internet Explorer, in any version.

Also the support to Edge is limited to the latest releases.

## ECL-Twig components

The components released by ECL-Twig are node packages containing at least one `.html.twig` file (the component templates) and a `README.md` file with the documentation of the data structure supported by the component and an example of an include code for the template.

The [ECL-Twig Js](https://ecl-twig-js.netlify.com) website can be used to fully customise a component through the available "knobs" (interactive fields) for then getting a valid include code in the "notes" tab, the website offers also a demo of the `ECL compliance` tool available in the library, in the "validation" tab.

## Documentation

Read the technical documentation [on GitHub](docs).

## Quick start

The components provided by the ECL-Twig library are available [on npm](https://www.npmjs.com/package/@ecl-twig/ec-components).

- fetch the templates with npm or yarn, e.g. `npm install @ecl-twig/ec-components` or `yarn add @ecl/ecl-twig/ec-components`
- include the templates in your application, there are docs avaalable and an example include code provided in the `README.md` file.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission or a European Union website.
