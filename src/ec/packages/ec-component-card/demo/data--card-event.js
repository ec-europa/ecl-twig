/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-card/demo/data--card-event';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = { card: JSON.parse(JSON.stringify(initialData)) };
  if (adaptedData.card.image) {
    adaptedData.card.image = adaptedData.card.image.src;
  }
  return adaptedData;
};

export default adapter(specData);
