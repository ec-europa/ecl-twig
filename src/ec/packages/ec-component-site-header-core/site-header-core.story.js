import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';

import { englishData, frenchData } from './demo/data';

import siteHeaderCoreDocs from './README.md';
import siteHeaderCore from '@ecl-twig/site-header-core.html.twig';

storiesOf('Components/Site Headers/Core', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      englishData.icon_file_path = defaultSprite;
      englishData.logo.src = englishBanner;
      return siteHeaderCore(englishData);
    },
    {
      notes: { markdown: siteHeaderCoreDocs },
    }
  )
  .add(
    'translated',
    () => {
      frenchData.icon_file_path = defaultSprite;
      frenchData.logo.src = frenchBanner;
      return siteHeaderCore(frenchData);
    },
    {
      notes: { markdown: siteHeaderCoreDocs },
    }
  );
