import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.links = adaptedData.items.map(formatLinkAlt);
  adaptedData.icon_file_path = '/icons.svg';

  return adaptedData;
};

export default adapter;
