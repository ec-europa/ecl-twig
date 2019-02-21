import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import logo from '@ecl/ec-resources-logo/logo--mute.svg';

import { common, items, splash, overlay } from './demo/data';
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
        items,
        overlay: splash.overlay,
        logo: {
          alt: splash.logoAlt,
          path: logo,
        },
        icon_path: common.iconPath,
      }),
    {
      notes: { markdown: splashDocs },
    }
  )
  .add(
    'overlay',
    () =>
      languageList({
        items,
        overlay: overlay.overlay,
        close_label: overlay.closeLabel,
        title: overlay.title,
        icon_path: common.iconPath,
      }),
    {
      notes: { markdown: overlayDocs },
    }
  );
