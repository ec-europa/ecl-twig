import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import breadcrumbDataSimple from './demo/data-simple';
import breadcrumbDataLong from './demo/data';

import breadcrumbDocs from './README.md';
import breadcrumb from './breadcrumb.html.twig';

breadcrumbDataSimple.icon_file_path = defaultSprite;
breadcrumbDataLong.icon_file_path = defaultSprite;

storiesOf('Components/Breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('simple', () => breadcrumb(breadcrumbDataSimple), {
    notes: { markdown: breadcrumbDocs },
  })
  .add(
    'long',
    () => {
      const html = breadcrumb(breadcrumbDataLong);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var breadcrumbElement = document.querySelector("[data-ecl-breadcrumb]");
      var breadcrumb = new ECL.Breadcrumb(breadcrumbElement);
      breadcrumb.init();
      `;
      demo.appendChild(scriptElement);

      return demo;
    },
    {
      notes: { markdown: breadcrumbDocs },
    }
  );
