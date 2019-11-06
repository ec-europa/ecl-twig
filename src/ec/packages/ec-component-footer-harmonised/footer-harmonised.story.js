/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import { dataGroup1, dataGroup2 } from './demo/data';
import footerHarmonised from './footer-harmonised.html.twig';
import notes from './docs/footer-harmonised.md';

// add manually group property to change class
dataGroup1.group = 'group1';
dataGroup2.group = 'group2';

const groups = [dataGroup1, dataGroup2];

groups.forEach(g => {
  if ('sections' in g) {
    g.sections.forEach(s => {
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
  }
});

storiesOf('Components/Footers/Harmonised', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('group 1', () => footerHarmonised(dataGroup1), {
    notes: { markdown: notes },
  })
  .add('group 2', () => footerHarmonised(dataGroup2), {
    notes: { markdown: notes },
  });
