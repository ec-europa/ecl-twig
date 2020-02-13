/* eslint-disable no-param-reassign */
import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
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

storiesOf('Components/Site Headers/Core', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      siteHeaderCore(
        merge(enData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
          logged: false,
        }),
        button(btnLabel, enBtnHandler)
      ),
    {
      notes: { markdown: notes, json: enData },
    }
  )
  .add(
    'logged in',
    () =>
      siteHeaderCore(
        merge(englishData, {
          logo: {
            src: englishBanner,
          },
          icon_file_path: defaultSprite,
          logged: true,
        })
      ),
    {
      notes: { markdown: notes, json: englishData },
    }
  )
  .add(
    'translated',
    () =>
      siteHeaderCore(
        merge(frData, {
          logo: {
            src: frenchBanner,
          },
          icon_file_path: defaultSprite,
        }),
        button(btnLabel, frBtnHandler)
      ),
    {
      notes: { markdown: notes, json: frData },
    }
  );
