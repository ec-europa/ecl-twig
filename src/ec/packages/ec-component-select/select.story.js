/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import specData from './demo/data';

import selectBox from './ecl-select.html.twig';
import notes from './README.md';

const inputWidthOptions = {
  small: 's',
  medium: 'm',
  large: 'l',
};

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const statesGroupId = 'States';

const prepareSelect = data => {
  data.invalid = boolean('invalid', false, statesGroupId);
  data.disabled = boolean('disabled', false, statesGroupId);
  data.required = boolean('required', false, statesGroupId);
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
      'optional text',
      data.optional_text,
      requiredGroupId
    );
  }
  data.icon_path = select(
    'icon_path',
    [defaultSprite],
    defaultSprite,
    requiredGroupId
  );
  data.helper_text = text('helper_text', data.helper_text, optionalGroupId);
  data.width = select('width', inputWidthOptions, 'm', optionalGroupId);
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
  data.options.forEach((option, i) => {
    option.label = text(`options[${i}].label`, option.label, requiredGroupId);
    option.value = text(`options[${i}].value`, option.value, requiredGroupId);
  });

  return data;
};

storiesOf('Components/Forms/Select', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const dataStory = prepareSelect(specData);

      return selectBox(dataStory);
    },
    {
      notes: { markdown: notes, json: specData },
    }
  );
