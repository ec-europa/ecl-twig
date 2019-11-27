import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data--default';
import dataBinary from './demo/data--binary';

import radioGroup from './ecl-radio-group.html.twig';
import notes from './README.md';

storiesOf('Components/Forms/Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      radioGroup({
        ...dataDefault,
        label: text('Label', 'Select your country'),
        helper_text: text('Help message', dataDefault.helperText),
        invalid: boolean('Invalid', false),
        invalid_text: text(
          'Error message for the group',
          dataDefault.invalid_text
        ),
        optional_text: text('Optional text', '(optional)'),
        required: boolean('Required', false),
        required_text: text('Required text', '*'),
      }),
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'binary',
    () =>
      radioGroup({
        ...dataBinary,
        label: text('Label', 'Select your country'),
        helper_text: text('Help message', dataBinary.helperText),
        invalid: boolean('Invalid', false),
        invalid_text: text(
          'Error message for the group',
          dataDefault.invalid_text
        ),
        optional_text: text('Optional text', '(optional)'),
        required: boolean('Required', false),
        required_text: text('Required text', '*'),
      }),
    {
      notes: { markdown: notes, json: dataBinary },
    }
  );
