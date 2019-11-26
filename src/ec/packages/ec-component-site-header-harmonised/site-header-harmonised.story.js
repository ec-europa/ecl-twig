import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import logo from '@ecl/ec-resources-logo/logo--en.svg';
import siteHeaderHarmonised from './ecl-site-header-harmonised.html.twig';
import { dataGroup1, dataGroup2 } from './demo/data';
import notes from './README.md';

storiesOf('Components/Site Headers/Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'group 1',
    () => {
      dataGroup1.group = 'group1';
      dataGroup1.logged = true;
      dataGroup1.icon_file_path = defaultSprite;
      dataGroup1.logo.src = logo;
      return siteHeaderHarmonised(dataGroup1);
    },
    {
      notes: { markdown: notes, json: dataGroup1 },
    }
  )
  .add(
    'group 2',
    () => {
      dataGroup2.group = 'group2';
      dataGroup2.icon_file_path = defaultSprite;
      dataGroup2.logo.src = logo;
      return siteHeaderHarmonised(dataGroup2);
    },
    {
      notes: { markdown: notes, json: dataGroup2 },
    }
  );
