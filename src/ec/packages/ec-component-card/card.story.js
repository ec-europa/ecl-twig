import { storiesOf } from '@storybook/html';
import { withKnobs, text, array } from '@storybook/addon-knobs';
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
    () => {
      const tagsArray = array(
        'Tags (comma separated)',
        ['Tag 1', 'Tag 2', 'Tag 3'],
        ','
      );
      const infosArray = array(
        'Infos (comma separated)',
        ['2018/10/22', 'Luxembourg'],
        ','
      );
      const metaArray = array(
        'Meta (comma separated)',
        ['Meta 1', 'Meta 2', 'Meta 3'],
        ','
      );
      const tags = tagsArray.map(tag => ({
        label: tag,
        path: '/example',
      }));

      const infos = infosArray.map((info, key) => ({
        label: info,
        icon: {
          type: 'general',
          name: () => {
            if (key === 0) {
              return 'calendar';
            }

            if (key === 1) {
              return 'location';
            }

            return 'faq';
          },
          path: defaultSprite,
        },
      }));

      return card({
        card: {
          title: {
            type: 'standalone',
            path: '/example',
            label: text('Title', 'Better regulation'),
          },
          description: text(
            'Description',
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.'
          ),
          meta: metaArray,
          image: {
            src: text(
              'Image',
              'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg'
            ),
            alt: text('Image alternate text', 'Better regulation'),
          },
          infos,
          tags,
        },
      });
    },
    {
      notes: { markdown: cardDocs },
    }
  )
  .add(
    'tile',
    () => {
      const linksArray = array(
        'Links (comma separated)',
        ['Link 1', 'Link 2', 'Link 3'],
        ','
      );
      const links = linksArray.map(link => ({
        label: link,
        path: '/example',
      }));

      return card({
        card: {
          description: text(
            'Description',
            'Transparently designing and evaluating evidence-based EU legislation, backed by citizens views.'
          ),
          title: {
            label: text('Title', 'Better regulation'),
          },
          type: 'tile',
          links,
        },
      });
    },
    {
      notes: { markdown: cardDocs },
    }
  );
