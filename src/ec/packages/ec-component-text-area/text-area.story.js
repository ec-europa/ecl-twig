import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, getFormKnobs } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import specData from './demo/data--default';
import textArea from './ecl-text-area.html.twig';
import notes from './README.md';

const prepareTextArea = data => {
  getFormKnobs(data);
  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Forms/Text area', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('default', () => textArea(prepareTextArea(specData)), {
    notes: { markdown: notes, json: specData },
  });
