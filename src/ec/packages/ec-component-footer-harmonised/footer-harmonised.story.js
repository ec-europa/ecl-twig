import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import{ group1,group2 } from './demo/data';
import footerHarmonised from './footer-harmonised.html.twig';
import notes from './docs/footer-harmonised.md';

//add manually group property to change class
group1.group = 'group1';
group2.group = 'group2';

let groups= [group1,group2];

groups.forEach(g => {
  if ('sections' in g) {
    g.sections.forEach(s => {
      if (s.links && Array.isArray(s.links)) {
        s.links.forEach(l => {
          if (l.icon) {
            l.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
          }
        });
      }
    });
  }
});


storiesOf('Components/Footers/Harmonised', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('group 1', () => footerHarmonised(group1), {
    notes: { markdown: notes },
  })
  .add('group 2', () => footerHarmonised(group2), {
    notes: { markdown: notes },
  });
