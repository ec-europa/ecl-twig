/* eslint-disable no-param-reassign */

import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import demoData from './demo/data';
import contextualNavigation from './contextual-navigation.html.twig';
import notes from './docs/contextual-navigation.md';

storiesOf('Components/Contextual Navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      demoData.item_more.icon.path = defaultSprite;

      // This needs to be in the scope of this function.
      // Called on knob's change of value.
      demoData.items.forEach((item, key) => {
        item.label = text(`Item ${key} label:`, item.label);
      });

      const html = contextualNavigation(demoData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
        var element = document.querySelector('[data-ecl-contextual-navigation]');
        var contextualNavigation = new ECL.ContextualNavigation(element);
        contextualNavigation.init();
      `;
      demo.append(scriptElement);

      return demo;
    },

    {
      notes: { markdown: notes },
    }
  );
