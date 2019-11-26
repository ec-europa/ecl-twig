import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import tag from './ecl-tag.html.twig';
import notes from './README.md';

storiesOf('Components/Tag', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'as a link',
    () =>
      tag({
        tag: {
          label: text('Label', 'Link tag'),
          path: text('Url', '/example'),
        },
      }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'as a button',
    () =>
      tag({
        tag: {
          label: text('Label', 'Button tag'),
          type: 'button',
        },
      }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'removable',
    () =>
      tag({
        tag: {
          label: text('Label', 'Removable tag'),
          type: 'removable',
          aria_label: 'Dismiss',
        },
        default_icon_path: defaultSprite,
      }),
    {
      notes: { markdown: notes },
    }
  );
