import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import logoPath from '@ecl/ec-resources-logo/logo--mute.svg';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import dataSplash from './demo/data--splash';
import dataOverlay from './demo/data--overlay';

import languageListSplash from './ecl-language-list-splash.html.twig';
import languageListOverlay from './ecl-language-list-overlay.html.twig';
import notes from './README.md';

storiesOf('Components/Language list', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'splash',
    () =>
      languageListSplash(
        merge(dataSplash, {
          icon_path: iconPath,
          logo: {
            path: logoPath,
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataSplash },
    }
  )
  .add(
    'overlay',
    () =>
      languageListOverlay(
        merge(dataOverlay, {
          icon_path: iconPath,
        })
      ),
    {
      notes: { markdown: notes, json: dataOverlay },
    }
  );
