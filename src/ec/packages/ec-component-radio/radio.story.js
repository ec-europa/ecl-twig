import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import { dataDefault, dataBinary } from './demo/data';

import radioDocs from './README.md';
import radioGroup from './radio-group.html.twig';

storiesOf('Components/Forms/Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      radioGroup({
        ...dataDefault,
        label: text('Label', dataDefault.label),
        helper_text: text('Help message', dataDefault.helperText),
        invalid: boolean('Invalid', false),
      }),
    {
      notes: { markdown: radioDocs },
    }
  )
  .add(
    'binary',
    () =>
      radioGroup({
        ...dataBinary,
        label: text('Label', dataBinary.label),
        helper_text: text('Help message', dataBinary.helperText),
        invalid: boolean('Invalid', false),
      }),
    {
      notes: { markdown: radioDocs },
    }
  );
