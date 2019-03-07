const Twig = require('twig');
const { format } = require('prettier');
const merge = require('deepmerge');

const renderTwigFile = (file, options, cb) =>
  Twig.renderFile(file, options, (err, html) =>
    cb(err, format(html, { parser: 'html' }))
  );

const renderTwigFileAsNode = (file, options) =>
  new Promise((resolve, reject) =>
    Twig.renderFile(file, options, (err, html) => {
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
