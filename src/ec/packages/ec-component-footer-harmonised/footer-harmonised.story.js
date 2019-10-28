import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import adapter from './demo/data';
import footerHarmonised from './footer-harmonised.html.twig';
import notes from './docs/footer-harmonised.md';

adapter.sections.forEach(s => {
  if (s.links && Array.isArray(s.links)) {
    s.links.forEach(l => {
      if (l.icon) {
        l.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
      }
    });
  }
});

storiesOf('Components/Footers/Harmonised', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('group 1', () => footerHarmonised(adapter), {
    notes: { markdown: notes },
  })
  .add('group 2', () => footerHarmonised(adapter), {
    notes: { markdown: notes },
  });
