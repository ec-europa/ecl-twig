/* eslint-disable import/no-extraneous-dependencies */
import { formatLink } from '@ecl-twig/data-utils';

const adapter = initialData => {
  const adaptedData = {};

  if (initialData.backToTop) {
    adaptedData.back_to_top = {
      link: {
        label: initialData.backToTop.label,
        path: initialData.backToTop.href,
        icon_position: 'after',
      },
      icon: {
        path: '/static/icons.svg',
        size: initialData.backToTop.icon.size,
      },
    };
  }

  if (initialData.identity) {
    adaptedData.identity = {
      title: initialData.identity.title,
      follow: {
        label: initialData.identity.follow.label,
        links: initialData.identity.follow.links.map(formatLink),
      },
      info: initialData.identity.info.map(formatLink),
    };
  }

  if (initialData.sections) {
    adaptedData.sections = initialData.sections.map(s => {
      return {
        title: s.title,
        links: s.links.map(formatLink),
      };
    });
  }

  if (initialData.common) {
    adaptedData.common = initialData.common.map(formatLink);
  }

  return adaptedData;
};

export default adapter;
