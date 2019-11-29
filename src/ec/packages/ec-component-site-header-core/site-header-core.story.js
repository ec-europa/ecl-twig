import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';
import siteHeaderCore from './ecl-site-header-core.html.twig';
import englishData from './demo/data--en';
import frenchData from './demo/data--fr';
import notes from './README.md';

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
    () =>
      siteHeaderCore(
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
      siteHeaderCore(
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
