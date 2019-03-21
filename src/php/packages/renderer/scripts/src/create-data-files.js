/* eslint-disable global-require, import/no-dynamic-require */
import fs from 'fs';
import path from 'path';

/**
 * Helper to migrate demo data for Twig PHP renderer.
 *
 * @param {String} readLocation The place to seek for demo data files.
 * @param {String} saveLocation The place to create a demo data file for PHP renderer.
 */
const createDataFiles = ({ readLocation, saveLocation }) => {
  const files = fs.readdirSync(readLocation);

  files.forEach(file => {
    // require() is necessary at all cases.
    // Sometimes files contain results of adaptation.
    const data = require(`${readLocation}/${file}`);
    const fileNew = file.replace('js', 'json');

    fs.writeFileSync(
      path.resolve(`${saveLocation}/${fileNew}`),
      JSON.stringify(data)
    );
  });
};

export default createDataFiles;
