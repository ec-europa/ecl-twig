import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from './demo/data';
import dateBlock from './ecl-date-block.html.twig';
import notes from './README.md';

const options = {
  default: '',
  canceled: 'canceled',
  past: 'past',
  ongoing: 'ongoing',
};
const label = 'Variant';
const defaultValue = 'default';

storiesOf('Components/Date block', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      return dateBlock({
        variant: select(label, options, defaultValue),
        day: text('Day', data.day),
        year: text('Year', data.year),
        month: text('Month', data.month),
        month_full: text('Full month', data.month_full),
        date_time: text('Time', data.date_time),
      });
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
