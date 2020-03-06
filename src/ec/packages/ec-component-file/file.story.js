/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';

import file from './ecl-file.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

const prepareFile = data => {
  data.title = text('title', data.title, requiredGroupId);
  data.language = text('language', data.language, requiredGroupId);
  data.meta = text('meta', data.meta, requiredGroupId);
  data.icon.path = select(
    'icon.path',
    [defaultSprite],
    defaultSprite,
    requiredGroupId
  );
  data.download.link.label = text(
    'download.link.label',
    data.download.link.label,
    requiredGroupId
  );
  data.download.icon.path = select(
    'download.icon.path',
    [defaultSprite],
    defaultSprite,
    requiredGroupId
  );
  data.extra_classes = text(
    'extra_classes (comma separated)',
    '',
    optionalGroupId
  );
  data.extra_attributes = object(
    'extra_attributes',
    { name: '', value: '' },
    optionalGroupId
  );
  if (data.translation) {
    data.translation.description = text(
      'translation.description',
      data.translation.description,
      optionalGroupId
    );
    data.translation.toggle.label = text(
      'translation.toggle.label',
      data.translation.toggle.label,
      requiredGroupId
    );
    data.translation.toggle.icon.path = select(
      'translation.toggle.icon.path',
      [defaultSprite],
      defaultSprite,
      requiredGroupId
    );

    data.translation.items.forEach((item, i) => {
      data.translation.items[i].download.icon.path = select(
        `data.translation.items[${i}].download.icon.path`,
        [defaultSprite],
        defaultSprite,
        requiredGroupId
      );
    });
  }

  return data;
};

storiesOf('Components/File', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'without translation',
    () => {
      const data = prepareFile(dataWithoutTranslation);

      return file(data);
    },
    {
      notes: { markdown: notes, json: dataWithoutTranslation },
    }
  )
  .add(
    'with translation',
    () => {
      const data = prepareFile(dataWithTranslation);

      return file(data);
    },
    {
      notes: { markdown: notes, json: dataWithTranslation },
    }
  );
