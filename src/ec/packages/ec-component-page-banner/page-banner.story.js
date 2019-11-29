import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import pageBanner from './ecl-page-banner.html.twig';
import notes from './README.md';

import 

import bannerDataDefault from './demo/data--default';
import bannerDataImage from './demo/data--image';
import bannerDataImageShade from './demo/data--image-shade';
import bannerDataPrimary from './demo/data--primary';
import bannerDataAlignLeft from './demo/data--align-left';

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
      notes: {
        markdown: notes,
        json: setIconPath(bannerDataDefault),
      },
    }
  )
  .add(
    'image',
    () => {
      const data = setIconPath(bannerDataImage);

      return pageBanner(data);
    },
    {
      notes: { markdown: notes, json: setIconPath(bannerDataImage) },
    }
  )
  .add(
    'image-shade',
    () => {
      const data = setIconPath(bannerDataImageShade);

      return pageBanner(data);
    },
    {
      notes: {
        markdown: notes,
        json: setIconPath(bannerDataImageShade),
      },
    }
  )
  .add(
    'primary',
    () => {
      const data = setIconPath(bannerDataPrimary);

      return pageBanner(data);
    },
    {
      notes: {
        markdown: notes,
        json: setIconPath(bannerDataPrimary),
      },
    }
  )
  .add(
    'align-left',
    () => {
      const data = setIconPath(bannerDataAlignLeft);

      return pageBanner(data);
    },
    {
      notes: {
        markdown: notes,
        json: setIconPath(bannerDataAlignLeft),
      },
    }
  );
