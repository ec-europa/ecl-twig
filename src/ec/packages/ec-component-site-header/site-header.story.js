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

import siteHeader from './ecl-site-header.html.twig';
import notes from './README.md';

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
  const btnElement = document.querySelector('.ecl-site-header__selector');
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

storiesOf('Components/deprecated/Site Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'ECL < 2.12 - default',
    () =>
      siteHeader(
        merge(englishData, {
          logo: {
            src: englishBanner,
          },
          icon_file_path: defaultSprite,
        }),
        button(btnLabel, btnHandler)
      ),
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'ECL < 2.12 - translated',
    () =>
      siteHeader(
        merge(frenchData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
        }),
        button(btnLabel, btnHandler)
      ),
    {
      notes: { markdown: notes, json: frenchData },
    }
  );
