/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion from './ecl-accordion.html.twig';
import notes from './README.md';

const preprareAccordion = data => {
  data.items.forEach((item, index) => {
    const { id, level, toggle, content } = item;
    item.id = select(`item[${index}].id`, [id], id, buttonLabels.required);
    item.level = select(
      `item[${index}].level`,
      [level],
      level,
      buttonLabels.required
    );
    item.toggle.label = text(
      `item[${index}].toggle.label`,
      toggle.label,
      buttonLabels.required
    );
    item.toggle.icon.path = select(
      `item[${index}].toggle.icon.path`,
      [defaultSprite],
      defaultSprite,
      buttonLabels.required
    );
    item.content = text(
      `item[${index}].content`,
      content,
      buttonLabels.required
    );
    getExtraKnobs(data);
  });
  return data;
};
storiesOf('Components/deprecated/Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'ECL < 2.6.0 - default',
    () => {
      // This needs to be in the scope of this function.
      // Called on knob's change of value.

      return accordion(preprareAccordion(demoData));
    },
    {
      notes: { markdown: notes, json: preprareAccordion(demoData) },
    }
  );
