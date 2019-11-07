/* eslint-disable import/no-extraneous-dependencies */
import specDataSimple from '@ecl/ec-specs-breadcrumb-harmonised/demo/data-simple';
import specDataLong from '@ecl/ec-specs-breadcrumb-harmonised/demo/data';
import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.links = adaptedData.items.map(formatLinkAlt);
  adaptedData.navigation_text = adaptedData.label;
  delete adaptedData.label;
  delete adaptedData.items;
  return adaptedData;
};

export const dataSimple = adapter(specDataSimple);
export const dataLong = adapter(specDataLong);
