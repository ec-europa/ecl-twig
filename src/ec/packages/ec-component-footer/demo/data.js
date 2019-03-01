/* eslint-disable import/no-extraneous-dependencies */
import specDataCorporate from '@ecl/ec-specs-footer/demo/data--corporate';
import specDataCustom from '@ecl/ec-specs-footer/demo/data--custom';

function formatLink(l) {
  const link = {
    link: {
      label: l.label,
      path: l.href,
    },
  };

  if (l.icon) {
    const [type, name] = l.icon.shape.split('--');

    link.link.icon_position = l.iconPosition;
    link.icon = {
      path: 'static/icons.svg',
      type,
      name,
      size: l.icon.size,
    };
  }

  return link;
}

export const backToTop = {
  link: {
    label: specDataCorporate.backToTop.label,
    path: specDataCorporate.backToTop.href,
    icon_position: 'after',
  },
  icon: {
    path: 'static/icons.svg',
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
