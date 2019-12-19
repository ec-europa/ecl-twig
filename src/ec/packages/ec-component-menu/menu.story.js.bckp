import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import enData from './demo/data--en';

import menu from './ecl-menu.html.twig';
import notes from './README.md';

storiesOf('Components/Navigation/Menu', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () =>
      menu(
        merge(enData, {
          icon_path: iconPath,
        })
      ),
    {
      notes: { markdown: notes, json: enData },
    }
  );
