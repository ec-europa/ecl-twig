/* eslint-disable import/no-extraneous-dependencies */
import specDataWithTranslation from '@ecl/ec-specs-file/demo/data--with-translation';
import specDataWithoutTranslation from '@ecl/ec-specs-file/demo/data--without-translation';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

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

export const dataWithTranslation = {
  title: specDataWithTranslation.title,
  language: specDataWithTranslation.language,
  meta: specDataWithTranslation.meta,
  icon: formatIcon(specDataWithTranslation.icon),
  download: formatButton(specDataWithTranslation.download),
  translation: {
    toggle: formatButton(specDataWithTranslation.translation.toggle),
    description: specDataWithTranslation.translation.description,
    items: specDataWithTranslation.translation.items,
  },
};

export const dataWithoutTranslation = {
  title: specDataWithoutTranslation.title,
  language: specDataWithoutTranslation.language,
  meta: specDataWithoutTranslation.meta,
  icon: formatIcon(specDataWithoutTranslation.icon),
  download: formatButton(specDataWithoutTranslation.download),
};
