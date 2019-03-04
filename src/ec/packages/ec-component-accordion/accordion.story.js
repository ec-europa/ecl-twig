import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion from './accordion.html.twig';
import notes from './docs/accordion.md';

demoData.items.forEach(item => {
  item.toggle.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
});

storiesOf('Components/Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      const html = accordion(demoData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
        var elements = document.querySelectorAll('[data-ecl-accordion]');

        for (var i = 0; i < elements.length; i += 1) {
          var accordion = new ECL.Accordion(elements[i]);
          accordion.init();
        }        
      `;
      demo.append(scriptElement);

      return demo;
    },

    {
      notes: { markdown: notes },
    }
  );
