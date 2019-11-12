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
  let data = '';
  dataFiles.forEach(dataFile => {
    let componentTemplate = '';
    /* We choose some data file specifically in case we can improve the rendering */
    if (component === 'breadcrumb') {
      data = require(`${systemFolder}/${component}/specs/data-simple.json`);
    } else if (component === 'text-area' || component === 'text-input') {
      data = require(`${systemFolder}/${component}/specs/data--default.json`);
    } else if (component === 'inpage-navigation') {
      data = require(`${systemFolder}/${component}/specs/data.json`);
    } else if (component === 'page-filler') {
      data = require(`${systemFolder}/${component}/specs/page-filler.json`);
    } else {
      data = require(`${systemFolder}/${component}/specs/${dataFile}`);
    }

    const pkg = `${system}-component-${component}`;
    /* Two known exceptions.. */
    if (component === 'checkbox' || component === 'radio') {
      componentTemplate = `${component}-group`;
    } else {
      componentTemplate = component;
    }
    /* This is the template we are going to render */
    const template = `@ecl-twig/${pkg}/ecl-${componentTemplate}.${extension}`;
    /* Render with twing */
    let html = twing.render(template, data);
    /* Same problem we have with prettier on the php rendered file */
    if (componentTemplate === 'gallery') {
      html = html.replace(/<\/video>/g, '/>');
    }
    fs.writeFile(
      `${systemFolder}/${component}/js/${component}.js.html`,
      html,
      err => {
        if (err) throw err;
      }
    );
  });
});
