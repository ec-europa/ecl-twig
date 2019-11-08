/* eslint-disable no-param-reassign */

import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion2 from './ecl-accordion2.html.twig';
import notes from './docs/accordion2.md';

storiesOf('Components/Accordion2', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      // This needs to be in the scope of this function.
      // Called on knob's change of value.
      demoData.items.forEach(item => {
        const { id, content, toggle } = item;

        item.toggle.label = text(`Label ${id}`, toggle.label);
        item.content = text(`Content ${id}`, content);

        item.toggle.icon.path = defaultSprite;
      });

      return accordion2(demoData);
    },
    {
      notes: { markdown: notes },
    }
  );
