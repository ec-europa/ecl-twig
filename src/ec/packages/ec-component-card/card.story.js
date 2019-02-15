import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import cardDocs from './docs/card.md';

import card from './card.html.twig';

storiesOf('Components/Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'card',
    () =>
      card({
        card: {
          title: {
            type: 'standalone',
            path: text('Title path', '/example'),
            label: text('Title', 'Better regulation'),
          },
          description: text(
            'Description',
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.'
          ),
          meta: text('Meta', 'Meta 1 | Meta 2 | Meta 3'),
          image: text(
            'Image',
            'https://v2--europa-component-library.netlify.com/example-image.jpg'
          ),
          infos: [
            {
              label: '2018/10/22',
              icon: {
                type: 'general',
                name: 'calendar',
                path: defaultSprite,
              },
            },
            {
              label: 'Luxembourg',
              icon: {
                type: 'general',
                name: 'location',
                path: defaultSprite,
              },
            },
          ],
          tags: [
            {
              label: 'Tag 1',
              path: '/example-1',
            },
            {
              label: 'Tag 2',
              path: '/example-2',
            },
            {
              label: 'Tag 3',
              path: '/example-3',
            },
          ],
        },
      }),
    {
      notes: { markdown: cardDocs },
    }
  )
  .add(
    'tile',
    () =>
      card({
        card: {
          description: text(
            'Description',
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.'
          ),
          title: {
            label: text('Title', 'Better regulation'),
          },
          type: 'tile',
          links: [
            {
              label: 'link 1',
              path: '/example-1',
            },
            {
              label: 'link 2',
              path: '/example-2',
            },
            {
              label: 'link 3',
              path: '/example-3',
            },
          ],
        },
      }),
    {
      notes: { markdown: cardDocs },
    }
  );
