const Twig = require('twig');
const { format } = require('prettier');

const renderTwigFile = (file, options, cb) =>
  Twig.renderFile(file, options, (err, html) =>
    cb(err, format(html, { parser: 'html' }))
  );

module.exports = {
  renderTwigFile,
};
