// eslint-disable-line no-param-reassign
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text } from '@storybook/addon-knobs';
import merge from 'deepmerge';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';

import file from './ecl-file.html.twig';
import notes from './README.md';

// Add icon path
dataWithTranslation.icon.path = defaultSprite;
dataWithTranslation.download.icon.path = defaultSprite;
dataWithTranslation.translation.toggle.icon.path = defaultSprite;
dataWithTranslation.translation.items[0].download.icon = {
  path: defaultSprite,
};
dataWithTranslation.translation.items[1].download.icon = {
  path: defaultSprite,
};
dataWithTranslation.translation.items[2].download.icon = {
  path: defaultSprite,
};

dataWithoutTranslation.icon.path = defaultSprite;
dataWithoutTranslation.download.icon.path = defaultSprite;

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
          download: {
            link: {
              label: text(
                'Download label',
                dataWithTranslation.download.link.label
              ),
            },
          },
          translation: {
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
