/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion2 from './ecl-accordion2.html.twig';
import notes from './README.md';

const prepareAccordion2 = data => {
  data.items.forEach((item, index) => {
    const levels = [1, 2, 3, 4, 5, 6];
    const { id, level, toggle, content } = item;

    item.id = select(`items[${index}].id`, [id], id, buttonLabels.required);
    item.level = select(
      `items[${index}].level`,
      levels,
      level,
      buttonLabels.required
    );
    item.toggle.label = text(
      `items[${index}].toggle.label`,
      toggle.label,
      buttonLabels.required
    );
    item.content = text(
      `items[${index}].content`,
      content,
      buttonLabels.required
    );
    item.toggle.icon.path = select(
      `items[${index}].toggle.icon.path`,
      [defaultSprite],
      defaultSprite,
      buttonLabels.required
    );
  });

  getExtraKnobs(data);
  return data;
};

storiesOf('Components/Accordion2', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => accordion2(prepareAccordion2(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
