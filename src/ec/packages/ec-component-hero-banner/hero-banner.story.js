/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data--default';
import dataImage from './demo/data--image';
import dataImageShade from './demo/data--image-shade';
import dataPrimary from './demo/data--primary';
import dataLeft from './demo/data--align-left';

import heroBanner from './ecl-hero-banner.html.twig';
import notes from './README.md';

const PrepareBanner = data => {
  if (data.title) {
    data.title = text('title', data.title, buttonLabels.required);
  }

  if (data.link.link.label) {
    data.link.link.label = text(
      'link.Link.label',
      data.link.link.label,
      buttonLabels.required
    );
  }
  if (data.description) {
    data.description = text(
      'description',
      data.description,
      buttonLabels.required
    );
  }

  if (data.centered) {
    data.centered = boolean('centered', data.centered, buttonLabels.optional);
  }

  if (data.image) {
    data.image = text('image', data.image, buttonLabels.optional);
  }
  data.link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  getExtraKnobs(data);
  return data;
};

storiesOf('Components/Banners/Hero Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'image',
    () => {
      const bannerImage = PrepareBanner(dataImage);

      return heroBanner(bannerImage);
    },
    {
      notes: { markdown: notes, json: PrepareBanner(dataImage) },
    }
  )
  .add(
    'image-shade',
    () => {
      const bannerImageShade = PrepareBanner(dataImageShade);

      return heroBanner(bannerImageShade);
    },
    {
      notes: { markdown: notes, json: PrepareBanner(dataImageShade) },
    }
  )
  .add(
    'primary',
    () => {
      const bannerPrimary = PrepareBanner(dataPrimary);

      return heroBanner(bannerPrimary);
    },
    {
      notes: { markdown: notes, json: PrepareBanner(dataPrimary) },
    }
  )
  .add(
    'default',
    () => {
      const bannerDefault = PrepareBanner(dataDefault);

      return heroBanner(bannerDefault);
    },
    {
      notes: { markdown: notes, json: PrepareBanner(dataDefault) },
    }
  )
  .add(
    'align-left',
    () => {
      const bannerLeft = PrepareBanner(dataLeft);

      return heroBanner(bannerLeft);
    },
    {
      notes: { markdown: notes, json: PrepareBanner(dataLeft) },
    }
  );
