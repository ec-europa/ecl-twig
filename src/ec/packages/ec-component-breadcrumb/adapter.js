/* eslint-disable import/no-extraneous-dependencies */
import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.links = adaptedData.items.map(formatLinkAlt);
  adaptedData.icon_file_path = '/icons.svg';
  adaptedData.ellipsis_label = 'Click to expand';
  adaptedData.navigation_text = adaptedData.label;

  return adaptedData;
};

export default adapter;
