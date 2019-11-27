import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data--default';
import dataImage from './demo/data--image';
import dataImageShade from './demo/data--image-shade';
import dataPrimary from './demo/data--primary';
import dataLeft from './demo/data--align-left';

import heroBanner from './ecl-hero-banner.html.twig';
import notes from './README.md';

function formatBanner(b) {
  const banner = merge(b, {
    title: text('Title', b.title),
    description: text('Description', b.description),
    link: {
      link: {
        label: text('Link label', b.link.link.label),
      },
      icon: {
        path: defaultSprite,
      },
    },
  });

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
      notes: { markdown: notes, json: formatBanner(dataDefault) },
    }
  )
  .add(
    'image',
    () => {
      return heroBanner(formatBanner(dataImage));
    },
    {
      notes: { markdown: notes, json: formatBanner(dataImage) },
    }
  )
  .add(
    'image-shade',
    () => {
      return heroBanner(formatBanner(dataImageShade));
    },
    {
      notes: { markdown: notes, json: formatBanner(dataImageShade) },
    }
  )
  .add(
    'primary',
    () => {
      return heroBanner(formatBanner(dataPrimary));
    },
    {
      notes: { markdown: notes, json: formatBanner(dataPrimary) },
    }
  )
  .add(
    'align-left',
    () => {
      return heroBanner(formatBanner(dataLeft));
    },
    {
      notes: { markdown: notes, json: formatBanner(dataLeft) },
    }
  );
