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
const statesGroupId = 'States';

const prepareCheckbox = data => {
  data.invalid = boolean('invalid', false, statesGroupId);
  data.required = boolean('required', false, statesGroupId);
  data.label = text(
    'label',
    'Select your preferred destinations',
    requiredGroupId
  );
  data.helper_text = text('helper_text', data.helper_text, optionalGroupId);
  if (data.invalid) {
    data.invalid_text = text(
      'invalid_text',
      data.invalid_text,
      requiredGroupId
    );
  } else {
    data.invalid_text = text(
      'invalid_text',
      data.invalid_text,
      optionalGroupId
    );
  }
  if (data.required) {
    data.required_text = text(
      'required_text',
      data.required_text,
      requiredGroupId
    );
    data.optional_text = text(
      'optional text',
      data.optional_text,
      optionalGroupId
    );
  } else {
    data.required_text = text(
      'required_text',
      data.required_text,
      optionalGroupId
    );
    data.optional_text = text(
      'optional_text',
      data.optional_text,
      requiredGroupId
    );
  }

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

  data.extra_classes = text('extra_classes', '', optionalGroupId);
  data.extra_attributes = object(
    'extra_attributes',
    { name: '', value: '' },
    optionalGroupId
  );

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
