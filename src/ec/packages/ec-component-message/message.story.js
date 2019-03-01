import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import message from './message.html.twig';
import notes from './docs/message.md';

storiesOf('Components/Message', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'info',
    () =>
      message({
        variant: 'info',
      }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'success',
    () =>
      message({
        variant: 'success',
      }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'warning',
    () =>
      message({
        variant: 'warning',
      }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'error',
    () =>
      message({
        variant: 'error',
      }),
    {
      notes: { markdown: notes },
    }
  );
