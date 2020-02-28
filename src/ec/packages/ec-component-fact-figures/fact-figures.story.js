/* eslint-disable no-param-reassign, prefer-destructuring  */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, boolean, text, button } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import data3Col from './demo/data--3-col';
import data4Col from './demo/data--4-col';

import factFigures from './ecl-fact-figures.html.twig';
import notes from './README.md';

// Labels for the groupids.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const useCasesGroup = 'Use cases';

const Col3data = { ...data3Col };
const Col4data = { ...data4Col };

const viewAllToggler = () => {
  Col3data.view_all.link.label = Col3data.view_all.link.label
    ? false
    : data3Col.view_all.link.label;
};

const prepareFactFigures = prepareData => {
  const column = prepareData.column;

  const formatItems = (item, index) => {
    item.value = text(`Item ${index} statistic`, item.value, optionalGroupId);
    item.title = text(`Item ${index} label`, item.title, requiredGroupId);
    item.description = text(
      `Item ${index} description`,
      item.description,
      optionalGroupId
    );
    item.icon.path = defaultSprite;
    return item;
  };

  const displayIcons = prepareData.display_icons
    ? boolean('Display icons', true, useCasesGroup)
    : false;

  const viewAll = prepareData.view_all.link.label
    ? {
        link: {
          label: text(
            'card.title.type',
            prepareData.view_all.link.label,
            optionalGroupId
          ),
          path: '/exmaple',
        },
      }
    : {
        link: {
          path: '/exmaple',
        },
      };

  const items = prepareData.items ? prepareData.items.map(formatItems) : false;

  const newFactsFigures = {
    column,
    items,
    displayIcons,
    viewAll,
  };

  return newFactsFigures;
};

storiesOf('Components/Fact figures', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .add(
    '3 Columns',
    () => {
      button('With or without view_links', viewAllToggler, useCasesGroup);

      return factFigures(prepareFactFigures(Col3data));
    },
    {
      notes: { markdown: notes, json: prepareFactFigures(Col3data) },
    }
  )
  .add(
    '4 Columns',
    () => {
      return factFigures(prepareFactFigures(Col4data));
    },
    {
      notes: { markdown: notes, json: prepareFactFigures(Col4data) },
    }
  );
