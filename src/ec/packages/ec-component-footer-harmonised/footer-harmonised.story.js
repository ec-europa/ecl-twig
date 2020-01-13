/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import logoEC from '@ecl/ec-resources-logo/logo--en.svg';

import dataGroup1 from './demo/data--group1';
import dataGroup2 from './demo/data--group2';
import dataGroup3 from './demo/data--group3';

import footerHarmonised from './ecl-footer-harmonised.html.twig';
import notes from './README.md';

const groups = [dataGroup1, dataGroup2, dataGroup3];

groups.forEach(g => {
  if ('sections' in g) {
    g.sections.forEach(s => {
      if (s.logos && Array.isArray(s.logos)) {
        s.logos.forEach(logo => {
          if (logo.src === '/logo--en.svg') {
            logo.src = logoEC;
          }
        });
      }
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
    notes: { markdown: notes, json: dataGroup1 },
  })
  .add('group 2', () => footerHarmonised(dataGroup2), {
    notes: { markdown: notes, json: dataGroup2 },
  })
  .add('group 3', () => footerHarmonised(dataGroup3), {
    notes: { markdown: notes, json: dataGroup3 },
  });
