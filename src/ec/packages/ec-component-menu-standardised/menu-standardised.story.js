import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import enData from './demo/data--en';
import frData from './demo/data--fr';

import menuStandardised from './ecl-menu-standardised.html.twig';
import notes from './README.md';

storiesOf('Components/Menus/Standardised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const fullDemoData = { ...enData, icon_path: iconPath };

      return menuStandardised(fullDemoData);
    },
    {
      notes: { markdown: notes, json: enData },
    }
  )
  .add(
    'translated',
    () => {
      const fullDemoData = { ...frData, icon_path: iconPath };

      return menuStandardised(fullDemoData);
    },
    {
      notes: { markdown: notes, json: frData },
    }
  );
