import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
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

const prepareAccordion = data => {
  data.items.forEach((item, index) => {
    const { id, level, toggle, content } = item;
    item.id = optionsKnob(
      `items[${index}].id`,
      { current: item.id, 'no id': '' },
      id,
      { display: 'inline-radio' },
      tabLabels.required
    );
    item.content = text(`items[${index}].content`, content, tabLabels.required);
    item.toggle.label = text(
      `items[${index}].toggle.label`,
      toggle.label,
      tabLabels.required
    );

    item.toggle.icon.path = optionsKnob(
      `items[${index}].toggle.icon.path`,
      { current: defaultSprite, 'no path': '' },
      defaultSprite,
      { display: 'inline-radio' },
      tabLabels.required
    );
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

storiesOf('Components/deprecated/Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('ECL < 2.6.0 - default', () => accordion(prepareAccordion(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
