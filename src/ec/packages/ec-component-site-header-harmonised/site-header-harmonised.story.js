/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import {
  withKnobs,
  button,
  select,
  text,
  boolean,
  object,
} from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  buttonLabels,
  getLogoKnobs,
  getLoginKnobs,
  getLanguageSelectorKnobs,
  getSearchFormKnobs,
} from '@ecl-twig/story-utils';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import logo from '@ecl/ec-resources-logo/logo--en.svg';
import siteHeaderHarmonised from './ecl-site-header-harmonised.html.twig';
import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';
import dataGroup3 from './demo/data--group3';
import notes from './README.md';
// Preserve original data.
const dataG1 = { ...dataGroup1 };
const dataG2 = { ...dataGroup2 };
// Show/hide buttons for the language switcher.
const btnLangLabel = 'With or without the language switcher';
const btnLangHandler = () => {
  if (dataG1.language_selector) {
    delete dataG1.language_selector;
  } else {
    dataG1.language_selector = dataGroup1.language_selector;
  }
};
const btnLangG2Handler = () => {
  if (dataG2.language_selector) {
    delete dataG2.language_selector;
  } else {
    dataG2.language_selector = dataGroup2.language_selector;
  }
};
// Show/hide buttons for the login box.
const btnLoginLabel = 'With or without the login box';
const btnLoginHandler = () => {
  if (dataG1.login_box) {
    delete dataG1.login_box;
  } else {
    dataG1.login_box = dataGroup1.login_box;
  }
};

const prepareSiteHeaderHarmonised = data => {
  data.group = select('group', [data.group], data.group, buttonLabels.required);
  if (data.banner_top && data.banner_top.link) {
    data.banner_top.link.label = text(
      'banner_top.link.label',
      data.banner_top.link.label,
      buttonLabels.required
    );
    data.banner_top.link.path = text(
      'banner_top.link.path',
      data.banner_top.link.path,
      buttonLabels.required
    );
  }
  data.icon_file_path = select(
    'icon_file_path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  let logoDefault = logo;
  if (data.logo.src !== '/logo--en.svg') {
    logoDefault = data.logo.src;
  }
  data.logo.src = select(
    'logo.src',
    [logoDefault],
    logoDefault,
    buttonLabels.required
  );
  // Logo knobs
  getLogoKnobs(data);
  // Login box and login toggle knobs.
  if (data.login_box) {
    data.logged = boolean('logged', data.logged, buttonLabels.states);
    getLoginKnobs(data);
  }
  // Search toggle.
  if (data.search_toggle && data.search_toggle.label) {
    data.search_toggle.label = text(
      'search_toggle.label',
      data.search_toggle.label,
      buttonLabels.required
    );
    data.search_toggle.href = text(
      'search_toggle.href',
      data.search_toggle.href,
      buttonLabels.required
    );
  }
  // Search form.
  if (data.search_form) {
    getSearchFormKnobs(data);
  }
  // Language selector knobs.
  if (data.language_selector) {
    getLanguageSelectorKnobs(data, false);
    // Language selector overlay.
    data.language_selector.overlay = object(
      'language_selector.overlay',
      data.language_selector.overlay,
      buttonLabels.required
    );
  }
  // Extra classes and extra attributes.
  getExtraKnobs(data);
  if (data.menu) {
    // Menu label.
    data.menu_label = text(
      'data.menu_label',
      data.menu_label,
      buttonLabels.optional
    );
    data.menu = object('data.menu', data.menu, buttonLabels.optional);
  }

  return data;
};
storiesOf('Components/Site Headers/Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'group 1',
    () => {
      button(btnLangLabel, btnLangHandler, buttonLabels.cases);
      button(btnLoginLabel, btnLoginHandler, buttonLabels.cases);
      dataG1.logged = true;
      const dataStory = prepareSiteHeaderHarmonised(dataG1);

      return siteHeaderHarmonised(dataStory);
    },
    {
      notes: { markdown: notes, json: dataG1 },
    }
  )
  .add(
    'group 2',
    () => {
      button(btnLangLabel, btnLangG2Handler, buttonLabels.cases);
      const dataStory = prepareSiteHeaderHarmonised(dataG2);

      return siteHeaderHarmonised(dataStory);
    },
    {
      notes: { markdown: notes, json: dataG2 },
    }
  )
  .add(
    'group 3',
    () => siteHeaderHarmonised(prepareSiteHeaderHarmonised(dataGroup3)),
    {
      notes: { markdown: notes, json: dataGroup3 },
    }
  );
