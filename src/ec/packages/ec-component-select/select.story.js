import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import specData from '@ecl/ec-specs-select/demo/data';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import selectBox from './ecl-select.html.twig';
import notes from './README.md';

const inputWidthOptions = {
  small: 's',
  medium: 'm',
  large: 'l',
};

storiesOf('Components/Forms/Select', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const inputWidthSelect = select('Width', inputWidthOptions, 'm');

      return selectBox({
        label: text('Label', specData.label),
        options: specData.options,
        invalid: boolean('Invalid', false),
        invalid_text: text('Invalid text', 'This is the error message'),
        helper_text: text('Help message', "This is the input's helper text."),
        disabled: boolean('Disabled', false),
        required: boolean('Required', false),
        required_text: text('Required Text', '*'),
        optional_text: text('Optional text', '(optional)'),
        width: inputWidthSelect,
        id: 'example-id',
        icon_path: defaultSprite,
      });
    },
    {
      notes: { markdown: notes, json: specData },
    }
  );
