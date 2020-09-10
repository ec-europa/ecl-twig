import { formatLink } from '@ecl-twig/data-utils';

function formatItem(i) {
  let type = '';
  if (i.isCurrent) {
    type = 'current';
  }
  if (i.isPrevious) {
    type = 'previous';
  }
  if (i.isNext) {
    type = 'next';
  }

  const item = {
    type,
    label: i.label,
    aria_label: i.ariaLabel,
  };

  if (i.link) {
    i.link.ariaLabel = i.ariaLabel;
    item.link = formatLink(i.link);
  }

  return item;
}

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.items = adaptedData.items.map((item) => formatItem(item));
  adaptedData.icon_path = '/icons.svg';

  return adaptedData;
};

export default adapter;
