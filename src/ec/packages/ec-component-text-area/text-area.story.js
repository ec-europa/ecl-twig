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
        helper_text: text('Help message', specData.helper_text),
        invalid: boolean('Invalid', false),
        invalid_text: text('Invalid text', specData.invalid_text),
        disabled: boolean('Disabled', false),
        required: boolean('Required', specData.required),
        required_text: text('Required Text', specData.required_text),
        optional_text: text('Optional text', specData.optional_text),
        width: inputWidthSelect,
        id: 'example-textarea-id-1',
        name: 'example-name',
      });
    },
    {
      notes: { markdown: notes },
    }
  );
