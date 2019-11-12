import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import expandable from './ecl-expandable.html.twig';
import notes from './docs/expandable.md';

storiesOf('Components/Expandables', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      demoData.button.icon.path = defaultSprite;
      demoData.label_expanded = text('Label Expanded', demoData.labelExpanded);
      demoData.label_collapsed = text(
        'Label Collapsed',
        demoData.labelCollapsed
      );
      demoData.content = text('Content', demoData.content);

      return expandable(demoData);
    },
    {
      notes: { markdown: notes },
    }
  );
