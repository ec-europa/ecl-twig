/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';

import logoPath from '@ecl/ec-resources-logo/logo--mute.svg';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataSplash from './demo/data--splash';
import dataOverlay from './demo/data--overlay';
import languageList from './ecl-language-list.html.twig';
import notes from './README.md';

const prepareLanguageList = data => {
  data.icon_path = select(
    'icon_path',
    [iconPath],
    iconPath,
    buttonLabels.required
  );
  if (data.logo) {
    data.logo.path = select(
      'logo.path',
      [logoPath],
      logoPath,
      buttonLabels.required
    );
    data.logo.alt = select(
      'logo.alt',
      [data.logo.alt],
      data.logo.alt,
      buttonLabels.required
    );
  }
  if (data.overlay) {
    data.overlay = select(
      'overlay',
      [data.overlay],
      data.overlay,
      buttonLabels.required
    );
  }
  if (data.close_label) {
    data.close_label = text(
      'close_label',
      data.close_label,
      buttonLabels.required
    );
  }
  if (data.title) {
    data.title = text('title', data.title, buttonLabels.required);
  }

  data.items.forEach((item, i) => {
    if (data.items[i].label && data.items[i].path) {
      item.label = select(
        `items[${i}].label`,
        ['none', item.label],
        item.label,
        buttonLabels.required
      );
      item.path = text(`items[${i}].path`, item.path, buttonLabels.required);
      item.lang = select(
        `items[${i}].lang`,
        [item.lang],
        item.lang,
        buttonLabels.required
      );
    }

    if (data.items[i].label === 'none') {
      data.items[i].label = '';
      data.items[i].path = '';
    }
  });

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Language list', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('splash', () => languageList(prepareLanguageList(dataSplash)), {
    notes: { markdown: notes, json: dataSplash },
  })
  .add('overlay', () => languageList(prepareLanguageList(dataOverlay)), {
    notes: { markdown: notes, json: dataOverlay },
  });
