import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

// Import data for tests
import dataDefault from '@ecl/ec-specs-file-upload/demo/data--default';

import fileDocs from './README.md';
import fileUpload from './file-upload.html.twig';

storiesOf('Components/Forms/File Upload', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      fileUpload({
        id: text('input Id', dataDefault.id),
        label: text('Label', dataDefault.label),
        helper_text: text('Help message', dataDefault.helperText),
        invalid: boolean('Invalid', false),
        disabled: boolean('Disabled', false),
        required: boolean('Required', false),
        invalid_text: text('invalid text', dataDefault.invalidText),
        required_text: text('Required text', dataDefault.requiredText),
        optional_text: text('Optional Text', dataDefault.optionalText),
        extra_classes: text('Extra classes', ''),
      }),
    {
      notes: { markdown: fileDocs },
    }
  );
