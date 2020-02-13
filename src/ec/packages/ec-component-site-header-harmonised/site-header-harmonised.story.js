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

storiesOf('Components/Site Headers/Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'group 1',
    () =>
      siteHeaderHarmonised(
        merge(dataG1, {
          logo: {
            src: logo,
          },
          logged: true,
          icon_file_path: defaultSprite,
        }),
        button(btnLangLabel, btnLangHandler),
        button(btnLoginLabel, btnLoginHandler)
      ),
    {
      notes: { markdown: notes, json: dataG1 },
    }
  )
  .add(
    'group 2',
    () =>
      siteHeaderHarmonised(
        merge(dataG2, {
          logo: {
            src: logo,
          },
          icon_file_path: defaultSprite,
        }),
        button(btnLangLabel, btnLangG2Handler)
      ),
    {
      notes: { markdown: notes, json: dataG2 },
    }
  )
  .add('group 3', () => siteHeaderHarmonised(dataGroup3), {
    notes: { markdown: notes, json: dataGroup3 },
  });
