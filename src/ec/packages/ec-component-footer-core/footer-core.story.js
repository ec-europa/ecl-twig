import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import sections from './demo/data';

import footer from './footer-core.html.twig';
import notes from './docs/footer-core.md';

storiesOf('Components/Footers/Core', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => footer({ sections }), {
    notes: { markdown: notes },
  });
