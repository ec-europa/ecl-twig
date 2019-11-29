#!/usr/bin/env node

/* eslint-disable global-require, import/no-unresolved, import/no-dynamic-require, import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const twing = require('../../../../src/ec/.storybook/environment');

const system = 'ec';
const extension = 'html.twig';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;

const components = fs.readdirSync(systemFolder);

components.forEach(component => {
  let componentTemplate = '';
  const pkg = `${system}-component-${component}`;
  /* Three known exceptions.. */
  if (component === 'checkbox' || component === 'radio') {
    componentTemplate = `${component}-group`;
  } else {
    componentTemplate = component;
  }
  if (component === 'language-list') {
    componentTemplate = `${component}-splash`;
  }
  /* This is the template we are going to render */
  const template = `@ecl-twig/${pkg}/ecl-${componentTemplate}.${extension}`;
  const dataFiles = fs.readdirSync(`${systemFolder}/${component}/specs`);

  dataFiles.forEach(dataFile => {
    const variant = path
      .basename(dataFile)
      .replace(/.json/, '')
      .replace('data', component);

    let data = '';
    // @todo: Understand the way inpage is built.
    if (component === 'inpage-navigation') {
      data = require(`${systemFolder}/${component}/specs/data.json`);
    } else if (component === 'page-filler') {
      data = require(`${systemFolder}/${component}/specs/page-filler.json`);
    } else {
      data = require(`${systemFolder}/${component}/specs/${dataFile}`);
    }

    /* Render with twing */
    let html = twing.render(template, data);
    /* Same problem we have with prettier on the php rendered file */
    if (componentTemplate === 'gallery') {
      html = html.replace(/<\/video>/g, '/>');
    }

    fs.writeFile(
      `${systemFolder}/${component}/js/${variant}.js.html`,
      html,
      err => {
        if (err) throw err;
      }
    );
  });
});
