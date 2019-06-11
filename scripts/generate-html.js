#!/usr/bin/env node

/* eslint-disable global-require, import/no-dynamic-require, import/no-extraneous-dependencies */

const fs = require('fs');
const path = require('path');
const Twig = require('twig');

const system = process.env.ECL_SYSTEM;

if (!system) {
  throw new Error('Missing ECL_SYSTEM environment variable.');
}

const extension = 'html.twig';
const rootFolder = process.cwd();
const distFolder = `${rootFolder}/dist`;
const systemFolder = `${distFolder}/${system}`;

const components = fs.readdirSync(systemFolder);

components.forEach(component => {
  const componentFiles = fs.readdirSync(`${systemFolder}/${component}`);
  const dataFiles = componentFiles.filter(file =>
    file.includes('data--audio.js')
  );

  dataFiles.forEach(dataFile => {
    const data = require(`${systemFolder}/${component}/${dataFile}`);
    const variant = dataFile
      .replace('.json', '')
      .replace('data--audio.js', component);
    const pkg = `${system}-component-${component}`;
    const template = `${rootFolder}/src/${system}/packages/${pkg}/${component}.${extension}`;

    Twig.renderFile(path.resolve(template), data, (err, html) => {
      if (err) throw err;

      fs.writeFileSync(`${systemFolder}/${component}/${variant}.js.html`, html);
    });
  });
});
