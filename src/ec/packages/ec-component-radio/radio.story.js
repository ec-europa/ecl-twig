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
        label: text('Label', dataDefault.label),
        helper_text: text('Help message', dataDefault.helper_text),
        invalid: boolean('Invalid', false),
        invalid_text: text(
          'Error message for the group',
          dataDefault.invalid_text
        ),
        optional_text: text('Optional text', dataDefault.optional_text),
        required: boolean('Required', dataDefault.required),
        required_text: text('Required text', dataDefault.required_text),
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
        label: text('Label', dataDefault.label),
        helper_text: text('Help message', dataBinary.helper_text),
        invalid: boolean('Invalid', false),
        invalid_text: text(
          'Error message for the group',
          dataDefault.invalid_text
        ),
        optional_text: text('Optional text', dataDefault.optional_text),
        required: boolean('Required', dataDefault.required),
        required_text: text('Required text', dataDefault.required_text),
      }),
    {
      notes: { markdown: notes, json: dataBinary },
    }
  );
