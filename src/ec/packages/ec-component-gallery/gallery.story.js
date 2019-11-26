import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import gallery from './ecl-gallery.html.twig';

import data from './demo/data';
import notes from './README.md';

data.items.forEach(item => {
  if (item.icon) {
    item.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  }
});
data.overlay.close.icon.path = defaultSprite;
data.overlay.previous.icon.path = defaultSprite;
data.overlay.next.icon.path = defaultSprite;
data.overlay.download.icon.path = defaultSprite;
data.overlay.share.icon.path = defaultSprite;

storiesOf('Components/Gallery', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => gallery(data), {
    notes: { markdown: notes, json: data },
  });
