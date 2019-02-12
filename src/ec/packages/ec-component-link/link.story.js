import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import linkDocs from './docs/link.md';
import link from './link.html.twig';

const defaultIconSettings = {
  type: 'ui',
  name: 'external',
  path: defaultSprite,
};

storiesOf('Components/Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      link({
        link: {
          type: 'default',
          label: text('Label', 'Default link'),
          path: '/example#link-default',
          icon_position: select(
            'Icon position',
            {
              before: 'before',
              after: 'after',
            },
            'after'
          ),
        },
        icon: defaultIconSettings,
      }),
    {
      notes: { markdown: linkDocs },
    }
  )
  .add(
    'standalone',
    () =>
      link({
        link: {
          type: 'standalone',
          label: text('Label', 'Standalone link'),
          path: '/example#standalone-link',
          icon_position: select(
            'Icon position',
            {
              before: 'before',
              after: 'after',
            },
            'after'
          ),
        },
        icon: defaultIconSettings,
      }),
    {
      notes: { markdown: linkDocs },
    }
  );
