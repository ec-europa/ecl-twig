import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import textAreaDocs from './docs/text-area.md';

import textArea from './text-area.html.twig';

storiesOf('Components/Forms/Text area', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      textArea({
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
      notes: { markdown: textAreaDocs },
    }
  );
