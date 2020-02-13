/* eslint-disable no-param-reassign */
import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
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

storiesOf('Components/Site Headers/Standardised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'default',
    () =>
      siteHeaderStandardised(
        merge(enData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
          logged: false,
        }),
        button(btnLangLabel, enBtnLangHandler),
        button(btnLoginLabel, enBtnLoginHandler)
      ),
    {
      notes: { markdown: notes, json: enData },
    }
  )
  .add(
    'logged in',
    () =>
      siteHeaderStandardised(
        merge(enData, {
          logo: {
            src: englishBanner,
          },
          icon_file_path: defaultSprite,
          logged: true,
        }),
        button(btnLangLabel, enBtnLangHandler)
      ),
    {
      notes: { markdown: notes, json: enData },
    }
  )
  .add(
    'translated',
    () =>
      siteHeaderStandardised(
        merge(frData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
        }),
        button(btnLangLabel, frBtnLangHandler),
        button(btnLoginLabel, frBtnLoginHandler)
      ),
    {
      notes: { markdown: notes, json: frData },
    }
  );
