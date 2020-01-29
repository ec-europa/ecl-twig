import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataCustom from './demo/data--custom';
import dataCorporate from './demo/data--corporate';
import footer from './ecl-footer.html.twig';
import notes from './README.md';

dataCustom.back_to_top.icon.path = defaultSprite;
dataCorporate.back_to_top.icon.path = defaultSprite;

if (dataCustom.identity) {
  dataCustom.identity.follow.links.forEach(link => {
    if (link.icon) {
      link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
    }
  });
}

if (dataCorporate.identity) {
  dataCorporate.identity.follow.links.forEach(link => {
    if (link.icon) {
      link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
    }
  });
}

dataCustom.sections.forEach(s => {
  if (s.links) {
    s.links.forEach(l => {
      if (l.icon) {
        l.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
      }
    });
  }
});

dataCorporate.sections.forEach(s => {
  if (s.links) {
    s.links.forEach(l => {
      if (l.icon) {
        l.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
      }
    });
  }
});

storiesOf('Components/deprecated/Footer', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('ECL < 2.12.0 - corporate', () => footer(dataCorporate), {
    notes: { markdown: notes, json: dataCorporate },
  })
  .add('ECL < 2.12.0 - custom', () => footer(dataCustom), {
    notes: { markdown: notes, json: dataCustom },
  });
