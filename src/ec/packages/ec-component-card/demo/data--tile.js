/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-card/demo/data--tile';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = { card: JSON.parse(JSON.stringify(initialData)) };
  return adaptedData;
};

export default adapter(specData);
