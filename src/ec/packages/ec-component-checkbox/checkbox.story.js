/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, getFormKnobs, tabLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data--default';
import checkboxGroup from './ecl-checkbox-group.html.twig';
import notes from './README.md';

const prepareCheckbox = data => {
  getFormKnobs(data);

  data.items.forEach((item, i) => {
    item.id = select(`items[${i}].id`, [item.id], item.id, tabLabels.required);
    item.value = select(
      `items[${i}].value`,
      [item.value],
      item.value,
      tabLabels.required
    );
    item.icon_path = select(
      `items[${i}]icon_path`,
      [defaultSprite],
      defaultSprite,
      tabLabels.required
    );
  });

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Forms/Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = prepareCheckbox(dataDefault);

      return checkboxGroup(data);
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  );
