/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import gallery from './ecl-gallery.html.twig';

import dataDefault from './demo/data';
import notes from './README.md';

const prepareGallery = data => {
  data.items.forEach((item, i) => {
    item.extra_attributes = [];
    item.share_path = select(
      `items[${i}].share_path`,
      [item.share_path],
      item.share_path,
      buttonLabels.required
    );
    item.description = text(
      `items[${i}].description`,
      item.description,
      buttonLabels.optional
    );
    item.meta = text(`items[${i}].meta`, item.meta, buttonLabels.optional);
    item.alt = text(`items[${i}].alt`, item.alt, buttonLabels.optional);
    item.extra_classes = text(
      `items[${i}].extra_classes`,
      item.extra_classes,
      buttonLabels.optional
    );
    item.extra_attributes[0] = {};
    item.extra_attributes[0].name = text(
      `items[${i}].extra_attributes[0].name`,
      item.extra_attributes[0].name,
      buttonLabels.optional
    );
    item.extra_attributes[0].value = text(
      `items[${i}].extra_attributes[0].value`,
      item.extra_attributes[0].value,
      buttonLabels.optional
    );
    if (item.icon) {
      item.icon.path = select(
        `items[${i}].icon.path`,
        [defaultSprite],
        defaultSprite,
        buttonLabels.required
      );
    }
    if (item.video) {
      item.video.sources[0].src = select(
        `items[${i}].video.sources[0].src`,
        [item.video.sources[0].src],
        item.video.sources[0].src,
        buttonLabels.required
      );
    }
  });

  data.selected_item_id = text(
    'selected_item_id',
    data.selected_item_id,
    buttonLabels.optional
  );
  data.overlay = object('data.overlay', data.overlay, buttonLabels.optional);

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Gallery', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => gallery(prepareGallery(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  });
