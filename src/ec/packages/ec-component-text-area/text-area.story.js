import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import specData from './demo/data--default';
import textArea from './ecl-text-area.html.twig';
import notes from './README.md';

const inputWidthOptions = {
  small: 's',
  medium: 'm',
  large: 'l',
};

storiesOf('Components/Forms/Text area', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const inputWidthSelect = select('Width', inputWidthOptions, 'm');

      return textArea({
        label: text('Label', specData.label),
        rows: text('Rows', specData.rows),
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
      notes: { markdown: notes },
    }
  );
