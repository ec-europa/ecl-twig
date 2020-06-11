import he from 'he';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from '@ecl/ec-specs-label/demo/data';
import label from './ecl-label.html.twig';
import notes from './README.md';

const options = {
  'low importance': 'low',
  'medium importance': 'medium',
  'high importance': 'high',
};

const prepareLabel = data => {
  data.label = he.decode(text('label', data.label, tabLabels.required));
  data.variant = select(
    'variant',
    options,
    options['low importance'],
    tabLabels.optional
  );

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Label', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('default', () => label(prepareLabel(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  });
