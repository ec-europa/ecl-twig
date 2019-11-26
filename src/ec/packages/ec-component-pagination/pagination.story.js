import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import data from './demo/data';

import pagination from './ecl-pagination.html.twig';
import notes from './README.md';

// Add icon path
data.items.forEach(item => {
  if (item.link && item.link.icon) {
    item.link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  }
});

storiesOf('Components/Navigation/Pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('default', () => pagination(data), {
    notes: { markdown: notes, json: data },
  });
