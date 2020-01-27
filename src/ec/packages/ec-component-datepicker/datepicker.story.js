/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import data from './demo/data';
import datepicker from './ecl-datepicker.html.twig';
import notes from './README.md';

storiesOf('Components/Forms/Datepicker', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      return datepicker({
        ...data,
        icons_path: defaultSprite,
      });
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
