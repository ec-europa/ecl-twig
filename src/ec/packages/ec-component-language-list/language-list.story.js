import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import logo from '@ecl/ec-resources-logo/logo--mute.svg';

import { common, items, splash } from './demo/data';

import languageList from './language-list.html.twig';

storiesOf('Components/Language list', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('splash', () =>
    languageList({
      items,
      overlay: splash.overlay,
      icon_path: common.iconPath,
      logo: {
        alt: splash.logo_alt,
        path: logo,
      },
    })
  );
