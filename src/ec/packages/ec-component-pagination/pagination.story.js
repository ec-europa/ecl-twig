import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, tabLabels } from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import specs from './demo/data';

import pagination from './ecl-pagination.html.twig';
import notes from './README.md';

const preparePagination = data => {
  data.label = text('label', data.label, tabLabels.required);
  data.items.forEach((item, i) => {
    if (item.type) {
      item.type = select(
        `items[${i}].type`,
        [item.type],
        item.type,
        tabLabels.required
      );
    }
    item.aria_label = text(
      `items[${i}].label`,
      item.aria_label,
      tabLabels.required
    );
    if (item.link) {
      item.link.link.label = text(
        `items[${i}].link.link.label`,
        item.link.link.label,
        tabLabels.required
      );
      item.link.link.path = text(
        `items[${i}].link.link.path`,
        item.link.link.path,
        tabLabels.required
      );
      if (item.link.icon) {
        item.link.link.icon_position = select(
          `items[${i}].link.link.icon_position`,
          [item.link.link.icon_position],
          item.link.link.icon_position,
          tabLabels.required
        );
        item.link.icon.name = select(
          `items[${i}].link.icon.name`,
          [item.link.icon.name],
          item.link.icon.name,
          tabLabels.required
        );
        item.link.icon.type = select(
          `items[${i}].link.icon.type`,
          [item.link.icon.type],
          item.link.icon.type,
          tabLabels.required
        );
        item.link.icon.size = select(
          `items[${i}].link.icon.size`,
          [item.link.icon.size],
          item.link.icon.size,
          tabLabels.required
        );
        item.link.icon.transform = select(
          `items[${i}].link.icon.transform`,
          [item.link.icon.transform],
          item.link.icon.transform,
          tabLabels.required
        );
        item.link.icon.path = select(
          `items[${i}].link.icon.path`,
          [defaultSprite],
          defaultSprite,
          tabLabels.required
        );
      }
    }
  });

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Navigation/Pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('default', () => pagination(preparePagination(specs)), {
    notes: { markdown: notes, json: specs },
  });
