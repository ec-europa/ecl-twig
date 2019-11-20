import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import dropdown from './ecl-dropdown-legacy.html.twig';
import notes from './docs/dropdown-legacy.md';

storiesOf('Components/Dropdowns legacy', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () => {
      demoData.button.icon.path = defaultSprite;
      demoData.button.label = text('Dropdown button', demoData.button.label);
      return dropdown(demoData);
    },
    {
      notes: { markdown: notes, json: demoData },
    }
  );
