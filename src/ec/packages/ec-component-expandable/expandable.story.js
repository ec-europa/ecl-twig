import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import expandable from './expandable.html.twig';
import notes from './docs/expandable.md';

storiesOf('Components/Expandables', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      demoData.button.icon.path = defaultSprite;
      demoData.label_expanded = text('Label Expanded', demoData.labelExpanded);
      demoData.label_collapsed = text(
        'Label Collapsed',
        demoData.labelCollapsed
      );
      demoData.content = text('Content', demoData.content);

      const html = expandable(demoData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
        var expandableElement = document.querySelector('[data-ecl-expandable]');
        var expandable = new ECL.Expandable(expandableElement);
        expandable.init();
      `;
      demo.appendChild(scriptElement);

      return demo;
    },

    {
      notes: { markdown: notes },
    }
  );
