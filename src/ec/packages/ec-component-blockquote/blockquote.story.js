/* eslint-disable no-param-reassign, no-shadow */
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import data from '@ecl/ec-specs-blockquote/demo/data';
import blockquote from './ecl-blockquote.html.twig';
import notes from './README.md';
// Labels for the group ids
const optionalGroupId = 'Optional elements';
const requiredGroupId = 'Mandatory elements';

const prepareQuote = preperaData => {
  preperaData.citation = text(
    'citation',
    preperaData.citation,
    requiredGroupId
  );
  preperaData.author = text('author', preperaData.author, requiredGroupId);
  return preperaData;
};

storiesOf('Components/Blockquote', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      const storyData = prepareQuote(data);
      storyData.demo = text(
        'optional elements',
        'No optional element in this story',
        optionalGroupId
      );
      return blockquote(storyData);
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
