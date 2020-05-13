import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getFormKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data--default';
import textInput from './ecl-text-input.html.twig';
import notes from './README.md';

const prepareTextInput = data => {
  getFormKnobs(data);
  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Forms/Text field', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = prepareTextInput(dataDefault);

      return textInput(data);
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  );
