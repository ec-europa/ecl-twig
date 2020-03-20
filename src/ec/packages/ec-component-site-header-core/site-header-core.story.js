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
  data.logged = boolean('logged', data.logged, buttonLabels.states);
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
  getLogoKnobs(data);
  // Login box and login toggle knobs.
  getLoginKnobs(data);
  // Language selector knobs.
  getLanguageSelectorKnobs(data);
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
  getSearchFormKnobs(data);
  // Language selector overlay.
  data.language_selector.overlay = object(
    'language_selector.overlay',
    data.language_selector.overlay,
    buttonLabels.required
  );
  // Extra classes and extra attributes.
  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Site Headers/Core', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      button(btnLabel, enBtnHandler, buttonLabels.cases);
      const dataStory = prepareSiteHeaderCore(enData, 'en');

      return siteHeaderCore(dataStory);
    },
    {
      notes: { markdown: notes, json: enData },
    }
  )
  .add(
    'logged in',
    () => {
      enData.logged = true;
      button(btnLabel, enBtnHandler, buttonLabels.cases);
      const dataStory = prepareSiteHeaderCore(enData, 'en');

      return siteHeaderCore(dataStory);
    },
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'translated',
    () => {
      button(btnLabel, frBtnHandler, buttonLabels.cases);
      const dataStory = prepareSiteHeaderCore(frData, 'en');

      return siteHeaderCore(dataStory);
    },
    {
      notes: { markdown: notes, json: frData },
    }
  );
