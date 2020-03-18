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
import notifIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
// Import data for demos
import dataInfo from './demo/data--info';
import dataSuccess from './demo/data--success';
import dataError from './demo/data--error';
import dataWarning from './demo/data--warning';

import message from './ecl-message.html.twig';
import notes from './README.md';

const iconsList = {};
iconsList.none = null;

notifIcons.forEach(icon => {
  iconsList[icon] = icon;
});

const PrepareMessage = data => {
  const name = select('icon.name', iconsList, null, buttonLabels.required);
  if (name !== null) {
    getIconKnobs(data, name, 'notifications', 'l');
  }

  if (data.title) {
    data.title = text('Title', data.title, buttonLabels.required);
  }

  if (data.description) {
    data.description = text(
      'Description',
      data.description,
      buttonLabels.required
    );
  }
  getExtraKnobs(data);

  return data;
};

const formatIcon = data => {
  data.icon.path = defaultSprite;
  data.close.icon.path = defaultSprite;
  return data;
};

storiesOf('Components/Messages', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'Info',
    () => {
      const data = PrepareMessage(dataInfo);
      return message(data);
    },
    {
      notes: { markdown: notes, json: formatIcon(dataInfo) },
    }
  )
  .add(
    'Success',
    () => {
      const data = PrepareMessage(dataSuccess);
      return message(data);
    },
    {
      notes: { markdown: notes, json: formatIcon(dataSuccess) },
    }
  )
  .add(
    'Error',
    () => {
      const data = PrepareMessage(dataError);
      return message(data);
    },
    {
      notes: { markdown: notes, json: formatIcon(dataError) },
    }
  )
  .add(
    'Warning',
    () => {
      const data = PrepareMessage(dataWarning);
      return message(data);
    },
    {
      notes: { markdown: notes, json: formatIcon(dataWarning) },
    }
  );
