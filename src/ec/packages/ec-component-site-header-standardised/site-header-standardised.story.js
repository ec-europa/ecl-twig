import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';

import englishData from './demo/data--en';
import frenchData from './demo/data--fr';

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
    () =>
      siteHeaderStandardised(
        merge(englishData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
          logged: false,
        })
      ),
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'logged in',
    () =>
      siteHeaderStandardised(
        merge(englishData, {
          logo: {
            src: englishBanner,
          },
          icon_file_path: defaultSprite,
          logged: true,
        })
      ),
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'translated',
    () =>
      siteHeaderStandardised(
        merge(frenchData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
        })
      ),
    {
      notes: { markdown: notes, json: frenchData },
    }
  );
