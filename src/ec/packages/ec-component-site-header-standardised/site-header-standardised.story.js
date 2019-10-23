import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';

import { englishData, frenchData } from './demo/data';

import siteHeaderStandardisedDocs from './README.md';
import siteHeaderStandardised from './site-header-standardised.html.twig';

storiesOf('Components/Site Headers/Standardised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      englishData.logo.src = englishBanner;
      return siteHeaderStandardised(englishData);
    },
    {
      notes: { markdown: siteHeaderStandardisedDocs },
    }
  )
  .add(
    'logged in',
    () => {
      englishData.logged = true;
      englishData.logo.src = englishBanner;
      return siteHeaderStandardised(englishData);
    },
    {
      notes: { markdown: siteHeaderStandardisedDocs },
    }
  )
  .add(
    'translated',
    () => {
      frenchData.logo.src = frenchBanner;
      return siteHeaderStandardised(frenchData);
    },
    {
      notes: { markdown: siteHeaderStandardisedDocs },
    }
  );
