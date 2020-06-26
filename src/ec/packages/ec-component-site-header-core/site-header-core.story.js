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
  tabLabels,
  getLogoKnobs,
  getLoginKnobs,
  getLanguageSelectorKnobs,
  getSearchFormKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import englishBanner from '@ecl/ec-resources-logo/logo--en.svg';
import frenchBanner from '@ecl/ec-resources-logo/logo--fr.svg';
import siteHeaderCore from './ecl-site-header-core.html.twig';
import englishData from './demo/data--en';
import frenchData from './demo/data--fr';
import notes from './README.md';

const enData = { ...englishData };
const frData = { ...frenchData };
// Show/hide buttons for the language switcher.
const btnLabel = 'With or without the login box';
const enBtnHandler = () => {
  if (enData.login_box) {
    delete enData.login_box;
  } else {
    enData.login_box = englishData.login_box;
  }
};
const frBtnHandler = () => {
  if (frData.login_box) {
    delete frData.login_box;
  } else {
    frData.login_box = frenchData.login_box;
  }
};

const prepareSiteHeaderCore = (data, lang) => {
  data.logged = boolean('logged', data.logged, tabLabels.states);
  data.icon_file_path = select(
    'icon_file_path',
    ['none', defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  if (data.icon_file_path === 'none') {
    data.icon_file_path = '';
  }
  if (lang === 'en') {
    data.logo.src = select(
      'logo.src',
      ['none', englishBanner],
      englishBanner,
      tabLabels.required
    );
  } else {
    data.logo.src = select(
      'logo.src',
      ['none', frenchBanner],
      frenchBanner,
      tabLabels.required
    );
  }
  if (data.logo.src === 'none') {
    data.logo.src = '';
  } else {
    // Logo knobs
    getLogoKnobs(data, true);
  }
  // Login box and login toggle knobs.
  getLoginKnobs(data, true);
  // Language selector knobs.
  getLanguageSelectorKnobs(data, true);
  // Search toggle.
  data.search_toggle.label = text(
    'search_toggle.label',
    data.search_toggle.label,
    tabLabels.required
  );
  data.search_toggle.href = text(
    'search_toggle.href',
    data.search_toggle.href,
    tabLabels.required
  );
  // Search form.
  getSearchFormKnobs(data, true);
  // Language selector overlay.
  data.language_selector.overlay = object(
    'language_selector.overlay',
    data.language_selector.overlay,
    tabLabels.required
  );
  // Extra classes and extra attributes.
  getExtraKnobs(data);
  // Compliance.
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Site Headers/Core',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => {
  button(btnLabel, enBtnHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderCore(enData, 'en');

  return siteHeaderCore(dataStory);
};

Default.story = {
  name: 'default',

  parameters: {
    notes: { markdown: notes, json: enData },
  },
};

export const LoggedIn = () => {
  enData.logged = true;
  button(btnLabel, enBtnHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderCore(enData, 'en');

  return siteHeaderCore(dataStory);
};

LoggedIn.story = {
  name: 'logged in',

  parameters: {
    notes: { markdown: notes, json: englishData },
  },
};

export const Translated = () => {
  button(btnLabel, frBtnHandler, tabLabels.cases);
  const dataStory = prepareSiteHeaderCore(frData, 'fr');

  return siteHeaderCore(dataStory);
};

Translated.story = {
  name: 'translated',

  parameters: {
    notes: { markdown: notes, json: frData },
  },
};
