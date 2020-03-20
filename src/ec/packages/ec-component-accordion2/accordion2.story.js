/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { buttonLabels, getExtraKnobs } from '@ecl-twig/story-utils';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion2 from './ecl-accordion2.html.twig';
import notes from './README.md';

const prepareAccordion2 = data => {
  data.items.forEach((item, index) => {
    const { content, toggle, id } = item;

    item.id = select(`item ${index} id`, [id], id, buttonLabels.required);

    item.toggle.label = text(
      `item ${index} toggle.label`,
      toggle.label,
      buttonLabels.required
    );

    item.toggle.iconShape = select(
      `item ${index} toggle.iconShape`,
      [toggle.iconShape],
      toggle.iconShape,
      buttonLabels.required
    );

    item.content = text(
      `item ${index} content`,
      content,
      buttonLabels.required
    );
    item.toggle.icon.path = defaultSprite;
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
