import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-list/demo/data--text';

import docs from './README.md';
import orderedList from './ecl-ordered-list.html.twig';

storiesOf('Components/List/Ordered list', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      return orderedList(data);
    },
    {
      notes: { markdown: docs },
    }
  );
