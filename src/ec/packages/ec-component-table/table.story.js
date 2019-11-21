import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import table from './ecl-table.html.twig';
import { dataDefault, dataMulti } from './demo/data';
import docs from './README.md';

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
      notes: { markdown: docs, json: dataDefault },
    }
  )
  .add(
    'Zebra',
    () => {
      dataDefault.zebra = true;
      return table(dataDefault);
    },
    {
      notes: { markdown: docs, json: dataDefault },
    }
  )
  .add(
    'Multi',
    () => {
      return table(dataMulti);
    },
    {
      notes: { markdown: docs, json: dataMulti },
    }
  );
