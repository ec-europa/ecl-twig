import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import logoPath from '@ecl/ec-resources-logo/logo--mute.svg';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import { dataSplash, dataOverlay } from './demo/data';
import splashDocs from './docs/splash.md';
import overlayDocs from './docs/overlay.md';

import languageListSplash from './ecl-language-list-splash.html.twig';
import languageListOverlay from './ecl-language-list-overlay.html.twig';

storiesOf('Components/Language list', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'splash',
    () =>
      languageListSplash({
        items: dataSplash.items,
        overlay: false,
        icon_path: iconPath,
        logo: {
          alt: dataSplash.logoAlt,
          path: logoPath,
        },
      }),
    {
      notes: { markdown: splashDocs, json: dataSplash },
    }
  )
  .add(
    'overlay',
    () =>
      languageListOverlay({
        items: dataOverlay.items,
        overlay: true,
        icon_path: iconPath,
        close_label: dataOverlay.closeLabel,
        title: dataOverlay.title,
      }),
    {
      notes: { markdown: overlayDocs, json: dataOverlay },
    }
  );
