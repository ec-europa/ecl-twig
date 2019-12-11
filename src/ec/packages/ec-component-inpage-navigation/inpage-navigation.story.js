import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import demoData from './demo/data';
import inpageNavigation from './ecl-inpage-navigation.html.twig';
import notes from './README.md';

storiesOf('Components/Navigation/Inpage navigation', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      let pageFillerHtml = '';
      demoData.links.forEach(content => {
        pageFillerHtml += content.item;
      });

      const fullDemoData = { ...demoData, icon_path: iconPath };
      const html = inpageNavigation(fullDemoData);
      const demo = document.createDocumentFragment();
      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = `<div class="ecl-container"><div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container><div class="ecl-col-md-3">${html}</div><div class="ecl-col-md-9">${pageFillerHtml}</div></div></div>`;
      demo.appendChild(htmlElement.firstChild);

      return demo;
    },
    {
      notes: { markdown: notes },
    }
  );
