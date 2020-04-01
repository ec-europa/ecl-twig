/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, tabLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion from './ecl-accordion.html.twig';
import notes from './README.md';

const preprareAccordion = data => {
  data.items.forEach((item, index) => {
    const { id, level, toggle, content } = item;
    const levels = [1, 2, 3, 4, 5, 6];
    item.level = select(
      `items[${index}].level`,
      levels,
      level,
      tabLabels.required
    );
    item.id = select(`items[${index}].id`, [id], id, tabLabels.required);
    item.content = text(`items[${index}].content`, content, tabLabels.required);
    item.toggle.label = text(
      `items[${index}].toggle.label`,
      toggle.label,
      tabLabels.required
    );
    item.toggle.icon.path = select(
      `items[${index}].toggle.icon.path`,
      [defaultSprite],
      defaultSprite,
      tabLabels.required
    );
    getExtraKnobs(data);
  });

  return data;
};

storiesOf('Components/deprecated/Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('ECL < 2.6.0 - default', () => accordion(preprareAccordion(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
