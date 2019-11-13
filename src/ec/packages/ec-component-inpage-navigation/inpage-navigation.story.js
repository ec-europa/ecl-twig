import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import inpageNavigationDocs from './docs/inpage-navigation.md';

import demoData from './demo/data';
import pageFiller from './demo/page-filler';

import inpageNavigation from './ecl-inpage-navigation.html.twig';

storiesOf('Components/Navigation/Inpage navigation', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const fullDemoData = { ...demoData, icon_path: iconPath };

      let pageFillerHtml = '';
      pageFiller.items.forEach(item => {
        pageFillerHtml += `<h2 class="ecl-u-type-heading-2" id="${item.hash}">${item.label}</h2><p class="ecl-u-type-paragraph-m">${item.content}</p><p class="ecl-u-type-paragraph-m">${item.content}</p>`;
      });

      const html = inpageNavigation(fullDemoData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = `<div class="ecl-container"><div class="ecl-row ecl-u-mt-l"><div class="ecl-col-md-3">${html}</div><div class="ecl-col-md-9">${pageFillerHtml}</div></div></div>`;
      demo.appendChild(htmlElement.firstChild);

      return demo;
    },
    {
      notes: { markdown: inpageNavigationDocs },
    }
  );
