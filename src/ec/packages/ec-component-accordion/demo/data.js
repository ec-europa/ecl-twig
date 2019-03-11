/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
const specData = require('@ecl/ec-specs-accordion/demo/data');

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  adaptedData.items.forEach(item => {
    const { toggle } = item;
    const [type, name] = toggle.iconShape.split('--');

    toggle.icon = {
      name,
      type,
      path: '',
      size: 's',
    };
  });

  return adaptedData;
};

module.exports = adapter(specData);
