import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import selectDocs from './docs/select.md';

import select from './select.html.twig';

storiesOf('Components/Select', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      select({
        label: text('Label', 'Label'),
        placeholder: text('Placeholder', 'Placeholder'),
        invalid: boolean('Invalid', false),
        invalid_text: text('Error message', 'Error message'),
        helper_text: text('Help message', 'Help message'),
        disabled: boolean('Disabled', false),
        hide_label: boolean('Hide label', false),
        id: 'example-id',
        name: 'example-name',
      }),
    {
      notes: { markdown: selectDocs },
    }
  );
