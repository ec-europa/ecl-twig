import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';
import siteHeaderCore from './ecl-site-header-core.html.twig';
import { englishData, frenchData } from './demo/data';
import notes from './README.md';

frenchData.icon_file_path = defaultSprite;
frenchData.logo.src = frenchBanner;
englishData.icon_file_path = defaultSprite;
englishData.logo.src = englishBanner;

storiesOf('Components/Site Headers/Core', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      englishData.logged = false;
      return siteHeaderCore(englishData);
    },
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'logged in',
    () => {
      englishData.logged = true;
      return siteHeaderCore(englishData);
    },
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'translated',
    () => {
      return siteHeaderCore(frenchData);
    },
    {
      notes: { markdown: notes, json: frenchData },
    }
  );
