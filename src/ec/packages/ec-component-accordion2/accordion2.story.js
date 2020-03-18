/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { buttonLabels } from '@ecl-twig/story-utils';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion2 from './ecl-accordion2.html.twig';
import notes from './README.md';

const PrepareAccordion2 = data => {
  data.items.forEach(item => {
    const { id, content, toggle } = item;
    item.toggle.label = text(
      `label ${id}`,
      toggle.label,
      buttonLabels.required
    );
    item.content = text(`content ${id}`, content, buttonLabels.required);
    item.toggle.icon.path = defaultSprite;
  });
};

storiesOf('Components/Accordion2', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      const accordion2DemoData = PrepareAccordion2(demoData);
      return accordion2(accordion2DemoData);
    },
    {
      notes: { markdown: notes, json: demoData },
    }
  );
