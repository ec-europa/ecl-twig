/* eslint-disable import/no-extraneous-dependencies */
import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.items = adaptedData.items.map(formatLinkAlt);
  adaptedData.icon_path = '/icons.svg';
  if (initialData.logoAlt) {
    adaptedData.logo = {
      alt: initialData.logoAlt,
      path: '/logo--mute.svg',
    };
    delete adaptedData.logoAlt;
  }
  if (initialData.closeLabel) {
    adaptedData.close_label = initialData.closeLabel;
    delete adaptedData.closeLabel;
  }

  return adaptedData;
};

export default adapter;
