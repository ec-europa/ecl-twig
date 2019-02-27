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
    link.link.icon_position = l.iconPosition;
    link.icon = {
      path: 'static/icons.svg',
      type: l.icon.shape.split('--')[0],
      name: l.icon.shape.split('--')[1],
      size: l.icon.size,
    };
  }

  return link;
}

export const backToTop = {
  link: {
    label: specDataCorporate.backToTop.label,
    path: specDataCorporate.backToTop.href,
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
    links: specDataCustom.identity.follow.links.map(l => {
      return formatLink(l);
    }),
  },
  info: specDataCustom.identity.info.map(l => {
    return formatLink(l);
  }),
};

export const sections = specDataCorporate.sections.map(s => {
  return {
    title: s.title,
    links: s.links.map(l => {
      return formatLink(l);
    }),
  };
});

export const common = specDataCorporate.common.map(l => {
  return formatLink(l);
});
