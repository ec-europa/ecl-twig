import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import {
  dataDefault,
  dataImage,
  dataImageShade,
  dataPrimary,
  dataLeft,
} from './demo/data';

import heroBanner from './ecl-hero-banner.html.twig';
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
    centered: boolean('Centered', b.centered),
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
      const data = formatBanner(dataDefault);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs, json: formatBanner(dataDefault) },
    }
  )
  .add(
    'image',
    () => {
      const data = formatBanner(dataImage);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  )
  .add(
    'image-shade',
    () => {
      const data = formatBanner(dataImageShade);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  )
  .add(
    'primary',
    () => {
      const data = formatBanner(dataPrimary);

      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  )
  .add(
    'align-left',
    () => {
      const data = formatBanner(dataLeft);
      return heroBanner(data);
    },
    {
      notes: { markdown: heroBannerDocs },
    }
  );
