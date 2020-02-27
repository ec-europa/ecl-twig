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

// declare your toggled data
const authorBtnToggler = () => {
  defaultData.author = defaultData.author ? false : data.author;
};

const formatQuote = passeddata => {
  // declare your knobs when you format your data
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
      button('show/ hide author', authorBtnToggler, useCasesGroup);

      return blockquote(formatQuote(defaultData));
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
