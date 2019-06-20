import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import bannerDataDefault from '@ecl/ec-specs-hero-banner/demo/data--default';
import bannerDataImage from '@ecl/ec-specs-hero-banner/demo/data--image';
import bannerDataImageShade from '@ecl/ec-specs-hero-banner/demo/data--image-shade';
import bannerDataPrimary from '@ecl/ec-specs-hero-banner/demo/data--primary';
import bannerDataAlignLeft from '@ecl/ec-specs-hero-banner/demo/data--align-left';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import heroBanner from './hero-banner.html.twig';
import heroBannerDocs from './docs/hero-banner.md';

function formatBanner(b) {
  const iconType = b.link.icon.shape.split('--');
  const banner = {
    type: b.variant,
    title: text('Title', b.title),
    description: text('Description', b.description),
    link: {
      link: {
        label: text('Link label', b.link.label),
        icon_position: 'after',
      },
      icon: {
        type: iconType[0],
        name: iconType[1],
        transform: b.link.icon.transform,
        size: b.link.icon.size,
        path: defaultSprite,
      },
    },
    centered: boolean('Centered', b.isCentered),
  };

  if ('image' in b) {
    banner.image = b.image;
  }

  return banner;
}

storiesOf('Components/Banners/Hero Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = formatBanner(bannerDataDefault);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  )
  .add(
    'image',
    () => {
      const data = formatBanner(bannerDataImage);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  )
  .add(
    'image-shade',
    () => {
      const data = formatBanner(bannerDataImageShade);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  )
  .add(
    'primary',
    () => {
      const data = formatBanner(bannerDataPrimary);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  )
  .add(
    'align-left',
    () => {
      const data = formatBanner(bannerDataAlignLeft);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  );
