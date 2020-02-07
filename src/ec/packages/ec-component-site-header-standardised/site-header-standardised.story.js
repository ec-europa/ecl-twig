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

// Toggler function.
const toggler = element => {
  if (element.hidden) {
    element.hidden = false;
  } else {
    element.hidden = true;
  }
};
// Show/hide buttons for the language switcher.
const btnLabel = 'Hide/Show the language switcher';
const btnHandler = () => {
  const btnElement = document.querySelector(
    '.ecl-site-header-standardised__language-selector'
  );
  if (!btnElement.parentNode.classList.contains('helperdDiv')) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('helperdDiv');
    btnElement.parentNode.insertBefore(wrapper, btnElement);
    wrapper.appendChild(btnElement);
  }
  toggler(btnElement.parentNode);
  // Prevent the story to be reloaded.
  return false;
};
// Show/hide buttons for the login block.
const btnLoginLabel = 'Hide/Show the login block';
const btnLoginHandler = () => {
  const btnElement = document.querySelector(
    '.ecl-site-header-standardised__login-container'
  );
  toggler(btnElement);
  // Prevent the story to be reloaded.
  return false;
};

storiesOf('Components/Site Headers/Standardised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'default',
    () =>
      siteHeaderStandardised(
        merge(englishData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
          logged: false,
        }),
        button(btnLabel, btnHandler),
        button(btnLoginLabel, btnLoginHandler)
      ),
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'logged in',
    () =>
      siteHeaderStandardised(
        merge(englishData, {
          logo: {
            src: englishBanner,
          },
          icon_file_path: defaultSprite,
          logged: true,
        }),
        button(btnLabel, btnHandler),
        button(btnLoginLabel, btnLoginHandler)
      ),
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'translated',
    () =>
      siteHeaderStandardised(
        merge(frenchData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
        }),
        button(btnLabel, btnHandler),
        button(btnLoginLabel, btnLoginHandler)
      ),
    {
      notes: { markdown: notes, json: frenchData },
    }
  );
