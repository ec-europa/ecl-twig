/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import {
  withKnobs,
  text,
  boolean,
  select,
  object,
} from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data--default';

import checkboxGroup from './ecl-checkbox-group.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

const prepareCheckbox = data => {
  data.label = text(
    'label',
    'Select your preferred destinations',
    requiredGroupId
  );
  data.invalid_text = text(
    'invalid_text',
    dataDefault.invalid_text,
    requiredGroupId
  );
  data.invalid = boolean('invalid', false, optionalGroupId);
  data.required = boolean('required', false, optionalGroupId);
  data.helper_text = text(
    'helper_text',
    dataDefault.helper_text,
    optionalGroupId
  );
  data.optional_text = text('optional_text', '(optional)', optionalGroupId);
  data.required_text = text('required_text', '*', optionalGroupId);
  data.extra_classes = text('extra_classes', '', optionalGroupId);
  data.extra_attributes = object(
    'extra_attributes',
    { name: '', value: '' },
    optionalGroupId
  );

  data.items.forEach((item, i) => {
    item.id = select(`items[${i}].id`, [item.id], item.id, requiredGroupId);
    item.value = select(
      `items[${i}].value`,
      [item.value],
      item.value,
      requiredGroupId
    );
    item.icon_path = select(
      `items[${i}]icon_path`,
      [defaultSprite],
      defaultSprite,
      requiredGroupId
    );
  });

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
