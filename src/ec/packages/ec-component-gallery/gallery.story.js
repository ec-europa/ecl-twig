import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
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
      tabLabels.required
    );
    item.description = text(
      `items[${i}].description`,
      item.description,
      tabLabels.optional
    );
    item.meta = text(`items[${i}].meta`, item.meta, tabLabels.optional);
    item.alt = text(`items[${i}].alt`, item.alt, tabLabels.optional);
    item.extra_classes = text(
      `items[${i}].extra_classes`,
      item.extra_classes,
      tabLabels.optional
    );
    if (!item.extra_attributes) {
      item.extra_attributes = [{}];
    }
    item.extra_attributes[0].name = text(
      `items[${i}].extra_attributes[0].name`,
      '',
      tabLabels.optional
    );
    item.extra_attributes[0].value = text(
      `items[${i}].extra_attributes[0].value`,
      item.extra_attributes[0].value,
      tabLabels.optional
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
        tabLabels.required
      );
    }
    if (item.video) {
      item.video.sources[0].src = select(
        `items[${i}].video.sources[0].src`,
        [item.video.sources[0].src],
        item.video.sources[0].src,
        tabLabels.required
      );
    }
  });
  data.items.selected_item_id = text(
    'items.selected_item_id',
    data.items.selected_item_id,
    tabLabels.optional
  );
  // Overlay knobs.
  data.overlay.counter_separator = text(
    'overlay.counter_separator',
    data.overlay.counter_separator,
    tabLabels.required
  );
  data.overlay.extra_classes = text(
    'data.overlay.extra_classes',
    '',
    tabLabels.optional
  );
  if (!data.overlay.extra_attributes) {
    data.overlay.extra_attributes = [{}];
  }
  data.overlay.extra_attributes[0].name = text(
    'data.overlay.extra_attributes[0].name',
    '',
    tabLabels.optional
  );
  data.overlay.extra_attributes[0].value = text(
    `data.overlay.extra_attributes[0].value`,
    data.overlay.extra_attributes[0].value,
    tabLabels.optional
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
    tabLabels.required
  );
  data.overlay.close.icon.path = select(
    'overlay.close.icon.path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  data.overlay.previous.label = text(
    'overlay.previous.label',
    data.overlay.previous.label,
    tabLabels.required
  );
  data.overlay.previous.icon.path = select(
    'overlay.previous.icon.path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  data.overlay.next.label = text(
    'overlay.next.label',
    data.overlay.next.label,
    tabLabels.required
  );
  data.overlay.next.icon.path = select(
    'overlay.next.icon.path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  data.overlay.download.link.label = text(
    'overlay.download.link.label',
    data.overlay.download.link.label,
    tabLabels.required
  );
  data.overlay.download.link.path = text(
    'overlay.download.link.path',
    data.overlay.download.link.path,
    tabLabels.required
  );
  data.overlay.download.icon.path = select(
    'overlay.download.icon.path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  data.overlay.share.icon.path = select(
    'overlay.share.icon.path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Gallery', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => gallery(prepareGallery(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  });
