/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import { formatLinkAlt, formatIcon } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.view_all = formatLinkAlt(adaptedData.viewAll);
  adaptedData.items.forEach(item => {
    item.icon = formatIcon(item.icon);
  });
  console.log(adaptedData);
  return adaptedData;
};

export default adapter;
