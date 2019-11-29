// eslint-disable-line no-param-reassign
import { storiesOf } from '@storybook/html';
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
  .add('without translation', () => file(dataWithoutTranslation), {
    notes: { markdown: notes, json: dataWithoutTranslation },
  })
  .add('with translation', () => file(dataWithTranslation), {
    notes: { markdown: notes, json: dataWithTranslation },
  });
