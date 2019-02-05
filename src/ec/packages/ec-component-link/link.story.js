import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
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
          path: text('Path', '/path'),
        },
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
          path: text('Path', '/path'),
        },
      }),
    {
      notes: { markdown: linkDocs },
    }
  )
  .add(
    'with icon',
    () =>
      link({
        link: {
          type: 'standalone',
          label: text('Label', 'Standalone link with icon'),
          path: text('Path', '/path'),
        },
        icon: defaultIconSettings,
      }),
    {
      notes: { markdown: linkDocs },
    }
  );
