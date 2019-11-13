import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import sections from './demo/data';
import footer from './ecl-footer-core.html.twig';
import notes from './docs/footer-core.md';

storiesOf('Components/Footers/Core', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => footer(sections), {
    notes: { markdown: notes },
  });
