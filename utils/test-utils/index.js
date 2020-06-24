const merge = require('deepmerge');
const twing = require('../../src/ec/.storybook/environment'); // eslint-disable-line import/no-unresolved

const renderTwigFileAsNode = (file, options) =>
  new Promise((resolve, reject) => {
    try {
      const html = twing.render(file, options);
      const test = document.createElement('test');
      test.innerHTML = html.trim();
      resolve(test);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  merge,
  renderTwigFileAsNode,
};
