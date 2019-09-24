import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

// Import data for tests
import dataDefault from './demo/data';

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
        required: boolean('Required', false),
        disabled: boolean('Disabled', false),
        invalid: boolean('Invalid', false),
        id: text('Input id', dataDefault.id),
        name: text('Name', dataDefault.name),
        label: text('Label', dataDefault.label),
        helper_text: text('Help message', dataDefault.helper_text),
        invalid_text: text('Invalid text', 'This is an error message'),
        required_text: text('Required text', '*'),
        optional_text: text('Optional Text', '(optional)'),
        extra_classes: text('Extra classes', ''),
      }),
    {
      notes: { markdown: fileDocs },
    }
  );
