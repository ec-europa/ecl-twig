import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import bannerDataDefault from '@ecl/ec-specs-page-banner/demo/data--default';
import bannerDataImage from '@ecl/ec-specs-page-banner/demo/data--image';
import bannerDataImageShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';
import bannerDataPrimary from '@ecl/ec-specs-page-banner/demo/data--primary';
import bannerDataAlignLeft from '@ecl/ec-specs-page-banner/demo/data--align-left';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import pageBanner from './page-banner.html.twig';
import pageBannerDocs from './README.md';

function formatBanner(b) {
  const iconType = b.button.icon.shape.split('--');
  const banner = {
    type: b.variant,
    title: text('Title', b.title),
    baseline: text('Baseline', b.baseline),
    button: {
      variant: b.button.variant,
      label: text('Button label', b.button.label),
      icon: {
        type: iconType[0],
        name: iconType[1],
        transform: b.button.icon.transform,
        size: b.button.icon.size,
        path: defaultSprite,
      },
    },
    centered: boolean('Centered', b.isCentered),
  };

  if ('image' in b) {
    banner.image = 'https://v2--europa-component-library.netlify.com'.concat(
      b.image
    );
  }

  return banner;
}

storiesOf('Components/Page Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = formatBanner(bannerDataDefault);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  )
  .add(
    'image',
    () => {
      const data = formatBanner(bannerDataImage);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  )
  .add(
    'image-shade',
    () => {
      const data = formatBanner(bannerDataImageShade);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  )
  .add(
    'primary',
    () => {
      const data = formatBanner(bannerDataPrimary);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  )
  .add(
    'align-left',
    () => {
      const data = formatBanner(bannerDataAlignLeft);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs },
    }
  );
