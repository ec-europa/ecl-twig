#!/usr/bin/env node

/* eslint-disable global-require, import/no-dynamic-require, import/no-extraneous-dependencies */

const fs = require('fs');
const twing = require('../src/ec/.storybook/environment');

const system = 'ec';

if (!system) {
  throw new Error('Missing ECL_SYSTEM environment variable.');
}

const extension = 'html.twig';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;

const components = fs.readdirSync(systemFolder);

components.forEach(component => {
  const dataFiles = fs.readdirSync(`${systemFolder}/${component}/specs`);

  dataFiles.forEach(dataFile => {
    let componentTemplate = '';
    const data = require(`${systemFolder}/${component}/specs/${dataFile}`);
    const pkg = `${system}-component-${component}`;
    if (component === 'checkbox' || component === 'radio') {
      componentTemplate = `${component}-group`;
    } else {
      componentTemplate = component;
    }
    const template = `@ecl-twig/${pkg}/${componentTemplate}.${extension}`;

    const html = twing.render(template, data);
    fs.writeFile(
      `${systemFolder}/${component}/js/${component}.js.html`,
      html,
      err => {
        if (err) throw err;
      }
    );
  });
});
