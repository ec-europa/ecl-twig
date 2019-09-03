import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import menuLegacyDocs from './docs/menu-legacy.md';

import demoData from './demo/data';

import menuLegacy from './menu-legacy.html.twig';

storiesOf('Components/Navigation/Menu Legacy', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const fullDemoData = { ...demoData, icon_path: iconPath };

      const html = menuLegacy(fullDemoData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = `<div>${html}</div>`;
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
        var elements = document.querySelectorAll('[data-ecl-menu-legacy]');
        var menuLegacy = new ECL.MenuLegacy(elements[0]);
        menuLegacy.init();
      `;
      demo.appendChild(scriptElement);

      return demo;
    },
    {
      notes: { markdown: menuLegacyDocs },
    }
  );
