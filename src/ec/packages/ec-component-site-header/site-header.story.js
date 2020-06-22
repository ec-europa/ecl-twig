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

const enData = { ...englishData };
const frData = { ...frenchData };

// Show/hide buttons for the language switcher.
const btnLabel = 'With or without the language switcher';
const EnBtnHandler = () => {
  if (enData.language_selector) {
    delete enData.language_selector;
  } else {
    enData.language_selector = englishData.language_selector;
  }
};
const frBtnHandler = () => {
  if (frData.language_selector) {
    delete frData.language_selector;
  } else {
    frData.language_selector = frenchData.language_selector;
  }
};

storiesOf('Components/deprecated/Site Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'ECL < 2.12 - default',
    () =>
      siteHeader(
        {
          ...enData,
          logo: { src: englishBanner },
          icon_file_path: defaultSprite,
        },
        button(btnLabel, EnBtnHandler)
      ),
    {
      notes: { markdown: notes, json: enData },
    }
  )
  .add(
    'ECL < 2.12 - translated',
    () =>
      siteHeader(
        {
          ...frData,
          logo: { src: frenchBanner },
          icon_file_path: defaultSprite,
        },
        button(btnLabel, frBtnHandler)
      ),
    {
      notes: { markdown: notes, json: frData },
    }
  );
