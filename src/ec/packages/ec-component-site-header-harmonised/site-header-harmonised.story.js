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
const dataG3 = { ...dataGroup3 };

// Show/hide Partnership logo.
const btnLogoLabel = 'With or without the patnership logo';
const btnLogoHandler = () => {
  if (dataG3.logo) {
    delete dataG3.logo;
  } else {
    dataG3.logo = dataGroup3.logo;
  }
};
// Show/hide buttons for the language switcher.
const btnLangLabel = 'With or without the language switcher';
const btnLangG1Handler = () => {
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
// Show/hide buttons for the menu.
const btnMenuLabel = 'With or without the menu';
const btnMenuG1Handler = () => {
  if (dataG1.menu) {
    delete dataG1.menu;
  } else {
    dataG1.menu = dataGroup1.menu;
  }
};
const btnMenuG2Handler = () => {
  if (dataG2.menu) {
    delete dataG2.menu;
  } else {
    dataG2.menu = dataGroup2.menu;
  }
};
// Show/hide buttons for the class.
const btnClassHandler = () => {
  if (dataG1.banner_top) {
    delete dataG1.banner_top;
  } else {
    dataG1.banner_top = dataGroup1.banner_top;
  }
};
// Show/hide buttons for the search form.
const btnSearchLabel = 'With or without the search form';
const btnSearchG1Handler = () => {
  if (dataG1.search_form) {
    delete dataG1.search_form;
    delete dataG1.search_toggle;
  } else {
    dataG1.search_form = dataGroup1.search_form;
    dataG1.search_toggle = dataGroup1.search_toggle;
  }
};
const btnSearchG2Handler = () => {
  if (dataG2.search_form) {
    delete dataG2.search_form;
    delete dataG2.search_toggle;
  } else {
    dataG1.search_form = dataGroup2.search_form;
    dataG1.search_toggle = dataGroup2.search_toggle;
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
  if (data.login_box) {
    data.logged = boolean('logged', data.logged, buttonLabels.states);
  }
  if (data.group !== 'group3') {
    data.icon_file_path = select(
      'icon_file_path',
      [defaultSprite],
      defaultSprite,
      buttonLabels.required
    );
  }
  data.site_name = text('site_name', data.site_name, buttonLabels.required);
  if (data.group) {
    data.group = select(
      'group',
      [data.group],
      data.group,
      buttonLabels.required
    );
  } else {
    data.group = select('group', ['group1'], 'group1', buttonLabels.optional);
  }
  if (data.banner_top && data.banner_top.link) {
    data.banner_top.link.label = text(
      'banner_top.link.label',
      data.banner_top.link.label,
      buttonLabels.optional
    );
    data.banner_top.link.path = text(
      'banner_top.link.path',
      data.banner_top.link.path,
      buttonLabels.optional
    );
  }
  // Logo knobs.
  if (data.logo) {
    let label = buttonLabels.required;
    let logoDefault = logo;
    let required = true;
    if (data.group === 'group3') {
      label = buttonLabels.optional;
      logoDefault = data.logo.src;
      required = false;
    }
    data.logo.src = select('logo.src', [logoDefault], logoDefault, label);

    getLogoKnobs(data, required);
  }
  // Login box and login toggle knobs.
  if (data.login_box) {
    data.logged = boolean('logged', data.logged, buttonLabels.states);
    getLoginKnobs(data, false);
  }
  // Search toggle.
  if (data.search_toggle && data.search_toggle.label) {
    data.search_toggle.label = text(
      'search_toggle.label',
      data.search_toggle.label,
      buttonLabels.optional
    );
    data.search_toggle.href = text(
      'search_toggle.href',
      data.search_toggle.href,
      buttonLabels.optional
    );
  }
  // Search form.
  if (data.search_form) {
    getSearchFormKnobs(data, false);
  }
  // Language selector knobs.
  if (data.language_selector) {
    getLanguageSelectorKnobs(data, false);
    // Language selector overlay.
    data.language_selector.overlay = object(
      'language_selector.overlay',
      data.language_selector.overlay,
      buttonLabels.optional
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
      button(btnLangLabel, btnLangG1Handler, buttonLabels.cases);
      button(btnLoginLabel, btnLoginHandler, buttonLabels.cases);
      button(btnMenuLabel, btnMenuG1Handler, buttonLabels.cases);
      button(btnSearchLabel, btnSearchG1Handler, buttonLabels.cases);
      button(
        'With or without the Class name',
        btnClassHandler,
        buttonLabels.cases
      );
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
      button(btnSearchLabel, btnSearchG2Handler, buttonLabels.cases);
      button(btnMenuLabel, btnMenuG2Handler, buttonLabels.cases);
      const dataStory = prepareSiteHeaderHarmonised(dataG2);

      return siteHeaderHarmonised(dataStory);
    },
    {
      notes: { markdown: notes, json: dataG2 },
    }
  )
  .add(
    'group 3',
    () => {
      button(btnLogoLabel, btnLogoHandler, buttonLabels.cases);
      const dataStory = prepareSiteHeaderHarmonised(dataG3);

      return siteHeaderHarmonised(dataStory);
    },
    {
      notes: { markdown: notes, json: dataGroup3 },
    }
  );
