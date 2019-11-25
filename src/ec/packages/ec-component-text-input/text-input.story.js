import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import textInputDocs from './docs/text-input.md';
import textInput from './ecl-text-input.html.twig';

const inputWidthOptions = {
  small: 's',
  medium: 'm',
  large: 'l',
};

storiesOf('Components/Forms/Text field', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const inputWidthSelect = select('Width', inputWidthOptions, 'm');

      return textInput({
        label: text('Label', 'Label'),
        helper_text: text('Help message', "This is the input's helper text."),
        invalid: boolean('Invalid', false),
        invalid_text: text('Invalid text', 'This is the error message'),
        disabled: boolean('Disabled', false),
        required: boolean('Required', false),
        required_text: text('Required Text', '*'),
        optional_text: text('Optional text', '(optional)'),
        width: inputWidthSelect,
        id: 'example-id',
        name: 'example-name',
      });
    },
    {
      notes: { markdown: textInputDocs },
    }
  );
