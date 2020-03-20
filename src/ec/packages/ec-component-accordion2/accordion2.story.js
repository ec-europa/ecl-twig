/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { buttonLabels, getExtraKnobs } from '@ecl-twig/story-utils';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion2 from './ecl-accordion2.html.twig';
import notes from './README.md';

const prepareAccordion2 = data => {
  data.items.forEach((item, index) => {
    const { content, toggle } = item;

    item.toggle.label = text(
      `toggle.label ${index}`,
      toggle.label,
      buttonLabels.required
    );

    item.content = text(`content ${index}`, content, buttonLabels.required);
    item.toggle.icon.path = defaultSprite;
  });
  getExtraKnobs(data);
  return data;
};

storiesOf('Components/Accordion2', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      const accordion2DemoData = prepareAccordion2(demoData);
      return accordion2(accordion2DemoData);
    },
    {
      notes: { markdown: notes, json: demoData },
    }
  );
