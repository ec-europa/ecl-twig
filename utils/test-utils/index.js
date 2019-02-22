const Twig = require('twig');
const { format } = require('prettier');

const renderTwigFile = (file, options, cb) =>
  Twig.renderFile(file, options, (err, html) =>
    cb(err, format(html, { parser: 'html' }))
  );

const renderTwigFilePromise = (file, options) =>
  new Promise((resolve, reject) =>
    Twig.renderFile(file, options, (err, html) => {
      if (err) return reject(err);

      const div = document.createElement('div');
      div.innerHTML = format(html, { parser: 'html' });

      return resolve(div.firstChild);
    })
  );

module.exports = {
  renderTwigFile,
  renderTwigFilePromise,
};
