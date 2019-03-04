import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import accordion from './accordion.html.twig';
import notes from './docs/accordion.md';

demoData.items.forEach(item => {
  item.toggle.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
});

storiesOf('Components/Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => accordion(demoData), {
    notes: { markdown: notes },
  });
