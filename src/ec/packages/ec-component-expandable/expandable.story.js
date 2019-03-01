import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-expandable/demo/data';

import expandable from './expandable.html.twig';
import notes from './docs/expandable.md';

storiesOf('Components/Expandable', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () =>
      expandable({
        label_expanded: text('Label Expanded', data.labelExpanded),
        label_collapsed: text('Label Collapsed', data.labelCollapsed),
        content: text('Content', data.content),
        ...data,
      }),
    {
      notes: { markdown: notes },
    }
  );
