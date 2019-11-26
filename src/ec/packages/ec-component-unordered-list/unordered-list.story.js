import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-list/demo/data--text';
import dataLink from '@ecl/ec-specs-list/demo/data--link';
import dataLinkDivider from '@ecl/ec-specs-list/demo/data--link-divider';
import dataLinkNoBullet from '@ecl/ec-specs-list/demo/data--link-no-bullet';

import unorderedList from './ecl-unordered-list.html.twig';
import notes from './README.md';

storiesOf('Components/List/Unordered list', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      return unorderedList(data);
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'with divider',
    () => {
      return unorderedList(dataLinkDivider);
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'with links',
    () => {
      return unorderedList(dataLink);
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'no bullet',
    () => {
      return unorderedList(dataLinkNoBullet);
    },
    {
      notes: { markdown: notes },
    }
  );
