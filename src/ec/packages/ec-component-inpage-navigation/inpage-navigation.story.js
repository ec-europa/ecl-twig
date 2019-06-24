import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import inpageNavigationDocs from './docs/inpage-navigation.md';

import demoData from './demo/data';
import pageFiller from './demo/page-filler';

import inpageNavigation from './inpage-navigation.html.twig';

storiesOf('Components/Inpage navigation', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const fullDemoData = { ...demoData, icon_path: iconPath };

      let pageFillerHtml = '';
      pageFiller.items.forEach(item => {
        pageFillerHtml += `<h1 id="${item.hash}">${item.label}</h1><p>${item.content}</p><p>${item.content}</p>`;
      });

      const html = inpageNavigation(fullDemoData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = `<div class="ecl-container"><div class="ecl-row ecl-u-mt-l"><div class="ecl-col-md-3">${html}</div><div class="ecl-col-md-9">${pageFillerHtml}</div></div>`;
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
        var elements = document.querySelectorAll('[data-ecl-inpage-navigation]');
        var inpageNavigation = new ECL.InpageNavigation(elements[0]);
        inpageNavigation.init();
      `;
      demo.appendChild(scriptElement);

      return demo;
    },
    {
      notes: { markdown: inpageNavigationDocs },
    }
  );
