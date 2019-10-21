/* eslint-disable import/no-extraneous-dependencies */
import specDataWithTranslation from '@ecl/ec-specs-file/demo/data--with-translation';
import specDataWithoutTranslation from '@ecl/ec-specs-file/demo/data--without-translation';
import { formatLink, formatIcon } from '@ecl-twig/data-utils';

export const dataWithTranslation = {
  title: specDataWithTranslation.title,
  language: specDataWithTranslation.language,
  meta: specDataWithTranslation.meta,
  icon: formatIcon(specDataWithTranslation.icon),
  download: {
    ...formatLink(specDataWithTranslation.download),
    icon: {
      path: '/static/icons.svg',
    },
  },
  translation: {
    toggle: {
      ...specDataWithTranslation.translation.toggle,
      icon: {
        path: '/static/icons.svg',
      },
    },
    description: specDataWithTranslation.translation.description,
    items: [
      {
        ...specDataWithTranslation.translation.items[0],
        download: {
          link: {
            label: 'Download',
            path: '/example#bg',
          },
          icon: {
            path: '/static/icons.svg',
          },
        },
      },
      {
        ...specDataWithTranslation.translation.items[1],
        download: {
          link: {
            label: 'Download',
            path: '/example#es',
          },
          icon: {
            path: '/static/icons.svg',
          },
        },
      },
      {
        ...specDataWithTranslation.translation.items[2],
        download: {
          link: {
            label: 'Download',
            path: '/example#fr',
          },
          icon: {
            path: '/static/icons.svg',
          },
        },
      },
    ],
  },
};

export const dataWithoutTranslation = {
  title: specDataWithoutTranslation.title,
  language: specDataWithoutTranslation.language,
  meta: specDataWithoutTranslation.meta,
  icon: formatIcon(specDataWithoutTranslation.icon),
  download: {
    ...formatLink(specDataWithTranslation.download),
    icon: {
      path: '/static/icons.svg',
    },
  },
};
