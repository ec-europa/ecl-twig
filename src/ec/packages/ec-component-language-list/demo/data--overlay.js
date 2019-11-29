import { formatLinkAlt } from '@ecl-twig/data-utils';
import specDataOverlay from '@ecl/ec-specs-language-list/demo/data--overlay';

export default {
  overlay: true,
  icon_path: '/icons.svg',
  close_label: specDataOverlay.closeLabel,
  title: specDataOverlay.title,
  items: specDataOverlay.items.map(formatLinkAlt),
  logo: {
    alt: specDataOverlay.logoAlt,
    path: '/logo--mute.svg',
  },
};
