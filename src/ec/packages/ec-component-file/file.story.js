// eslint-disable-line no-param-reassign
import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import { dataWithTranslation, dataWithoutTranslation } from './demo/data';

import fileDocs from './docs/file.md';
import file from './file.html.twig';

// Add icon path
dataWithTranslation.icon.path = defaultSprite;
dataWithTranslation.download.icon.path = defaultSprite;
dataWithTranslation.translation.toggle.icon.path = defaultSprite;
dataWithTranslation.translation.items[0].download.icon = {
  path: defaultSprite,
};
dataWithTranslation.translation.items[1].download.icon = {
  path: defaultSprite,
};
dataWithTranslation.translation.items[2].download.icon = {
  path: defaultSprite,
};

dataWithoutTranslation.icon.path = defaultSprite;
dataWithoutTranslation.download.icon.path = defaultSprite;

storiesOf('Components/File', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('without translation', () => file(dataWithoutTranslation), {
    notes: { markdown: fileDocs },
  })
  .add(
    'with translation',
    () => {
      const html = file(dataWithTranslation);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var fileElement = document.querySelector("[data-ecl-file]");
      var file = new ECL.FileDownload(fileElement);
      file.init();
      `;
      demo.appendChild(scriptElement);

      return demo;
    },
    {
      notes: { markdown: fileDocs },
    }
  );
