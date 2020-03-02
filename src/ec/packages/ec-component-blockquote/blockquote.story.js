/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-blockquote/demo/data';

import blockquote from './ecl-blockquote.html.twig';
import notes from './README.md';

// Labels for the group ids
// const optionalGroupId = 'Optional elements';
const requiredGroupId = 'Mandatory elements';
const useCasesGroup = 'Use cases';

// Preserve the adapted specs.
const defaultData = { ...data };

// declare your toggled data
const authorBtnToggler = () => {};

const prepareQuote = prepareData => {
  // declare your knobs when you format your data
  const citation = prepareData.citation
    ? text('Citation', prepareData.citation, requiredGroupId)
    : false;

  const author = prepareData.author
    ? text('Author', prepareData.author, requiredGroupId)
    : false;

  const newQuote = {
    author,
    citation,
  };

  // Return the full object.
  return newQuote;
};

storiesOf('Components/Blockquote', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      button('fake button to enforce groups', authorBtnToggler, useCasesGroup);

      return blockquote(prepareQuote(defaultData));
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
