/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import bannerDataDefault from './demo/data--default';
import bannerDataImage from './demo/data--image';
import bannerDataImageShade from './demo/data--image-shade';
import bannerDataPrimary from './demo/data--primary';
import bannerDataAlignLeft from './demo/data--align-left';

import pageBanner from './ecl-page-banner.html.twig';
import notes from './README.md';

const preparePageBanner = data => {
  getExtraKnobs(data);
  if (data.link.link.label) {
    data.link.link.label = text(
      'Link label',
      data.link.link.label,
      buttonLabels.required
    );
  }

  if (data.title) {
    data.title = text('Title', data.title, buttonLabels.required);
  }

  if (data.title) {
    data.title = text('Title', data.title, buttonLabels.required);
  }

  if (data.baseline) {
    data.baseline = text('Description', data.baseline, buttonLabels.required);
  }

  if (data.centered) {
    data.centered = boolean('Centered', data.centered, buttonLabels.optianal);
  }

  if (data.image) {
    data.image = text('Image', data.image, buttonLabels.optianal);
  }
  if (data.link.icon) {
    data.link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  }
  return data;
};

storiesOf('Components/Banners/Page Banner', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'image',
    () => {
      const pageBannerImage = preparePageBanner(bannerDataImage);

      return pageBanner(pageBannerImage);
    },
    {
      notes: { markdown: notes, json: preparePageBanner(bannerDataImage) },
    }
  )
  .add(
    'image-shade',
    () => {
      const pageBannerImageShade = preparePageBanner(bannerDataImageShade);

      return pageBanner(pageBannerImageShade);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageBanner(bannerDataImageShade),
      },
    }
  )
  .add(
    'primary',
    () => {
      const pageBannerPrimary = preparePageBanner(bannerDataPrimary);

      return pageBanner(pageBannerPrimary);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageBanner(bannerDataPrimary),
      },
    }
  )
  .add(
    'default',
    () => {
      const pageBannerDefault = preparePageBanner(bannerDataDefault);

      return pageBanner(pageBannerDefault);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageBanner(bannerDataDefault),
      },
    }
  )
  .add(
    'align-left',
    () => {
      const pageBannerLeft = preparePageBanner(bannerDataAlignLeft);

      return pageBanner(pageBannerLeft);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageBanner(bannerDataAlignLeft),
      },
    }
  );
