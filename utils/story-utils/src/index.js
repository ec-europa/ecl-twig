/* eslint-disable no-param-reassign */
import { text, select, boolean } from '@storybook/addon-knobs';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

export const buttonLabels = {
  required: 'Mandatory elements',
  optional: 'Optional elements',
  states: 'States',
};

export const getExtraKnobs = data => {
  data.extra_classes = text('extra_classes', '', buttonLabels.optional);
  const attribute1Name = text(
    'extra_attributes[0].name',
    '',
    buttonLabels.optional
  );
  // First attribute.
  if (attribute1Name !== '') {
    data.extra_attributes = [];
    let attribute = {};
    const attribute1Value = text(
      'extra_attributes[0].value',
      '',
      buttonLabels.optional
    );
    const attribute2Name = text(
      'extra_attributes[1].name',
      '',
      buttonLabels.optional
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
        buttonLabels.optional
      );
      attribute = {};
      attribute.name = attribute2Name;
      if (attribute2Value !== '') {
        attribute.value = attribute2Value;
      }
      data.extra_attributes.push(attribute);
    }
  } else {
    data.extra_attributes = null;
  }

  return data;
};

export const getIconKnobs = (data, name, size, color, transform) => {
  const sizes = {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
    '2xl': '2xl',
  };

  const defaultSize = size || 'm';
  const defaultSizes = size ? [size] : sizes;

  const colors = {
    default: '',
    inverted: 'inverted',
    primary: 'primary',
  };

  const defaultColor = color ? [color] : '';
  const defaultColors = color ? [color] : colors;

  const transforms = {
    None: '',
    'rotate-90': 'rotate-90',
    'rotate-180': 'rotate-180',
    'rotate-270': 'rotate-270',
    'flip-horizontal': 'flip-horizontal',
    'flip-vertical': 'flip-vertical',
  };

  const defaultTransform = transform || '';
  const defaultTransforms = transform ? [transform] : transforms;

  const iconPositionSettings = {
    before: 'before',
    after: 'after',
  };
  const icon = {};
  icon.name = name;
  icon.type = select('icon.type', ['ui'], 'ui', buttonLabels.optional);
  icon.path = select(
    'icon.path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.optional
  );
  icon.size = select(
    'icon.size',
    defaultSizes,
    defaultSize,
    buttonLabels.optional
  );
  icon.color = select(
    'icon.color',
    defaultColors,
    defaultColor,
    buttonLabels.optional
  );
  icon.transform = select(
    'icon.transform',
    defaultTransforms,
    defaultTransform,
    buttonLabels.optional
  );
  if (icon) {
    data.icon = icon;
    data.icon_position = select(
      'icon_position',
      iconPositionSettings,
      'after',
      buttonLabels.optional
    );
  }

  return data;
};

export const getFormKnobs = data => {
  const inputWidthOptions = {
    small: 's',
    medium: 'm',
    large: 'l',
  };
  data.invalid = boolean('invalid', false, buttonLabels.states);
  data.disabled = boolean('disabled', false, buttonLabels.states);
  data.required = boolean('required', false, buttonLabels.states);
  data.label = text('label', data.label, buttonLabels.required);
  if (data.invalid) {
    data.invalid_text = text(
      'invalid_text',
      data.invalid_text,
      buttonLabels.required
    );
  } else {
    data.invalid_text = text(
      'invalid_text',
      data.invalid_text,
      buttonLabels.optional
    );
  }
  if (data.required) {
    data.required_text = text(
      'required_text',
      data.required_text,
      buttonLabels.required
    );
    data.optional_text = text(
      'optional text',
      data.optional_text,
      buttonLabels.optional
    );
  } else {
    data.required_text = text(
      'required_text',
      data.required_text,
      buttonLabels.optional
    );
    data.optional_text = text(
      'optional text',
      data.optional_text,
      buttonLabels.required
    );
  }

  data.helper_text = text(
    'helper_text',
    data.helper_text,
    buttonLabels.optional
  );
  data.width = select('width', inputWidthOptions, 'm', buttonLabels.optional);

  return data;
};

export const getFormItemKnobs = data => {
  data.items.forEach((item, i) => {
    item.label = text(`items[${i}].label`, item.label, buttonLabels.required);
    item.id = select(
      `items[${i}].id`,
      [item.id],
      item.id,
      buttonLabels.required
    );
    item.value = select(
      `items[${i}].value`,
      [item.value],
      item.value,
      buttonLabels.required
    );
    item.helper_id = select(
      `items[${i}].value`,
      [item.helper_id],
      item.helper_id,
      buttonLabels.optional
    );
    item.helper_text = text(
      `items[${i}].helper_text`,
      item.helper_text,
      buttonLabels.optional
    );
  });

  return data;
};
