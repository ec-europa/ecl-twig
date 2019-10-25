/* eslint-disable import/no-extraneous-dependencies */
import specDataCorporate from '@ecl/ec-specs-footer/demo/data--corporate';
import specDataCustom from '@ecl/ec-specs-footer/demo/data--custom';
import { formatLink } from '@ecl-twig/data-utils';

export const backToTop = {
  link: {
    label: specDataCorporate.backToTop.label,
    path: specDataCorporate.backToTop.href,
    icon_position: 'after',
  },
  icon: {
    path: '/static/icons.svg',
    size: specDataCorporate.backToTop.icon.size,
  },
};

export const identity = {
  title: specDataCustom.identity.title,
  follow: {
    label: specDataCustom.identity.follow.label,
    links: specDataCustom.identity.follow.links.map(formatLink),
  },
  info: specDataCustom.identity.info.map(formatLink),
};

export const sections = specDataCorporate.sections.map(s => {
  return {
    title: s.title,
    links: s.links.map(formatLink),
  };
});

export const common = specDataCorporate.common.map(formatLink);
