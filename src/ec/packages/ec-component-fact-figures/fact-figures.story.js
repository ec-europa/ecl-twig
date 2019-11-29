// eslint-disable-line no-param-reassign
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import data3Col from './demo/data--3-col';
import data4Col from './demo/data--4-col';

import factFigures from './ecl-fact-figures.html.twig';
import notes from './README.md';

const formatIcon = data => {
  data.items.forEach(i => {
    i.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  });

  return data;
};

storiesOf('Components/Fact figures', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('3 Columns', () => factFigures(formatIcon(data3Col)), {
    notes: { markdown: notes, json: data3Col },
  })
  .add('4 Columns', () => factFigures(formatIcon(data4Col)), {
    notes: { markdown: notes, json: data4Col },
  });
