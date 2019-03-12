// eslint-disable-line no-param-reassign
import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';

import fileDocs from './docs/file.md';
import file from './file.html.twig';

// Add icon path
dataWithTranslation.icon.path = defaultSprite;
dataWithTranslation.download.icon.path = defaultSprite;
dataWithTranslation.translation.toggle.icon.path = defaultSprite;
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
      demo.append(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `
      var fileElement = document.querySelector("[data-ecl-file]");
      var file = new ECL.FileDownload(fileElement);
      file.init();
      `;
      demo.append(scriptElement);

      return demo;
    },
    {
      notes: { markdown: fileDocs },
    }
  );
