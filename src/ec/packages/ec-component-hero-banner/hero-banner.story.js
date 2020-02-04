import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
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

storiesOf('Components/Banners/Hero Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      heroBanner(
        merge(dataDefault, {
          title: text('Title', dataDefault.title),
          description: text('Description', dataDefault.description),
          link: {
            link: {
              label: text('Link label', dataDefault.link.link.label),
            },
            icon: {
              path: defaultSprite,
            },
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'image',
    () =>
      heroBanner(
        merge(dataImage, {
          title: text('Title', dataImage.title),
          description: text('Description', dataImage.description),
          link: {
            link: {
              label: text('Link label', dataImage.link.link.label),
            },
            icon: {
              path: defaultSprite,
            },
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataImage },
    }
  )
  .add(
    'image-shade',
    () =>
      heroBanner(
        merge(dataImageShade, {
          title: text('Title', dataImageShade.title),
          description: text('Description', dataImageShade.description),
          link: {
            link: {
              label: text('Link label', dataImageShade.link.link.label),
            },
            icon: {
              path: defaultSprite,
            },
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataImageShade },
    }
  )
  .add(
    'primary',
    () =>
      heroBanner(
        merge(dataPrimary, {
          title: text('Title', dataPrimary.title),
          description: text('Description', dataPrimary.description),
          link: {
            link: {
              label: text('Link label', dataPrimary.link.link.label),
            },
            icon: {
              path: defaultSprite,
            },
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataPrimary },
    }
  )
  .add(
    'align-left',
    () =>
      heroBanner(
        merge(dataLeft, {
          title: text('Title', dataLeft.title),
          description: text('Description', dataLeft.description),
          link: {
            link: {
              label: text('Link label', dataLeft.link.link.label),
            },
            icon: {
              path: defaultSprite,
            },
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataLeft },
    }
  );
