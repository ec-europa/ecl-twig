import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import merge from 'deepmerge';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import specData from './demo/data';

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

      return selectBox(
        merge(specData, {
          label: text('Label', specData.label),
          invalid: boolean('Invalid', false),
          invalid_text: text('Invalid text', specData.invalid_text),
          helper_text: text('Help message', specData.helper_text),
          disabled: boolean('Disabled', false),
          required: boolean('Required', specData.required),
          required_text: text('Required Text', specData.required_text),
          optional_text: text('Optional text', specData.optional_text),
          width: inputWidthSelect,
          icon_path: defaultSprite,
        })
      );
    },
    {
      notes: { markdown: notes, json: specData },
    }
  );
