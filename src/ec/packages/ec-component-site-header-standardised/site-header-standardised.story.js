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
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  buttonLabels,
  getLogoKnobs,
  getLoginKnobs,
  getLanguageSelectorKnobs,
  getSearchFormKnobs,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';

import englishData from './demo/data--en';
import frenchData from './demo/data--fr';

import siteHeaderStandardised from './ecl-site-header-standardised.html.twig';
import notes from './README.md';

frenchData.icon_file_path = defaultSprite;
frenchData.logo.src = frenchBanner;
englishData.icon_file_path = defaultSprite;
englishData.logo.src = englishBanner;

const enData = { ...englishData };
const frData = { ...frenchData };
// Show/hide buttons for the login box.
const btnLoginLabel = 'With or without the login box';
const enBtnLoginHandler = () => {
  if (enData.login_box) {
    delete enData.login_box;
  } else {
    enData.login_box = englishData.login_box;
  }
};
const frBtnLoginHandler = () => {
  if (frData.login_box) {
    delete frData.login_box;
  } else {
    frData.login_box = frenchData.login_box;
  }
};
// Show/hide button for the language switcher
const btnLangLabel = 'With or without the language switcher';
const enBtnLangHandler = () => {
  if (enData.language_selector) {
    delete enData.language_selector;
  } else {
    enData.language_selector = englishData.language_selector;
  }
};
const frBtnLangHandler = () => {
  if (frData.language_selector) {
    delete frData.language_selector;
  } else {
    frData.language_selector = frenchData.language_selector;
  }
};

const prepareSiteHeaderStandardised = (data, lang) => {
  data.logged = boolean('logged', data.logged, buttonLabels.states);
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
  data.icon_file_path = select(
    'icon_file_path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  if (lang === 'en') {
    data.logo.src = select(
      'logo.src',
      [englishBanner],
      englishBanner,
      buttonLabels.required
    );
  } else {
    data.logo.src = select(
      'logo.src',
      [frenchBanner],
      frenchBanner,
      buttonLabels.required
    );
  }
  // Logo knobs
  getLogoKnobs(data, true);
  // Login box and login toggle knobs.
  getLoginKnobs(data, true);
  // Search toggle.
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
  // Search form.
  getSearchFormKnobs(data, true);
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
  // Menu label.
  data.menu_label = text(
    'data.menu_label',
    data.menu_label,
    buttonLabels.optional
  );
  // Extra classes and extra attributes.
  getExtraKnobs(data);
  // Menu.
  data.menu = object('data.menu', data.menu, buttonLabels.optional);

  return data;
};

storiesOf('Components/Site Headers/Standardised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      button(btnLangLabel, enBtnLangHandler, buttonLabels.cases);
      button(btnLoginLabel, enBtnLoginHandler, buttonLabels.cases);
      const dataStory = prepareSiteHeaderStandardised(enData);

      return siteHeaderStandardised(dataStory);
    },
    {
      notes: { markdown: notes, json: enData },
    }
  )
  .add(
    'logged in',
    () => {
      button(btnLangLabel, enBtnLangHandler, buttonLabels.cases);
      enData.logged = true;
      const dataStory = prepareSiteHeaderStandardised(enData);

      return siteHeaderStandardised(dataStory);
    },
    {
      notes: { markdown: notes, json: enData },
    }
  )
  .add(
    'translated',
    () => {
      button(btnLangLabel, frBtnLangHandler, buttonLabels.cases);
      button(btnLoginLabel, frBtnLoginHandler, buttonLabels.cases);
      const dataStory = prepareSiteHeaderStandardised(frData);

      return siteHeaderStandardised(dataStory);
    },
    {
      notes: { markdown: notes, json: frData },
    }
  );
