import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';

import { englishData, frenchData } from './demo/data';

import siteHeaderStandardised from './ecl-site-header-standardised.html.twig';
import notes from './README.md';

frenchData.icon_file_path = defaultSprite;
frenchData.logo.src = frenchBanner;
englishData.icon_file_path = defaultSprite;
englishData.logo.src = englishBanner;

storiesOf('Components/Site Headers/Standardised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      englishData.logged = false;
      return siteHeaderStandardised(englishData);
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'logged in',
    () => {
      englishData.logged = true;
      return siteHeaderStandardised(englishData);
    },
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'translated',
    () => {
      return siteHeaderStandardised(frenchData);
    },
    {
      notes: { markdown: notes, json: frenchData },
    }
  );
