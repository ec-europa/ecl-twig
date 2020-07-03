import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataWithTranslation from './demo/data--with-translation';
import dataWithoutTranslation from './demo/data--without-translation';

import file from './ecl-file.html.twig';
import notes from './README.md';

const prepareFile = data => {
  data.title = text('title', data.title, tabLabels.required);
  data.language = text('language', data.language, tabLabels.required);
  data.meta = text('meta', data.meta, tabLabels.required);
  data.icon.path = optionsKnob(
    'icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.download.link.label = text(
    'download.link.label',
    data.download.link.label,
    tabLabels.required
  );
  data.download.icon.path = optionsKnob(
    'download.icon.path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );

  if (data.translation) {
    data.translation.description = text(
      'translation.description',
      data.translation.description,
      tabLabels.optional
    );
    data.translation.toggle.label = text(
      'translation.toggle.label',
      data.translation.toggle.label,
      tabLabels.required
    );
    data.translation.toggle.icon.path = optionsKnob(
      'translation.toggle.icon.path',
      { current: defaultSprite, 'no path': '' },
      defaultSprite,
      { display: 'inline-radio' },
      tabLabels.required
    );

    data.translation.items.forEach((item, i) => {
      data.translation.items[i].title = text(
        `data.translation.items[${i}].title`,
        data.translation.items[i].title,
        tabLabels.required
      );
      data.translation.items[i].meta = text(
        `data.translation.items[${i}].meta`,
        data.translation.items[i].meta,
        tabLabels.required
      );
      data.translation.items[i].lang = text(
        `data.translation.items[${i}].lang`,
        data.translation.items[i].lang,
        tabLabels.required
      );
      data.translation.items[i].download.link.label = text(
        `data.translation.items[${i}].download.link.label`,
        data.translation.items[i].download.link.label,
        tabLabels.required
      );
      data.translation.items[i].download.link.path = text(
        `data.translation.items[${i}].download.link.path`,
        data.translation.items[i].download.link.path,
        tabLabels.required
      );
      data.translation.items[i].download.icon.path = optionsKnob(
        `data.translation.items[${i}].download.icon.path`,
        { current: defaultSprite, 'no path': '' },
        defaultSprite,
        { display: 'inline-radio' },
        tabLabels.required
      );
    });
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/File',
  decorators: [withNotes, withCode, withKnobs],
};

export const WithoutTranslation = () =>
  file(prepareFile(dataWithoutTranslation));

WithoutTranslation.story = {
  name: 'without translation',

  parameters: {
    notes: { markdown: notes, json: dataWithoutTranslation },
  },
};

export const WithTranslation = () => file(prepareFile(dataWithTranslation));

WithTranslation.story = {
  name: 'with translation',

  parameters: {
    notes: { markdown: notes, json: dataWithTranslation },
  },
};
