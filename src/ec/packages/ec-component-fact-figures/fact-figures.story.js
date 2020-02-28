/* eslint-disable no-param-reassign, camelcase */
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
// Preserve original data.
const data3 = { ...data3Col };
const data4 = { ...data4Col };
// Button callback.
// 3 Columns.
const viewAll3Toggler = () => {
  data3.view_all = data3.view_all ? false : data3Col.view_all;
};
// 4 Columns.
const viewAll4Toggler = () => {
  data4.view_all = data4.view_all ? false : data4Col.view_all;
};
// Knobs for the items.
const formatItem = (item, index) => {
  item.value = text(
    `data.items[${index}].statistic`,
    item.value,
    requiredGroupId
  );
  item.title = text(`data.items[${index}].title`, item.title, requiredGroupId);
  item.description = text(
    `data.items[${index}].description`,
    item.description,
    optionalGroupId
  );
  if (item.icon) {
    item.icon.path = text(
      `data.items[${index}].icon.path`,
      defaultSprite,
      optionalGroupId
    );
  }

  return item;
};
// prepare the knobs for the stories.
const prepareFactFigures = p => {
  const column = text('data.column', p.column, requiredGroupId);
  const display_icons = p.display_icons
    ? boolean('data.display_icons', true, optionalGroupId)
    : false;
  const view_all = p.view_all.link
    ? {
        link: {
          label: text(
            'data.view_all.link.label',
            p.view_all.link.label,
            optionalGroupId
          ),
          path: text(
            'data.view_all.link.path',
            p.view_all.link.path,
            optionalGroupId
          ),
        },
      }
    : false;
  const items = p.items.map(formatItem);

  return { column, items, display_icons, view_all };
};

storiesOf('Components/Fact figures', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .add(
    '3 Columns',
    () => {
      button('With or without view_links', viewAll3Toggler, useCasesGroup);

      return factFigures(prepareFactFigures(data3));
    },
    {
      notes: { markdown: notes, json: data3 },
    }
  )
  .add(
    '4 Columns',
    () => {
      button('With or without view_links', viewAll4Toggler, useCasesGroup);

      return factFigures(prepareFactFigures(data4));
    },
    {
      notes: { markdown: notes, json: data4 },
    }
  );
