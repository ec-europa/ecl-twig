const { format } = require('prettier');
const merge = require('deepmerge');
const twing = require('../../../src/ec/.storybook/environment'); // eslint-disable-line import/no-unresolved

const renderTwigFile = (file, options, cb) =>
  twing.render(file, options, (err, html) =>
    cb(err, format(html, { parser: 'html' }))
  );

const renderTwigFileAsNode = (file, options) =>
  new Promise((resolve, reject) =>
    twing.render(file, options, (err, html) => {
      if (err) return reject(err);

      const div = document.createElement('div');
      div.innerHTML = html.trim();

      return resolve(div.firstChild);
    })
  );

module.exports = {
  merge,
  renderTwigFile,
  renderTwigFileAsNode,
};
