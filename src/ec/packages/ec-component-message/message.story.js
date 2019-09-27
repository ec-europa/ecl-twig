import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import message from './message.html.twig';
import notes from './README.md';

import { dataError, dataInfo, dataSuccess, dataWarning } from './demo/data';

dataError.icon.path = defaultSprite;
dataError.close.icon.path = defaultSprite;
dataInfo.icon.path = defaultSprite;
dataInfo.close.icon.path = defaultSprite;
dataSuccess.icon.path = defaultSprite;
dataSuccess.close.icon.path = defaultSprite;
dataWarning.icon.path = defaultSprite;
dataWarning.close.icon.path = defaultSprite;

storiesOf('Components/Messages', module)
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
