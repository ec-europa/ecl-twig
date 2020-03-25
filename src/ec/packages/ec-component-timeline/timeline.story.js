/* eslint-disable no-param-reassign,prefer-destructuring */
import { storiesOf } from '@storybook/html';
import { withKnobs, number, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import he from 'he';

import demoData from './demo/data';

import timeline from './ecl-timeline.html.twig';
import notes from './README.md';

const prepareTimeline = data => {
  const from = data.hide.from;
  const to = data.hide.to;
  let hiddenCount = 0;
  if (to > 0) {
    hiddenCount = to - from;
  } else {
    hiddenCount = data.items.length + to - from;
  }
  data.toggle_collapsed = select(
    `data.toggle_collapsed`,
    [`Show ${hiddenCount} more items`],
    `Show ${hiddenCount} more items`,
    buttonLabels.required
  );
  data.toggle_expanded = select(
    `data.toggle_expanded`,
    [`Hide ${hiddenCount} items`],
    `Hide ${hiddenCount} items`,
    buttonLabels.required
  );
  data.hide.from = number(
    'hide.from',
    data.hide.from,
    {},
    buttonLabels.required
  );
  data.hide.to = number('hide.to', data.hide.to, {}, buttonLabels.required);
  data.items.forEach((item, index) => {
    const { id, label, title, content } = item;
    item.id = text(`items[${index}].id`, id, buttonLabels.required);
    item.label = text(`items[${index}].label`, label, buttonLabels.required);
    item.title = text(`items[${index}].title`, title, buttonLabels.required);
    item.content = he.decode(
      text(`items[${index}].content`, content, buttonLabels.required)
    );
  });
  data.icon_path = select(
    `icon_path`,
    [iconPath],
    iconPath,
    buttonLabels.required
  );
  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Timeline', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => timeline(prepareTimeline(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
