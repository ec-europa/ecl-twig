#!/usr/bin/env node

/* eslint-disable global-require, import/no-unresolved, import/no-dynamic-require, import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const twing = require('@ecl-twig/ec-storybook/.storybook/environment');

const extension = 'html.twig';
const rootFolder = path.resolve(__dirname, '../../../');
const distFolder = `${rootFolder}/php`;
const args = process.argv.slice(2);
const systems = args[0] ? [args[0]] : ['ec', 'eu'];

for (const system of systems) {
  const systemFolder = `${distFolder}/packages/${system}`;
  const components = args[1] ? [args[1]] : fs.readdirSync(systemFolder);
  // Loop in each component found.
  for (const component of components) {
    const pkg = `ec-component-${component}`;
    let componentTemplate = component;
    // Our validation component.
    if (component === 'ecl-compliance') {
      continue;
    }
    // Two known exceptions..
    if (component === 'checkbox' || component === 'radio') {
      componentTemplate = `${component}-group`;
    }
    // This is the template we are going to render.
    const template = `@ecl-twig/${pkg}/ecl-${componentTemplate}.${extension}`;
    const dataFiles = fs.readdirSync(`${systemFolder}/${component}/specs`);

    for (const dataFile of dataFiles) {
      const variant = path
        .basename(dataFile)
        .replace(/.json/, '')
        .replace('data', component);

      const data = require(`${systemFolder}/${component}/specs/${dataFile}`);

      // Render with twing.
      let html = twing.render(template, data);

      if (component === 'inpage-navigation') {
        let pageFillerHtml = '';
        for (const content of data.links) {
          pageFillerHtml += content.item;
        }
        html = `<div class="ecl-container">
                  <div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container>
                    <div class="ecl-col-md-3">${html}</div><div class="ecl-col-md-9">
                      ${pageFillerHtml}
                    </div>
                  </div>
                </div>`;
      }

      fs.writeFile(
        `${systemFolder}/${component}/js/${variant}.js.html`,
        html,
        (err) => {
          if (err) throw err;
        }
      );
    }
  }
}
