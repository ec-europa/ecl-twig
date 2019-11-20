import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';

import { englishData, frenchData } from './demo/data';

import siteHeaderDocs from './README.md';
import siteHeader from './ecl-site-header.html.twig';

storiesOf('Components/deprecated/Site Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'ECL < 2.12 - default',
    () => {
      englishData.icon_file_path = defaultSprite;
      englishData.logo.src = englishBanner;
      return siteHeader(englishData);
    },
    {
      notes: { markdown: siteHeaderDocs, json: englishData },
    }
  )
  .add(
    'ECL < 2.12 - translated',
    () => {
      frenchData.icon_file_path = defaultSprite;
      frenchData.logo.src = frenchBanner;
      return siteHeader(frenchData);
    },
    {
      notes: { markdown: siteHeaderDocs, json: frenchData },
    }
  );
