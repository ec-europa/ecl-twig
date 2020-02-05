import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import decode from 'decode-html';

// Import data for tests
import dataDefault from './demo/data';
import dataMulti from './demo/data--multiple';

import fileUpload from './ecl-file-upload.html.twig';
import notes from './README.md';

storiesOf('Components/Forms/File Upload', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      fileUpload({
        required: boolean('Required', dataDefault.required),
        disabled: boolean('Disabled', dataDefault.disabled),
        invalid: boolean('Invalid', dataDefault.invalid),
        id: text('Input id', dataDefault.id),
        name: text('Name', dataDefault.name),
        label: text('Label', dataDefault.label),
        helper_text: decode(text('Help message', dataDefault.helper_text)),
        invalid_text: text('Invalid text', dataDefault.invalid_text),
        required_text: text('Required text', dataDefault.required_text),
        optional_text: text('Optional Text', dataDefault.optional_text),
        button_choose_label: text(
          'Button choose label',
          dataDefault.button_choose_label
        ),
        button_replace_label: text(
          'Button replace label',
          dataDefault.button_replace_label
        ),
      }),
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'multiple',
    () =>
      fileUpload({
        required: boolean('Required', dataMulti.required),
        disabled: boolean('Disabled', dataMulti.disabled),
        invalid: boolean('Invalid', dataMulti.invalid),
        id: text('Input id', dataMulti.id),
        name: text('Name', dataMulti.name),
        label: text('Label', dataMulti.label),
        helper_text: decode(text('Help message', dataMulti.helper_text)),
        invalid_text: text('Invalid text', dataMulti.invalid_text),
        multiple: boolean('Multiple', dataMulti.multiple),
        required_text: text('Required text', dataMulti.required_text),
        optional_text: text('Optional Text', dataMulti.optional_text),
        button_choose_label: text(
          'Button choose label',
          dataMulti.button_choose_label
        ),
        button_replace_label: text(
          'Button replace label',
          dataMulti.button_replace_label
        ),
      }),
    {
      notes: { markdown: notes, json: dataMulti },
    }
  );
