import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion from './ecl-accordion.html.twig';
import notes from './README.md';

const preprareAccordion = data => {
  data.items.forEach((item, index) => {
    const { id, level, toggle, content } = item;
    item.id = select(
      `items[${index}].id`,
      ['none', id],
      id,
      tabLabels.required
    );
    if (item.id === 'none') {
      item.id = '';
    }
    item.content = text(`items[${index}].content`, content, tabLabels.required);
    item.toggle.label = text(
      `items[${index}].toggle.label`,
      toggle.label,
      tabLabels.required
    );
    item.toggle.icon.path = select(
      `items[${index}].toggle.icon.path`,
      ['none', defaultSprite],
      defaultSprite,
      tabLabels.required
    );
    if (item.toggle.icon.path === 'none') {
      item.toggle.icon.path = '';
    }
    const levels = [1, 2, 3, 4, 5, 6];
    item.level = select(
      `items[${index}].level`,
      levels,
      level,
      tabLabels.optional
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/deprecated/Accordion',
  decorators: [withKnobs, withCode, withNotes],
};

export const Ecl260Default = () => accordion(preprareAccordion(demoData));

Ecl260Default.story = {
  name: 'ECL < 2.6.0 - default',

  parameters: {
    notes: { markdown: notes, json: demoData },
  },
};
