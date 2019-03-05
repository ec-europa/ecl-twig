import { storiesOf } from '@storybook/html';
import { withKnobs, radios, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import expandable from './expandable.html.twig';
import notes from './docs/expandable.md';

storiesOf('Components/Expandable', module)
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
      demoData.expanded = radios(
        'State',
        {
          expanded: 'true',
          collapsed: 'false',
        },
        'false'
      );

      const html = expandable(demoData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
        var expandableElement = document.querySelector('[data-ecl-expandable]');
        var expandable = new ECL.Expandable(expandableElement);
        expandable.init();
      `;
      demo.append(scriptElement);

      return demo;
    },

    {
      notes: { markdown: notes },
    }
  );
