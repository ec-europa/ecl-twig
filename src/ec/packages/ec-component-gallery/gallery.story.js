import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import gallery from './gallery.html.twig';
import notes from './README.md';

import data from './demo/data';

storiesOf('Components/Message', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      const html = gallery(data);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var galleryElement = document.querySelector("[data-ecl-gallery]");
      var gallery = new ECL.Gallery(galleryElement);
      gallery.init();
      `;
      demo.append(scriptElement);

      return demo;
    },
    {
      notes: { markdown: notes },
    }
  );
