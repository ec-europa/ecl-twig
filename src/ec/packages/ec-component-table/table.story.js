import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import table from './table.html.twig';
import { dataDefault, dataMulti } from './demo/data';
import docs from './README.md';

storiesOf('Components/Table', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      return table(dataDefault);
    },
    {
      notes: { markdown: docs },
    }
  )
  .add(
    'Zebra',
    () => {
      dataDefault.zebra = true;
      return table(dataDefault);
    },
    {
      notes: { markdown: docs },
    }
  )
  .add(
    'Multi',
    () => {
      return table(dataMulti);
    },
    {
      notes: { markdown: docs },
    }
  );
