import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

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
    tabLabels.required
  );
  if (data.logo) {
    data.logo.path = select(
      'logo.path',
      [logoPath],
      logoPath,
      tabLabels.required
    );
    data.logo.alt = select(
      'logo.alt',
      [data.logo.alt],
      data.logo.alt,
      tabLabels.required
    );
  }
  if (data.overlay) {
    data.overlay = select(
      'overlay',
      [data.overlay],
      data.overlay,
      tabLabels.required
    );
  }
  if (data.close_label) {
    data.close_label = text(
      'close_label',
      data.close_label,
      tabLabels.required
    );
  }
  if (data.title) {
    data.title = text('title', data.title, tabLabels.required);
  }

  data.items.forEach((item, i) => {
    if (data.items[i].label && data.items[i].path) {
      item.label = select(
        `items[${i}].label`,
        ['none', item.label],
        item.label,
        tabLabels.required
      );
      item.path = text(`items[${i}].path`, item.path, tabLabels.required);
      item.lang = select(
        `items[${i}].lang`,
        [item.lang],
        item.lang,
        tabLabels.required
      );
    }

    if (data.items[i].label === 'none') {
      data.items[i].label = '';
      data.items[i].path = '';
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

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
