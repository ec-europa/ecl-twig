/* eslint-disable import/no-extraneous-dependencies */
// import specData from '@ecl/ec-specs-gallery/demo/data';
const specData = {};

const defaultSprite = '/static/icons.svg';

function formatIcon(i) {
  const [type, name] = i.shape.split('--');
  const icon = {
    path: defaultSprite,
    type,
    name,
    size: i.size,
  };

  return icon;
}

function formatButton(b) {
  const button = {
    label: b.label,
    icon: formatIcon(b.icon),
  };

  return button;
}

function formatLink(l) {
  const link = {
    link: {
      label: l.label,
      path: l.href,
    },
  };

  if (l.icon) {
    link.icon = formatIcon(l.icon);
  }

  return link;
}

function formatItem(i) {
  const item = {
    src: i.src,
    alt: i.alt,
    description: i.description,
    meta: i.meta,
    share_path: i.shareHref,
  };

  if (i.icon) {
    item.icon = formatIcon(i.icon);
  }
}

const data = {
  items: specData.items.map(formatItem),
  overlay: {
    close: formatButton(specData.close),
    previous: formatButton(specData.previous),
    next: formatButton(specData.next),
    counter_separator: specData.counterSeparator,
    download: formatLink(specData.download),
    share: formatLink(specData.share),
  },
};

export default data;
