/* eslint-disable import/no-extraneous-dependencies */

const specDataWithTranslation = require('@ecl/ec-specs-file/demo/data--with-translation');

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
    link.link.icon_position = l.iconPosition;
    link.icon = formatIcon(l.icon);
  }

  return link;
}

module.exports = {
  title: specDataWithTranslation.title,
  language: specDataWithTranslation.language,
  meta: specDataWithTranslation.meta,
  icon: formatIcon(specDataWithTranslation.icon),
  download: formatLink(specDataWithTranslation.download),
  translation: {
    toggle: formatButton(specDataWithTranslation.translation.toggle),
    description: specDataWithTranslation.translation.description,
    items: specDataWithTranslation.translation.items,
  },
};
