#!/usr/bin/env node

/* eslint-disable no-console, no-param-reassign */

const prettier = require('prettier');
const fs = require('fs');
const eclDiffVariant = require('./ecl-diff-variant.js');

const rootFolder = process.cwd();
const distFolder = `${rootFolder}/php`;
// We retrieve all the available variants files (php ones).
const getData = (component, system) => {
  const systemFolder = `${distFolder}/packages/${system}`;
  const twigFullPath = `${systemFolder}/${component}`;
  const twigFilesFolder = fs.readdirSync(`${twigFullPath}`);
  const twigFiles = twigFilesFolder.filter((elm) => {
    return elm.match(/.*\.(php.html)/gi);
  });

  const variants = [];
  twigFiles.forEach(async (twigFile) => {
    const variant = twigFile.includes('--')
      ? twigFile.replace(`${component}--`, '').slice(0, -9)
      : 'default';
    variants.push({ variant, file: twigFile, component });
  });

  return variants;
};

module.exports = (component, system) => {
  const systemFolder = `${distFolder}/packages/${system}`;
  const twigFullPath = `${systemFolder}/${component}`;
  // This is for the console. Do not consider the same message in
  // ecl-diff-variant.js a duplicate, then.
  let message = `\nChecking component: ${component}\n`;
  message += `-------------------------------------------------------`;
  console.log(message);
  const datas = getData(component, system);
  // Here we pass all the variants found to the eclDiffVariant promise in a
  // Promise.all.
  return Promise.all(
    datas.map((variant) => eclDiffVariant(variant, system))
  ).then((result) => {
    // Update the story file with the ecl diff report in a storybook panel.
    if (fs.existsSync(`${twigFullPath}/ecl-diff/${component}.diff.html`)) {
      const storyPath = `${twigFullPath}/story/${component}.story.js`;
      let newImports = `import ecl_diff_report from '../ecl-diff/${component}.diff.html';\n`;
      newImports += `import { withEclDiff } from '@ecl-twig/storybook-addon-ecl-diff';\n`;

      fs.readFile(storyPath, 'utf8', (err, data) => {
        if (err) throw err;

        if (!data.includes('ecl_diff_report')) {
          data = newImports + data;
          data = data
            .replace(
              /diff: {[^}]*/g,
              '$& }, ecl_diff: { eclDiff: ecl_diff_report'
            )
            .replace('withDiff]', 'withDiff, withEclDiff]');
          data = prettier.format(data, { semi: false, parser: 'babel' });

          fs.writeFile(storyPath, data, (error) => {
            if (error) throw error;
          });
        }
      });
    }

    return result;
  });
};
