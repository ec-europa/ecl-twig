/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-blockquote/demo/data';

import blockquote from './ecl-blockquote.html.twig';
import notes from './README.md';

// Labels for the group ids
const optionalGroupId = 'Optional elements';
const requiredGroupId = 'Mandatory elements';
const useCasesGroup = 'Use cases';

// Preserve the adapted specs.
const defaultData = { ...data };

const authorBtnToggler = () => {
  defaultData.author = defaultData.author ? false : data.author;
};
// const citationBtnToggler = () => {
//   defaultData.citation = defaultData.citation ? false : data.citation;
// };

// Reset buttons.
// const resetBtnToggler = () => {
//   defaultData = { ...data };
// };

const formatQuote = passeddata => {
  const citation = passeddata.citation
    ? text('Citation', passeddata.citation, requiredGroupId)
    : false;

  const author = passeddata.author
    ? text('Author', passeddata.author, optionalGroupId)
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
      button('With or without author', authorBtnToggler, useCasesGroup);

      return blockquote(formatQuote(data));
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
