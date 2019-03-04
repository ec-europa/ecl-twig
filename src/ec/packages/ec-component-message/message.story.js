import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import message from './message.html.twig';
import notes from './docs/message.md';

import { dataError, dataInfo, dataSuccess, dataWarning } from './demo/data';

storiesOf('Components/Message', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('info', () => message(dataInfo), {
    notes: { markdown: notes },
  })
  .add('success', () => message(dataSuccess), {
    notes: { markdown: notes },
  })
  .add('warning', () => message(dataWarning), {
    notes: { markdown: notes },
  })
  .add('error', () => message(dataError), {
    notes: { markdown: notes },
  });
