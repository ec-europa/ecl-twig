/* eslint-disable prefer-destructuring */
import { storiesOf } from '@storybook/html';
import { withKnobs, number, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import he from 'he';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
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
    'toggle_collapsed',
    ['none', `Show ${hiddenCount} more items`],
    `Show ${hiddenCount} more items`,
    tabLabels.required
  );
  if (data.toggle_collapsed === 'none') {
    data.toggle_collapsed = '';
  }
  data.toggle_expanded = select(
    'toggle_expanded',
    ['none', `Hide ${hiddenCount} items`],
    `Hide ${hiddenCount} items`,
    tabLabels.required
  );
  if (data.toggle_expanded === 'none') {
    data.toggle_expanded = '';
  }
  data.icon_path = select(
    'icon_path',
    ['none', defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  if (data.icon_path === 'none') {
    data.icon_path = '';
  }

  data.hide.from = number('hide.from', data.hide.from, {}, tabLabels.optional);
  data.hide.to = number('hide.to', data.hide.to, {}, tabLabels.optional);

  data.items.forEach((item, i) => {
    const { id, label, title, content } = item;
    item.label = text(`items[${i}].label`, label, tabLabels.required);
    item.id = text(`items[${i}].id`, id, tabLabels.optional);
    item.title = text(`items[${i}].title`, title, tabLabels.optional);
    item.content = he.decode(
      text(`items[${i}].content`, content, tabLabels.required)
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Timeline', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => timeline(prepareTimeline(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
