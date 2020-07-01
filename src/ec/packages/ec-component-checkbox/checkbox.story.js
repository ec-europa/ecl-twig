import { storiesOf } from '@storybook/html';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getFormGroupKnobs,
  tabLabels,
  getFormItemKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data--default';
import checkboxGroup from './ecl-checkbox-group.html.twig';
import notes from './README.md';

const prepareCheckbox = data => {
  getFormGroupKnobs(data);

  getFormItemKnobs(data, true);

  data.items.forEach((item, i) => {
    item.icon_path = select(
      `items[${i}].icon_path`,
      [defaultSprite],
      defaultSprite,
      tabLabels.required
    );
  });

  getExtraKnobs(data, true);
  getComplianceKnob(data);

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
