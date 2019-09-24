import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';

import { englishData, frenchData } from './demo/data';

import siteHeaderDocs from './README.md';
import siteHeader from './site-header.html.twig';

storiesOf('Components/Site Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      englishData.icon_file_path = defaultSprite;
      englishData.logo.src = englishBanner;

      const html = siteHeader(englishData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `ECL.autoInit();`;
      demo.appendChild(scriptElement);

      return demo;
    },
    {
      notes: { markdown: siteHeaderDocs },
    }
  )
  .add(
    'translated',
    () => {
      frenchData.icon_file_path = defaultSprite;
      frenchData.logo.src = frenchBanner;

      const html = siteHeader(frenchData);

      const demo = document.createDocumentFragment();

      const htmlElement = document.createElement('div');
      htmlElement.innerHTML = html.trim();
      demo.appendChild(htmlElement.firstChild);

      const scriptElement = document.createElement('script');
      scriptElement.innerHTML = `ECL.autoInit();`;
      demo.appendChild(scriptElement);

      return demo;
    },
    {
      notes: { markdown: siteHeaderDocs },
    }
  );
