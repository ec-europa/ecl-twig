/* eslint-disable import/no-extraneous-dependencies */
import specDataOverlay from '@ecl/ec-specs-language-list/demo/data--overlay';
import specDataSplash from '@ecl/ec-specs-language-list/demo/data--splash';
import { formatLinkAlt } from '@ecl-twig/data-utils';

export const dataOverlay = {
  items: specDataOverlay.items.map(formatLinkAlt),
  closeLabel: specDataOverlay.closeLabel,
  title: specDataOverlay.title,
};

export const dataSplash = {
  items: specDataSplash.items.map(formatLinkAlt),
  logoAlt: specDataSplash.logoAlt,
};
