/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import { formatLink, formatIcon } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.view_all = formatLink(adaptedData.viewAll);
  delete adaptedData.viewAll;

  adaptedData.items.forEach(item => {
    item.icon = formatIcon(item.icon);
  });
  adaptedData.view_all.visible = true;
  adaptedData.display_icons = true;
  return adaptedData;
};

export default adapter;
