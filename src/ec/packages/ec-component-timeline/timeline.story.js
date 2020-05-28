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

const iconOptions = {
  none: false,
  defaultSprite,
};

const prepareTimeline = data => {
  const from = data.hide.from;
  const to = data.hide.to;
  let hiddenCount = 0;
  if (to > 0) {
    hiddenCount = to - from;
  } else {
    hiddenCount = data.items.length + to - from;
  }
  data.hide.from = number('hide.from', data.hide.from, {}, tabLabels.required);
  data.hide.to = number('hide.to', data.hide.to, {}, tabLabels.required);
  data.toggle_collapsed = select(
    'toggle_collapsed',
    [`Show ${hiddenCount} more items`],
    `Show ${hiddenCount} more items`,
    tabLabels.required
  );
  data.toggle_expanded = select(
    'toggle_expanded',
    [`Hide ${hiddenCount} items`],
    `Hide ${hiddenCount} items`,
    tabLabels.required
  );
  data.icon_path = select(
    'icon_path',
    iconOptions,
    defaultSprite,
    tabLabels.required
  );

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
