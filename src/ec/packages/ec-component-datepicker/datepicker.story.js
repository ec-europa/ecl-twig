/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import merge from 'deepmerge';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import data from './demo/data';
import datepicker from './ecl-datepicker.html.twig';
import notes from './README.md';

storiesOf('Components/Forms/Datepicker', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      return datepicker(
        merge(data, {
          label: text('Label', 'Label'),
          icons_path: defaultSprite,
          helper_text: text('Helper text', data.helper_text),
          invalid: boolean('Invalid', false),
          invalid_text: text('Invalid text', data.invalid_text),
          disabled: boolean('Disabled', false),
          required: boolean('Required', true),
          required_text: text('Required text', data.required_text),
          optional_text: text('Optional text', data.optional_text),
          placeholder: text('Placeholder', data.placeholder),
        })
      );
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
