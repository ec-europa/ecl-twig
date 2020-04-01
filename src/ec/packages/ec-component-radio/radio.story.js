/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getFormKnobs,
  tabLabels,
  getFormItemKnobs,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data--default';
import dataBinary from './demo/data--binary';
import radioGroup from './ecl-radio-group.html.twig';
import notes from './README.md';

const prepareRadio = data => {
  getFormKnobs(data);
  getFormItemKnobs(data);
  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Forms/Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = prepareRadio(dataDefault);

      return radioGroup(data);
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'binary',
    () => {
      boolean('binary', true, tabLabels.states);
      const data = prepareRadio(dataBinary);

      return radioGroup(data);
    },
    {
      notes: { markdown: notes, json: dataBinary },
    }
  );
