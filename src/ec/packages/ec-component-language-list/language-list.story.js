import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import logoPath from '@ecl/ec-resources-logo/logo--mute.svg';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import dataSplash from './demo/data--splash';
import dataOverlay from './demo/data--overlay';

import languageListMain from './ecl-language-list-main.html.twig';

import notes from './README.md';

storiesOf('Components/Language list', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'splash',
    () =>
      languageListMain(
        merge(dataSplash, {
          icon_path: text('Icon path', iconPath),
          overlay: boolean('Overlay', false),
          title: text('Title', dataOverlay.title),
          close_label: text('Close label', dataOverlay.close_label),
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
      languageListMain(
        merge(dataOverlay, {
          title: text('Title', dataOverlay.title),
          close_label: text('Close label', dataOverlay.close_label),
          icon_path: text('Icon path', iconPath),
        })
      ),
    {
      notes: { markdown: notes, json: dataOverlay },
    }
  );
