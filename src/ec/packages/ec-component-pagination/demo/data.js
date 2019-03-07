/* eslint-disable import/no-extraneous-dependencies */
import specData from '@ecl/ec-specs-pagination/demo/data';

function formatIcon(i) {
  const [type, name] = i.shape.split('--');
  const icon = {
    path: '/static/icons.svg',
    type,
    name,
    size: i.size,
    transform: i.transform,
  };

  return icon;
}

function formatLink(l) {
  const link = {
    link: {
      label: l.label,
      path: l.href,
    },
  };

  if (l.icon) {
    link.link.icon_position = l.iconPosition;
    link.icon = formatIcon(l.icon);
  }

  return link;
}

function formatItem(i) {
  const item = {
    current: i.isCurrent,
    previous: i.isPrevious,
    next: i.isNext,
    label: i.label,
    aria_label: i.ariaLabel,
  };

  if (i.link) {
    item.link = formatLink(i.link);
  }

  return item;
}

const data = {
  label: specData.label,
  items: specData.items.map(formatItem),
};

export default data;
