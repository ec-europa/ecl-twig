/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
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
  if (data.link.link.label) {
    data.link.link.label = text(
      'Link label',
      data.link.link.label,
      buttonLabels.required
    );
  }

  if (data.title) {
    data.title = text('title', data.title, buttonLabels.required);
  }

  if (data.baseline) {
    data.baseline = text('baseline', data.baseline, buttonLabels.required);
  }

  if (data.centered) {
    data.centered = boolean('centered', data.centered, buttonLabels.optional);
  }

  if (data.image) {
    data.image = text('image', data.image, buttonLabels.optional);
  }
  if (data.link.icon) {
    data.link.icon.path = select(
      'link.icon.path',
      [defaultSprite],
      defaultSprite,
      buttonLabels.required
    ); // eslint-disable-line no-param-reassign
  }
  getExtraKnobs(data);
  return data;
};

storiesOf('Components/Banners/Page Banner', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'image',
    () => {
      bannerDataImage.type = select(
        'type',
        [bannerDataImage.type],
        bannerDataImage.type,
        buttonLabels.optional
      );
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
      bannerDataImageShade.type = select(
        'type',
        [bannerDataImageShade.type],
        bannerDataImageShade.type,
        buttonLabels.optional
      );
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
      bannerDataPrimary.type = select(
        'type',
        [bannerDataPrimary.type],
        bannerDataPrimary.type,
        buttonLabels.optional
      );
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
      bannerDataDefault.type = select(
        'type',
        [bannerDataDefault.type],
        bannerDataDefault.type,
        buttonLabels.optional
      );
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
      bannerDataAlignLeft.type = select(
        'type',
        [bannerDataAlignLeft.type],
        bannerDataAlignLeft.type,
        buttonLabels.optional
      );
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
