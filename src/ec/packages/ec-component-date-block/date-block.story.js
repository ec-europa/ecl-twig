/* eslint-disable no-shadow */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
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
  data.extra_classes = text('extra_classes', '', optionalGroupId);
  const attribute1Name = text('extra_attributes[0].name', '', optionalGroupId);
  // First attribute.
  if (attribute1Name !== '') {
    data.extra_attributes = [];
    let attribute = {};
    const attribute1Value = text(
      'extra_attributes[0].value',
      '',
      optionalGroupId
    );
    const attribute2Name = text(
      'extra_attributes[1].name',
      '',
      optionalGroupId
    );
    attribute.name = attribute1Name;
    if (attribute1Value !== '') {
      attribute.value = attribute1Value;
    }
    data.extra_attributes.push(attribute);
    // Second attribute.
    if (attribute2Name !== '') {
      const attribute2Value = text(
        'extra_attributes[1].value',
        '',
        optionalGroupId
      );
      attribute = {};
      attribute.name = attribute2Name;
      if (attribute2Value !== '') {
        attribute.value = attribute2Value;
      }
      data.extra_attributes.push(attribute);
    }
  } else {
    delete data.extra_attributes;
  }

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
