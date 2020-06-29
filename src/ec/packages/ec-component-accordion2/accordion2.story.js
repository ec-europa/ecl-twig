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

import accordion2 from './ecl-accordion2.html.twig';
import notes from './README.md';

const prepareAccordion2 = data => {
  data.items.forEach((item, index) => {
    const levels = [1, 2, 3, 4, 5, 6];
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

storiesOf('Components/Accordion2', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => accordion2(prepareAccordion2(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
