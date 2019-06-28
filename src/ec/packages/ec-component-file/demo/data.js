/* eslint-disable import/no-extraneous-dependencies */
import specDataWithTranslation from '@ecl/ec-specs-file/demo/data--with-translation';
import specDataWithoutTranslation from '@ecl/ec-specs-file/demo/data--without-translation';

const iconPath = '/static/icons.svg';

function formatIcon(i) {
  const [type, name] = i.shape.split('--');
  const icon = {
    path: iconPath,
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

export const dataWithTranslation = {
  icon_path: iconPath,
  title: specDataWithTranslation.title,
  language: specDataWithTranslation.language,
  meta: specDataWithTranslation.meta,
  icon: formatIcon(specDataWithTranslation.icon),
  download: formatLink(specDataWithTranslation.download),
  translation: {
    toggle: specDataWithTranslation.translation.toggle,
    description: specDataWithTranslation.translation.description,
    items: [
      {
        ...specDataWithTranslation.translation.items[0],
        download: formatLink({
          label: 'Download',
          href: '/example#bg',
        }),
      },
      {
        ...specDataWithTranslation.translation.items[1],
        download: formatLink({
          label: 'Download',
          href: '/example#es',
        }),
      },
      {
        ...specDataWithTranslation.translation.items[2],
        download: formatLink({
          label: 'Download',
          href: '/example#fr',
        }),
      },
    ],
  },
};

export const dataWithoutTranslation = {
  icon_path: iconPath,
  title: specDataWithoutTranslation.title,
  language: specDataWithoutTranslation.language,
  meta: specDataWithoutTranslation.meta,
  icon: formatIcon(specDataWithoutTranslation.icon),
  download: formatLink(specDataWithoutTranslation.download),
};
