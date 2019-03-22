import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import gallery from './gallery.html.twig';
import notes from './README.md';

import data from './demo/data';

data.items.forEach(item => {
  if (item.icon) {
    item.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  }
});
data.overlay.close.icon.path = defaultSprite;
data.overlay.previous.icon.path = defaultSprite;
data.overlay.next.icon.path = defaultSprite;
data.overlay.download.icon.path = defaultSprite;
data.overlay.share.icon.path = defaultSprite;

storiesOf('Components/Gallery', module)
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
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var galleryElement = document.querySelector("[data-ecl-gallery]");
      var gallery = new ECL.Gallery(galleryElement);
      gallery.init();
      `;
      demo.appendChild(scriptElement);

      return demo;
    },
    {
      notes: { markdown: notes },
    }
  );
