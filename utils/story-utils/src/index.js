/* eslint-disable no-param-reassign */
import { text, select } from '@storybook/addon-knobs';
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
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
    XL: 'xl',
    '2XL': '2xl',
  };

  const defaultSize = size || 'm';
  const defaultSizes = size ? [size] : sizes;

  const colors = {
    Default: '',
    Inverted: 'inverted',
    Primary: 'primary',
  };

  const defaultColor = color ? [color] : '';
  const defaultColors = color ? [color] : colors;

  const transforms = {
    None: '',
    'Rotate 90': 'rotate-90',
    'Rotate 180': 'rotate-180',
    'Rotate 270': 'rotate-270',
    'Flip horizontal': 'flip-horizontal',
    'Flip vertical': 'flip-vertical',
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
