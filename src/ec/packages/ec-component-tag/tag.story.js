import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataLink from './demo/data--link';
import dataButton from './demo/data--button';
import dataRemovable from './demo/data--removable';
import tag from './ecl-tag.html.twig';
import notes from './README.md';

const variants = {
  'As a link': 'link',
  'As a Button': 'button',
  Removable: 'removable',
};

storiesOf('Components/Tag', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'as a link',
    () =>
      tag(
        merge(dataLink, {
          tag: {
            label: text('Label', 'Link tag'),
            path: text('Url', '/example'),
            type: select('Variable', variants, 'link'),
          },
          default_icon_path: defaultSprite,
        })
      ),
    {
      notes: { markdown: notes, json: dataLink },
    }
  )
  .add(
    'as a button',
    () =>
      tag(
        merge(dataButton, {
          tag: {
            label: text('Label', 'Button tag'),
            type: select('Variable', variants, 'button'),
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataButton },
    }
  )
  .add(
    'removable',
    () =>
      tag(
        merge(dataRemovable, {
          tag: {
            label: text('Label', 'Removable tag'),
            type: select('Variable', variants, 'removable'),
            aria_label: text('Aria label', 'Dismiss'),
          },
          default_icon_path: defaultSprite,
        })
      ),
    {
      notes: { markdown: notes, json: dataRemovable },
    }
  );
