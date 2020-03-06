/* eslint-disable no-param-reassign, no-shadow */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from './demo/data';
import dateBlock from './ecl-date-block.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

const options = {
  default: '',
  canceled: 'canceled',
  past: 'past',
  ongoing: 'ongoing',
};

const defaultValue = 'default';

const prepareDateBlock = data => {
  data.day = text('day', data.day, requiredGroupId);
  data.year = text('year', data.year, requiredGroupId);
  data.month = text('month', data.month, requiredGroupId);
  data.month_full = text('month_full', data.month_full, requiredGroupId);
  data.date_time = text('date_time', data.date_time, optionalGroupId);
  data.extra_classes = text(
    'extra_classes (comma separated)',
    '',
    optionalGroupId
  );
  data.extra_attributes = object(
    'extra_attributes',
    { name: '', value: '' },
    optionalGroupId
  );

  return data;
};

storiesOf('Components/Date block', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const variant = select(
        'variant',
        [defaultValue],
        defaultValue,
        requiredGroupId
      );
      const dataStory = prepareDateBlock(data);
      dataStory.variant = variant;

      return dateBlock(dataStory);
    },
    {
      notes: { markdown: notes, json: data },
    }
  )
  .add(
    'ongoing',
    () => {
      const variant = select(
        'variant',
        [options.ongoing],
        'ongoing',
        requiredGroupId
      );
      const dataStory = prepareDateBlock(data);
      dataStory.variant = variant;

      return dateBlock(dataStory);
    },
    {
      notes: { markdown: notes, json: data },
    }
  )
  .add(
    'canceled',
    () => {
      const variant = select(
        'variant',
        [options.canceled],
        'canceled',
        requiredGroupId
      );
      const dataStory = prepareDateBlock(data);
      dataStory.variant = variant;

      return dateBlock(dataStory);
    },
    {
      notes: { markdown: notes, json: data },
    }
  )
  .add(
    'past',
    () => {
      const variant = select(
        'variant',
        [options.past],
        'past',
        requiredGroupId
      );
      const dataStory = prepareDateBlock(data);
      dataStory.variant = variant;

      return dateBlock(dataStory);
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
