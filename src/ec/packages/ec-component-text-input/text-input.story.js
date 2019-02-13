import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import textInputDocs from './docs/text-input.md';

import textInput from './text-input.html.twig';

storiesOf('Components/Text input', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      textInput({
        label: text('Label', 'Label'),
        placeholder: text('Placeholder', 'Placeholder'),
        invalid: boolean('Invalid', false),
        invalidText: text('Error message', 'Error message'),
        helperText: text('Help message', 'Help message'),
        disabled: boolean('Disabled', false),
        hideLabel: boolean('Hide label', false),
        id: 'example-id',
        name: 'example-name',
      }),
    {
      notes: { markdown: textInputDocs },
    }
  );
