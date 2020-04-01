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

const prepareGallery = data => {
  data.items.forEach((item, i) => {
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
    if (!item.extra_attributes) {
      item.extra_attributes = [{}];
    }
    item.extra_attributes[0].name = text(
      `items[${i}].extra_attributes[0].name`,
      '',
      buttonLabels.optional
    );
    item.extra_attributes[0].value = text(
      `items[${i}].extra_attributes[0].value`,
      item.extra_attributes[0].value,
      buttonLabels.optional
    );
    if (!item.extra_attributes[0].value) {
      delete item.extra_attributes[0].value;
    }
    if (item.extra_attributes[0].name === '') {
      delete item.extra_attributes;
    }
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
  // Overlay knobs.
  data.overlay.counter_separator = text(
    'overlay.counter_separator',
    data.overlay.counter_separator,
    buttonLabels.required
  );
  data.overlay.extra_classes = text(
    'data.overlay.extra_classes',
    '',
    buttonLabels.optional
  );
  if (!data.overlay.extra_attributes) {
    data.overlay.extra_attributes = [{}];
  }
  data.overlay.extra_attributes[0].name = text(
    'data.overlay.extra_attributes[0].name',
    '',
    buttonLabels.optional
  );
  data.overlay.extra_attributes[0].value = text(
    `data.overlay.extra_attributes[0].value`,
    data.overlay.extra_attributes[0].value,
    buttonLabels.optional
  );
  if (!data.overlay.extra_attributes[0].value) {
    delete data.overlay.extra_attributes[0].value;
  }
  if (data.overlay.extra_attributes[0].name === '') {
    delete data.overlay.extra_attributes;
  }
  data.overlay.close.label = text(
    'overlay.close.label',
    data.overlay.close.label,
    buttonLabels.required
  );
  data.overlay.close.icon.path = select(
    'overlay.close.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  data.overlay.previous.label = text(
    'overlay.previous.label',
    data.overlay.previous.label,
    buttonLabels.required
  );
  data.overlay.previous.icon.path = select(
    'overlay.previous.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  data.overlay.next.label = text(
    'overlay.next.label',
    data.overlay.next.label,
    buttonLabels.required
  );
  data.overlay.next.icon.path = select(
    'overlay.next.icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  data.overlay.download.link.label = text(
    'overlay.download.link.label',
    data.overlay.download.link.label,
    buttonLabels.required
  );
  data.overlay.download.link.path = text(
    'overlay.download.link.path',
    data.overlay.download.link.path,
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
  .add('default', () => gallery(prepareGallery(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  });
