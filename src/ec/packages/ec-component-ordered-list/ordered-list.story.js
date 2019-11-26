import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-list/demo/data--text';

import orderedList from './ecl-ordered-list.html.twig';
import notes from './README.md';

storiesOf('Components/List/Ordered list', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      return orderedList(data);
    },
    {
      notes: { markdown: notes, json: data },
    }
  );
