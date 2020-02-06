/* eslint-disable no-param-reassign */
import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';

import file from './ecl-file.html.twig';
import notes from './README.md';

// Add icon path
dataWithTranslation.icon.path = defaultSprite;
dataWithTranslation.download.icon.path = defaultSprite;
dataWithoutTranslation.download.icon.path = defaultSprite;
dataWithTranslation.translation.toggle.icon.path = defaultSprite;
dataWithoutTranslation.icon.path = defaultSprite;
dataWithTranslation.translation.items.forEach(item => {
  item.download.icon = {
    path: defaultSprite,
  };
});

storiesOf('Components/File', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'without translation',
    () =>
      file(
        merge(dataWithoutTranslation, {
          title: text('File title', dataWithoutTranslation.title),
          language: text('Language', dataWithoutTranslation.language),
          meta: text('File meta', dataWithoutTranslation.meta),
          download: {
            link: {
              label: text(
                'Download label',
                dataWithoutTranslation.download.link.label
              ),
            },
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataWithoutTranslation },
    }
  )
  .add(
    'with translation',
    () =>
      file(
        merge(dataWithTranslation, {
          title: text('File title', dataWithTranslation.title),
          language: text('Language', dataWithTranslation.language),
          meta: text('File meta', dataWithTranslation.meta),
          download: {
            link: {
              label: text(
                'Download label',
                dataWithTranslation.download.link.label
              ),
            },
          },
          translation: {
            description: text(
              'Translations info',
              dataWithTranslation.translation.description
            ),
            toggle: {
              label: text(
                'Toggle label',
                dataWithTranslation.translation.toggle.label
              ),
            },
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataWithTranslation },
    }
  );
