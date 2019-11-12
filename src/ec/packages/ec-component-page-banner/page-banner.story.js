import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import pageBanner from './ecl-page-banner.html.twig';
import pageBannerDocs from './README.md';

import {
  bannerDataDefault,
  bannerDataImage,
  bannerDataImageShade,
  bannerDataPrimary,
  bannerDataAlignLeft,
} from './demo/data';

function setIconPath(b) {
  if (b.link.icon) {
    b.link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  }
  return b;
}

storiesOf('Components/Banners/Page Banner', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = setIconPath(bannerDataDefault);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  )
  .add(
    'image',
    () => {
      const data = setIconPath(bannerDataImage);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  )
  .add(
    'image-shade',
    () => {
      const data = setIconPath(bannerDataImageShade);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  )
  .add(
    'primary',
    () => {
      const data = setIconPath(bannerDataPrimary);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  )
  .add(
    'align-left',
    () => {
      const data = setIconPath(bannerDataAlignLeft);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  );
