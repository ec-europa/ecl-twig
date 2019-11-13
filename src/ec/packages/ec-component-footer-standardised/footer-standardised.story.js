/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import data from './demo/data';
import footerStandardised from './ecl-footer-standardised.html.twig';
import notes from './docs/footer-standardised.md';

data.sections.forEach(s => {
  if (s.links && Array.isArray(s.links)) {
    s.links.forEach(l => {
      if (l.icon) {
        l.icon.path = defaultSprite;
      }
    });
  }
  if (s.title && s.title.icon) {
    s.title.icon.path = defaultSprite;
  }
});

storiesOf('Components/Footers/Standardised', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => footerStandardised(data), {
    notes: { markdown: notes },
  });
