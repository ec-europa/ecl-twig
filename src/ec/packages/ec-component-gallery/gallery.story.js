/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import gallery from './ecl-gallery.html.twig';

import dataDefault from './demo/data';
import notes from './README.md';

const preperaGallery = data => {
  data.items.forEach((item, index) => {
    item.share_path = select(
      `items[${index}].share_path`,
      [item.share_path],
      item.share_path,
      buttonLabels.required
    );
    item.description = text(
      `items[${index}].description`,
      item.description,
      buttonLabels.optional
    );
    if (item.icon) {
      item.icon.path = select(
        `items[${index}].icon.path`,
        [defaultSprite],
        defaultSprite,
        buttonLabels.required
      );
    }
  });
  data.overlay.close.icon.path = select(
    'overlay.close.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  data.overlay.previous.icon.path = select(
    'overlay.previous.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  data.overlay.next.icon.path = select(
    'overlay.next.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  data.overlay.download.icon.path = select(
    'overlay.download.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  data.overlay.share.icon.path = select(
    'overlay.share.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Gallery', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => gallery(preperaGallery(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  });
