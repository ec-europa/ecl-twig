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

const PrepareBanner = data => {
  data.link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  return data;
};
storiesOf('Components/Banners/Hero Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'image',
    () =>
      heroBanner(
        merge(PrepareBanner(dataImage), {
          link: {
            link: {
              label: text('Link label', dataImage.link.link.label),
            },
          },
          title: text('Title', dataImage.title),
          description: text('Description', dataImage.description),
          centered: boolean('Centered', dataImage.centered),
          image: text('Image', dataImage.image),
        })
      ),
    {
      notes: { markdown: notes, json: PrepareBanner(dataImage) },
    }
  )
  .add(
    'image-shade',
    () =>
      heroBanner(
        merge(PrepareBanner(dataImageShade), {
          link: {
            link: {
              label: text('Link label', dataImageShade.link.link.label),
            },
          },
          title: text('Title', dataImageShade.title),
          description: text('Description', dataImageShade.description),
          centered: boolean('Centered', dataImageShade.centered),
          image: text('Image', dataImageShade.image),
        })
      ),
    {
      notes: { markdown: notes, json: PrepareBanner(dataImageShade) },
    }
  )
  .add(
    'primary',
    () =>
      heroBanner(
        merge(PrepareBanner(dataPrimary), {
          link: {
            link: {
              label: text('Link label', dataPrimary.link.link.label),
            },
          },
          title: text('Title', dataPrimary.title),
          description: text('Description', dataPrimary.description),
          centered: boolean('Centered', dataPrimary.centered),
        })
      ),
    {
      notes: { markdown: notes, json: PrepareBanner(dataPrimary) },
    }
  )
  .add(
    'default',
    () =>
      heroBanner(
        merge(PrepareBanner(dataDefault), {
          link: {
            link: {
              label: text('Link label', dataDefault.link.link.label),
            },
          },
          title: text('Title', dataDefault.title),
          description: text('Description', dataDefault.description),
          centered: boolean('Centered', dataDefault.centered),
        })
      ),
    {
      notes: { markdown: notes, json: PrepareBanner(dataDefault) },
    }
  )
  .add(
    'align-left',
    () =>
      heroBanner(
        merge(PrepareBanner(dataLeft), {
          link: {
            link: {
              label: text('Link label', dataLeft.link.link.label),
            },
          },
          title: text('Title', dataLeft.title),
          description: text('Description', dataLeft.description),
        })
      ),
    {
      notes: { markdown: notes, json: PrepareBanner(dataLeft) },
    }
  );
