/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data--default';
import dataBinary from './demo/data--binary';
import radioGroup from './ecl-radio-group.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const statesGroupId = 'States';

const prepareRadio = data => {
  data.invalid = boolean('invalid', false, statesGroupId);
  data.required = boolean('required', data.required, statesGroupId);
  data.label = text('label', data.label, requiredGroupId);
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
  data.helper_text = text('helper_text', data.helper_text, optionalGroupId);

  data.items.forEach((item, i) => {
    item.label = text(`items[${i}].label`, item.label, requiredGroupId);
    item.id = select(`items[${i}].id`, [item.id], item.id, requiredGroupId);
    item.value = select(
      `items[${i}].value`,
      [item.value],
      item.value,
      requiredGroupId
    );
    item.helper_id = select(
      `items[${i}].value`,
      [item.helper_id],
      item.helper_id,
      optionalGroupId
    );
    item.helper_text = text(
      `items[${i}].helper_text`,
      item.helper_text,
      optionalGroupId
    );
  });

  data.extra_classes = text('extra_classes', '', optionalGroupId);
  const attribute1Name = text('extra_attributes[0].name', '', optionalGroupId);
  // First attribute.
  if (attribute1Name !== '') {
    data.extra_attributes = [];
    let attribute = {};
    const attribute1Value = text(
      'extra_attributes[0].value',
      '',
      optionalGroupId
    );
    const attribute2Name = text(
      'extra_attributes[1].name',
      '',
      optionalGroupId
    );
    attribute.name = attribute1Name;
    if (attribute1Value !== '') {
      attribute.value = attribute1Value;
    }
    data.extra_attributes.push(attribute);
    // Second attribute.
    if (attribute2Name !== '') {
      const attribute2Value = text(
        'extra_attributes[1].value',
        '',
        optionalGroupId
      );
      attribute = {};
      attribute.name = attribute2Name;
      if (attribute2Value !== '') {
        attribute.value = attribute2Value;
      }
      data.extra_attributes.push(attribute);
    }
  } else {
    delete data.extra_attributes;
  }

  return data;
};

storiesOf('Components/Forms/Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = prepareRadio(dataDefault);

      return radioGroup(data);
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'binary',
    () => {
      boolean('binary', true, optionalGroupId);
      const data = prepareRadio(dataBinary);

      return radioGroup(data);
    },
    {
      notes: { markdown: notes, json: dataBinary },
    }
  );
