import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import bannerDataDefault from './demo/data--default';
import bannerDataImage from './demo/data--image';
import bannerDataImageShade from './demo/data--image-shade';
import bannerDataPrimary from './demo/data--primary';
import bannerDataAlignLeft from './demo/data--align-left';

import pageBanner from './ecl-page-banner.html.twig';
import notes from './README.md';

const setIconPath = b => {
  if (b.link.icon) {
    b.link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  }
  return b;
};

storiesOf('Components/Banners/Page Banner', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'image',
    () =>
      pageBanner(
        merge(setIconPath(bannerDataImage), {
          link: {
            link: {
              label: text('Link label', bannerDataImage.link.link.label),
            },
          },
          title: text('Title', bannerDataImage.title),
          baseline: text('baseline', bannerDataImage.baseline),
          centered: boolean('Centered', bannerDataImage.centered),
          image: text('Image', bannerDataImage.image),
        })
      ),
    {
      notes: { markdown: notes, json: setIconPath(bannerDataImage) },
    }
  )
  .add(
    'image-shade',
    () =>
      pageBanner(
        merge(setIconPath(bannerDataImageShade), {
          link: {
            link: {
              label: text('Link label', bannerDataImageShade.link.link.label),
            },
          },
          title: text('Title', bannerDataImageShade.title),
          baseline: text('baseline', bannerDataImageShade.baseline),
          centered: boolean('Centered', bannerDataImageShade.centered),
          image: text('Image', bannerDataImageShade.image),
        })
      ),
    {
      notes: {
        markdown: notes,
        json: setIconPath(bannerDataImageShade),
      },
    }
  )
  .add(
    'primary',
    () =>
      pageBanner(
        merge(setIconPath(bannerDataPrimary), {
          link: {
            link: {
              label: text('Link label', bannerDataPrimary.link.link.label),
            },
          },
          title: text('Title', bannerDataPrimary.title),
          baseline: text('baseline', bannerDataPrimary.baseline),
          centered: boolean('Centered', bannerDataPrimary.centered),
        })
      ),
    {
      notes: {
        markdown: notes,
        json: setIconPath(bannerDataPrimary),
      },
    }
  )
  .add(
    'default',
    () =>
      pageBanner(
        merge(setIconPath(bannerDataDefault), {
          link: {
            link: {
              label: text('Link label', bannerDataDefault.link.link.label),
            },
          },
          title: text('Title', bannerDataDefault.title),
          baseline: text('baseline', bannerDataDefault.baseline),
          centered: boolean('Centered', bannerDataDefault.centered),
        })
      ),
    {
      notes: {
        markdown: notes,
        json: setIconPath(bannerDataDefault),
      },
    }
  )
  .add(
    'align-left',
    () =>
      pageBanner(
        merge(setIconPath(bannerDataAlignLeft), {
          link: {
            link: {
              label: text('Link label', bannerDataAlignLeft.link.link.label),
            },
          },
          title: text('Title', bannerDataAlignLeft.title),
          baseline: text('baseline', bannerDataAlignLeft.baseline),
        })
      ),
    {
      notes: {
        markdown: notes,
        json: setIconPath(bannerDataAlignLeft),
      },
    }
  );
