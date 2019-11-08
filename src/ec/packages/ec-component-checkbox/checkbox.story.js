import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import { dataDefault } from './demo/data';

import checkboxDocs from './README.md';
import checkboxGroup from './ecl-checkbox-group.html.twig';

dataDefault.items.forEach(item => {
  item.icon_path = defaultSprite; // eslint-disable-line no-param-reassign
});

storiesOf('Components/Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      checkboxGroup({
        ...dataDefault,
        label_id: 'checkbox-default-label',
        helper_text: text('Help message', dataDefault.helperText),
        invalid: boolean('Invalid', false),
        invalid_text: text(
          'Error message for the group',
          dataDefault.invalidText
        ),
        label: text('Legend', 'Select your preferred destinations'),
        optional_text: text('Optional text', '(optional)'),
        required: boolean('Required', false),
        required_text: text('Required text', '*'),
      }),
    {
      notes: { markdown: checkboxDocs },
    }
  );
