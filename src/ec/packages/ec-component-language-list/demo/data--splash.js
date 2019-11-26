import specDataSplash from '@ecl/ec-specs-language-list/demo/data--splash';
import { formatLinkAlt } from '@ecl-twig/data-utils';

export default {
  items: specDataSplash.items.map(formatLinkAlt),
  overlay: false,
  icon_path: '/icons.svg',
  logo: {
    alt: specDataSplash.logoAlt,
    path: '/logo--mute.svg',
  },
};
