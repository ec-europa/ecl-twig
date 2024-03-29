import { formatLink, formatIcon } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.view_all = formatLink(adaptedData.viewAll);
  delete adaptedData.viewAll;

  for (const item of adaptedData.items) {
    item.icon = formatIcon(item.icon);
  }
  adaptedData.display_icons = true;
  return adaptedData;
};

export default adapter;
