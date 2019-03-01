import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import expandable from './expandable.html.twig';
import notes from './docs/expandable.md';

// Add SVG icon path.
demoData.button.icon.path = defaultSprite;

storiesOf('Components/Expandable', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () =>
      expandable({
        label_expanded: text('Label Expanded', demoData.labelExpanded),
        label_collapsed: text('Label Collapsed', demoData.labelCollapsed),
        content: text('Content', demoData.content),
        ...demoData,
      }),
    {
      notes: { markdown: notes },
    }
  );
