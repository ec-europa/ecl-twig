/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-timeline/demo/data';

const adapter = initialData => {
  return JSON.parse(JSON.stringify(initialData));
};

export default adapter(specData);
