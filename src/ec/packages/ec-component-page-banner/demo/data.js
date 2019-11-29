/* eslint-disable import/no-extraneous-dependencies */
import dataDefault from '@ecl/ec-specs-page-banner/demo/data--default';
import dataImage from '@ecl/ec-specs-page-banner/demo/data--image';
import dataImageShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';
import dataPrimary from '@ecl/ec-specs-page-banner/demo/data--primary';
import dataAlignLeft from '@ecl/ec-specs-page-banner/demo/data--align-left';

function formatBanner(b) {
  const iconType = b.link.icon.shape.split('--');
  const banner = {
    type: b.variant,
    title: b.title,
    baseline: b.baseline,
    link: {
      link: {
        label: b.link.label,
        icon_position: 'after',
      },
      icon: {
        type: iconType[0],
        name: iconType[1],
        transform: b.link.icon.transform,
        size: b.link.icon.size,
        path: '/icons.svg',
      },
    },
    centered: b.isCentered,
  };

  if ('image' in b) {
    banner.image = b.image;
  }

  return banner;
}

export const bannerDataDefault = formatBanner(dataDefault);
export const bannerDataImage = formatBanner(dataImage);
export const bannerDataImageShade = formatBanner(dataImageShade);
export const bannerDataPrimary = formatBanner(dataPrimary);
export const bannerDataAlignLeft = formatBanner(dataAlignLeft);
