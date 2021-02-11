import { formatLink, formatIcon } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.detailMeta) {
    adaptedData.detail_meta = adaptedData.detailMeta;
    delete adaptedData.detailMeta;
  }
  if (adaptedData.icon) {
    adaptedData.icon = formatIcon(adaptedData.icon);
  }
  if (adaptedData.download) {
    adaptedData.download = {
      ...formatLink(initialData.download),
      icon: {
        path: '/icons.svg',
      },
    };
    adaptedData.download.link.aria_label = adaptedData.ariaLabel;
  }
  if (adaptedData.image) {
    adaptedData.variant = 'thumbnail';
  }
  if (adaptedData.translation) {
    adaptedData.translation.toggle = {
      ...initialData.translation.toggle,
      icon: {
        path: '/icons.svg',
      },
    };
    adaptedData.translation.items.forEach((item) => {
      item.lang_full = item.langFull;
      delete item.langFull;
      item.download = formatLink(item.download);
      item.download.icon = {};
      item.download.icon.path = '/icons.svg';
    });
  }
  delete adaptedData.ariaLabel;
  if (adaptedData.taxonomy) {
    adaptedData.lists = [adaptedData.taxonomy];
    delete adaptedData.taxonomy;
  }

  return adaptedData;
};

export default adapter;
