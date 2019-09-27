/* eslint-disable no-param-reassign */

import { storiesOf } from '@storybook/html';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import demoData from './demo/data';
import contextualNavigation from './contextual-navigation.html.twig';
import notes from './docs/contextual-navigation.md';

storiesOf('Components/Navigation/Contextual Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      demoData.item_more.icon.path = defaultSprite;

      demoData.items_limit = number('Number of items:', demoData.items_limit);
      demoData.label = text('Label:', demoData.label);

      // This needs to be in the scope of this function.
      // Called on knob's change of value.
      demoData.items.forEach((item, key) => {
        item.label = text(`Item ${key} label:`, item.label);
      });

      return contextualNavigation(demoData);
    },
    {
      notes: { markdown: notes },
    }
  );
