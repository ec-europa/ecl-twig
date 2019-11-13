import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, select } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-list/demo/data--text';

import docs from './README.md';
import unorderedList from './ecl-unordered-list.html.twig';

const options = {
  default: '',
  no_bullet: 'no-bullet',
  divider: 'divider',
};

storiesOf('Components/List/Unordered list', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      return unorderedList({
        ...data,
        variant: select('Variant', options, ''),
      });
    },
    {
      notes: { markdown: docs },
    }
  );
