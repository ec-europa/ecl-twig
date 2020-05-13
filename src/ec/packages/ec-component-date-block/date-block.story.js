/* eslint-disable no-shadow */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import specs from './demo/data';
import dateBlock from './ecl-date-block.html.twig';
import notes from './README.md';

// Preserve original data.
const dataDefault = { ...specs };
const dataOngoing = { ...specs };
const dataCanceled = { ...specs };
const dataPast = { ...specs };

const prepareDateBlock = (data, variant) => {
  data.variant = select('variant', [variant], variant, tabLabels.required);
  data.day = text('day', data.day, tabLabels.required);
  data.year = text('year', data.year, tabLabels.required);
  data.month = text('month', data.month, tabLabels.required);
  data.month_full = text('month_full', data.month_full, tabLabels.required);
  data.date_time = text('date_time', data.date_time, tabLabels.optional);

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Date block', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('default', () => dateBlock(prepareDateBlock(dataDefault, 'default')), {
    notes: { markdown: notes, json: dataDefault },
  })
  .add('ongoing', () => dateBlock(prepareDateBlock(dataOngoing, 'ongoing')), {
    notes: { markdown: notes, json: dataOngoing },
  })
  .add(
    'canceled',
    () => dateBlock(prepareDateBlock(dataCanceled, 'canceled')),
    {
      notes: { markdown: notes, json: dataCanceled },
    }
  )
  .add('past', () => dateBlock(prepareDateBlock(dataPast, 'past')), {
    notes: { markdown: notes, json: dataPast },
  });
