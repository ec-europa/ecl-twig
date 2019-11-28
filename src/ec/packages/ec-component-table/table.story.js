import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from '@ecl/ec-specs-table/demo/data--default';
import dataMulti from '@ecl/ec-specs-table/demo/data--multi';
import table from './ecl-table.html.twig';
import notes from './README.md';

storiesOf('Components/Table', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      dataDefault.zebra = false;
      return table(dataDefault);
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'Zebra',
    () => {
      dataDefault.zebra = true;
      return table(dataDefault);
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'Multi',
    () => {
      return table(dataMulti);
    },
    {
      notes: { markdown: notes, json: dataMulti },
    }
  );
