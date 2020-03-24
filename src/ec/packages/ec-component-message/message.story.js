/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  buttonLabels,
  getIconKnobs,
} from '@ecl-twig/story-utils';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
// Import data for demos
import dataInfo from './demo/data--info';
import dataSuccess from './demo/data--success';
import dataError from './demo/data--error';
import dataWarning from './demo/data--warning';

import message from './ecl-message.html.twig';
import notes from './README.md';

const prepareMessage = data => {
  data.title = text('title', data.title, buttonLabels.required);
  data.description = text(
    'description',
    data.description,
    buttonLabels.required
  );
  data.variant = select(
    'variant',
    [data.variant],
    data.variant,
    buttonLabels.required
  );
  const name = select(
    'icon.name',
    [data.icon.name],
    data.icon.name,
    buttonLabels.required
  );
  getIconKnobs(data, name, 'notifications', 'l', 'primary', 'none');
  data.close.icon.path = select(
    'close.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Messages', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('Info', () => message(prepareMessage(dataInfo)), {
    notes: { markdown: notes, json: dataInfo },
  })
  .add('Success', () => message(prepareMessage(dataSuccess)), {
    notes: { markdown: notes, json: dataSuccess },
  })
  .add('Error', () => message(prepareMessage(dataError)), {
    notes: { markdown: notes, json: dataError },
  })
  .add('Warning', () => message(prepareMessage(dataWarning)), {
    notes: { markdown: notes, json: dataWarning },
  });
