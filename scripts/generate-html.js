#!/usr/bin/env node

/* eslint-disable global-require, import/no-dynamic-require, import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const twing = require('../src/ec/.storybook/environment');

const system = 'ec';
const extension = 'html.twig';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
const systemFolder = `${distFolder}/packages/${system}`;

const components = fs.readdirSync(systemFolder);

components.forEach(component => {
  let componentTemplate = '';
  const pkg = `${system}-component-${component}`;
  /* Two known exceptions.. */
  if (component === 'checkbox' || component === 'radio') {
    componentTemplate = `${component}-group`;
  } else {
    componentTemplate = component;
  }
  /* This is the template we are going to render */
  const template = `@ecl-twig/${pkg}/ecl-${componentTemplate}.${extension}`;
  const dataFiles = fs.readdirSync(`${systemFolder}/${component}/specs`);

  dataFiles.forEach(dataFile => {
    const variant = path
      .basename(dataFile)
      .replace(/.json/, '')
      .replace('data', component);

    /* We choose some data file specifically in case we can improve the rendering */
    let data = '';
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

    if (component === 'link') {
      data.link = {
        extra_classes: data.variant ? data.variant : '',
        type: 'standalone',
        label: data.label,
        href: data.href,
        icon: data.icon ? data.icon : '',
      };
    } else if (component === 'icon') {
      if (data.shape) {
        data.icon = {};
        data.icon.name = data.shape;
      }
    } else if (component === 'file') {
      data = data.dataWithTranslation;
    } else if (data.dataDefault) {
      // data = data.dataDefault;
    } else if (data.bannerDataDefault) {
      data = data.bannerDataDefault;
    } else if (data.dataGroup1) {
      data = data.dataGroup1;
    } else if (data.dataLong) {
      data = data.dataLong;
    } else if (data.englishData) {
      data = data.englishData;
    } else if (component === 'hero-banner') {
      data.link = { link: data.link };
    }
    /* Render with twing */
    let html = twing.render(template, data);
    /* Same problem we have with prettier on the php rendered file */
    if (componentTemplate === 'gallery') {
      html = html.replace(/<\/video>/g, '/>');
    }
    if (component.includes('site-header')) {
      html = html.replace(/static\/media\/logo--en.svg/g, '/logo--en.svg');
    }

    html = html
      .replace(
        /xlink:href="([/]?static\/icons.svg)?/g,
        'xlink:href="/icons.svg'
      )
      .replace(/xlink:href="#/g, 'xlink:href="/icons.svg');

    fs.writeFile(
      `${systemFolder}/${component}/js/${variant}.js.html`,
      html,
      err => {
        if (err) throw err;
      }
    );
  });
});
