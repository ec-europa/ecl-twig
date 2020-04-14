/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getFormGroupKnobs,
  tabLabels,
  getFormItemKnobs,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data--default';
import dataBinary from './demo/data--binary';
import radioGroup from './ecl-radio-group.html.twig';
import notes from './README.md';

const prepareRadio = (data, binary) => {
  if (binary) {
    data.binary = boolean('binary', true, tabLabels.required);
  }
  // Form group knobs.
  getFormGroupKnobs(data);
  // Form item knobs.
  getFormItemKnobs(data, true);
  // Extra classes and attributes.
  getExtraKnobs(data, true);

  return data;
};

storiesOf('Components/Forms/Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('default', () => radioGroup(prepareRadio(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  })
  .add('binary', () => radioGroup(prepareRadio(dataBinary, true)), {
    notes: { markdown: notes, json: dataBinary },
  });
