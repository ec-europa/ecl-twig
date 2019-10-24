import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import sections from './demo/data';
import footerStandardised from './footer-standardised.html.twig';
import notes from './docs/footer-standardised.md';

storiesOf('Components/Footers/Standardised', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => footerStandardised(sections), {
    notes: { markdown: notes },
  });
