/* eslint-disable no-param-reassign */
import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import logo from '@ecl/ec-resources-logo/logo--en.svg';
import siteHeaderHarmonised from './ecl-site-header-harmonised.html.twig';
import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';
import dataGroup3 from './demo/data--group3';
import notes from './README.md';

// Toggler function.
const toggler = element => {
  element.hidden = !element.hidden;
};
// Show/hide buttons for the language switcher.
const btnLabel = 'Hide/Show the language switcher';
const btnHandler = () => {
  const btnElement = document.querySelector(
    '.ecl-site-header-harmonised__language-selector'
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
    '.ecl-site-header-harmonised__login-container'
  );
  toggler(btnElement);
  // Prevent the story to be reloaded.
  return false;
};

storiesOf('Components/Site Headers/Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'group 1',
    () =>
      siteHeaderHarmonised(
        merge(dataGroup1, {
          logo: {
            src: logo,
          },
          logged: true,
          icon_file_path: defaultSprite,
        }),
        button(btnLabel, btnHandler),
        button(btnLoginLabel, btnLoginHandler)
      ),
    {
      notes: { markdown: notes, json: dataGroup1 },
    }
  )
  .add(
    'group 2',
    () =>
      siteHeaderHarmonised(
        merge(dataGroup2, {
          logo: {
            src: logo,
          },
          icon_file_path: defaultSprite,
        }),
        button(btnLabel, btnHandler)
      ),
    {
      notes: { markdown: notes, json: dataGroup2 },
    }
  )
  .add('group 3', () => siteHeaderHarmonised(dataGroup3), {
    notes: { markdown: notes, json: dataGroup3 },
  });
