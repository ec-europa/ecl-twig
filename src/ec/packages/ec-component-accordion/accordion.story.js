/* eslint-disable no-param-reassign */

import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion from './accordion.html.twig';
import notes from './docs/accordion.md';

storiesOf('Components/Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    '[deprecated] ECL < 2.6.0',
    () => {
      // This needs to be in the scope of this function.
      // Called on knob's change of value.
      demoData.items.forEach(item => {
        const { id, content, toggle } = item;

        item.toggle.label = text(`Label ${id}`, toggle.label);
        item.content = text(`Content ${id}`, content);

        item.toggle.icon.path = defaultSprite;
      });

      return accordion(demoData);
    },

    {
      notes: { markdown: notes },
    }
  );
