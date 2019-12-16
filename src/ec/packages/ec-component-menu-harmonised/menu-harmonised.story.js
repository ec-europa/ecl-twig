import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';

import menuStandardised from './ecl-menu-harmonised.html.twig';
import notes from './README.md';

storiesOf('Components/Menus/Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'group 1',
    () =>
      menuStandardised(
        merge(dataGroup1, {
          group: 'group1',
          icon_path: iconPath,
        })
      ),
    {
      notes: { markdown: notes, json: dataGroup1 },
    }
  )
  .add(
    'group 2',
    () =>
      menuStandardised(
        merge(dataGroup2, {
          group: 'group2',
          icon_path: iconPath,
        })
      ),
    {
      notes: { markdown: notes, json: dataGroup2 },
    }
  );
