import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import logoPath from '@ecl/ec-resources-logo/logo--mute.svg';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import { dataSplash, dataOverlay } from './demo/data';
import splashDocs from './docs/splash.md';
import overlayDocs from './docs/overlay.md';

import languageList from './language-list.html.twig';

storiesOf('Components/Language list', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'splash',
    () =>
      languageList({
        items: dataSplash.items,
        overlay: false,
        icon_path: iconPath,
        logo: {
          alt: dataSplash.logoAlt,
          path: logoPath,
        },
      }),
    {
      notes: { markdown: splashDocs },
    }
  )
  .add(
    'overlay',
    () =>
      languageList({
        items: dataOverlay.items,
        overlay: true,
        icon_path: iconPath,
        close_label: dataOverlay.closeLabel,
        title: dataOverlay.title,
      }),
    {
      notes: { markdown: overlayDocs },
    }
  );
