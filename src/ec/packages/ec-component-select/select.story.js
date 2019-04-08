import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import specData from '@ecl/ec-specs-select/demo/data';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import selectDocs from './docs/select.md';
import select from './select.html.twig';

storiesOf('Components/Forms/Select', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      select({
        label: text('Label', specData.label),
        options: specData.options,
        invalid: boolean('Invalid', false),
        invalid_text: text('Error message', 'Error message'),
        helper_text: text('Help message', 'Help message'),
        disabled: boolean('Disabled', false),
        hide_label: boolean('Hide label', false),
        id: 'example-id',
        name: 'example-name',
        icon_path: defaultSprite,
      }),
    {
      notes: { markdown: selectDocs },
    }
  );
