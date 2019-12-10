/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.icon_path = '/icons.svg';
  adaptedData.toggle_label_open = adaptedData.toggleLabelOpen;
  delete adaptedData.toggleLabelOpen;
  adaptedData.toggle_label_close = adaptedData.toggleLabelClose;
  adaptedData.toggle_path = '/example';
  delete adaptedData.toggleLabelClose;
  adaptedData.site_name = adaptedData.siteName;
  delete adaptedData.siteName;

  if (adaptedData.items && Array.isArray(adaptedData.items)) {
    adaptedData.items.forEach(mainItem => {
      mainItem.link = { label: mainItem.label, path: mainItem.href };
      mainItem.link.icon_position = 'after';
      delete mainItem.label;
      delete mainItem.href;

      if (mainItem.isCurrent) {
        mainItem.link.is_current = mainItem.isCurrent;
        delete mainItem.isCurrent;
      }

      if (Array.isArray(mainItem.subItems)) {
        mainItem.children = mainItem.subItems;
        delete mainItem.subItems;
        mainItem.children.forEach(item => {
          item.link = { label: item.label, path: item.href };
          delete item.label;
          delete item.href;
          if (item.isCurrent) {
            item.link.is_current = item.isCurrent;
            delete item.isCurrent;
          }
        });
      }
    });
  }
  console.log(adaptedData);
  return adaptedData;
};

export default adapter;
