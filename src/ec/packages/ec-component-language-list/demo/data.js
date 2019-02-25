/* eslint-disable import/no-extraneous-dependencies */
import specDataOverlay from '@ecl/ec-specs-language-list/demo/data--overlay';
import specDataSplash from '@ecl/ec-specs-language-list/demo/data--splash';

export const dataOverlay = {
  items: specDataOverlay.items.map(item => {
    return {
      lang: item.lang,
      label: item.label,
      path: item.href,
      active: item.isActive,
    };
  }),
  closeLabel: specDataOverlay.closeLabel,
  title: specDataOverlay.title,
};

export const dataSplash = {
  items: specDataSplash.items.map(item => {
    return {
      lang: item.lang,
      label: item.label,
      path: item.href,
      active: item.isActive,
    };
  }),
  logoAlt: specDataSplash.logoAlt,
};
