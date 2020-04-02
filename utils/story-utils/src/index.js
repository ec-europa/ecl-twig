/* eslint-disable no-param-reassign */
import he from 'he';
import { text, select, boolean } from '@storybook/addon-knobs';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';

export const tabLabels = {
  required: 'Mandatory elements',
  optional: 'Optional elements',
  states: 'States',
  cases: 'Use cases',
};

export const getExtraKnobs = data => {
  data.extra_classes = text('extra_classes', '', tabLabels.optional);
  const attribute1Name = text(
    'extra_attributes[0].name',
    '',
    tabLabels.optional
  );
  // First attribute.
  if (attribute1Name !== '') {
    data.extra_attributes = [];
    let attribute = {};
    const attribute1Value = text(
      'extra_attributes[0].value',
      '',
      tabLabels.optional
    );
    const attribute2Name = text(
      'extra_attributes[1].name',
      '',
      tabLabels.optional
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
        tabLabels.optional
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

export const getIconKnobs = (
  data,
  name,
  type,
  size,
  color,
  transform,
  nolimit
) => {
  const sizes = {
    xs: 'xs',
    s: 's',
    m: 'm',
    l: 'l',
    xl: 'xl',
    '2xl': '2xl',
  };

  const types = {
    general: 'general',
    branded: 'branded',
    notifications: 'notifications',
    ui: 'ui',
  };

  const defaultType = type || 'ui';
  const defaultTypes = type ? [type] : types;
  const defaultSize = size || 'm';
  const defaultSizes = size && !nolimit ? [size] : sizes;

  const colors = {
    default: '',
    inverted: 'inverted',
    primary: 'primary',
  };

  const defaultColor = color || '';
  const defaultColors = color && !nolimit ? [color] : colors;

  const transforms = {
    None: '',
    'rotate-90': 'rotate-90',
    'rotate-180': 'rotate-180',
    'rotate-270': 'rotate-270',
    'flip-horizontal': 'flip-horizontal',
    'flip-vertical': 'flip-vertical',
  };

  const defaultTransform = transform || '';
  const defaultTransforms = transform && !nolimit ? [transform] : transforms;

  const iconPositionSettings = {
    before: 'before',
    after: 'after',
  };

  const icon = {};
  let pref = '';
  if (data.link && data.link.link) {
    pref = 'link.';
  }
  icon.name = name;
  icon.type = select(
    `${pref}icon.type`,
    defaultTypes,
    defaultType,
    tabLabels.required
  );
  icon.path = select(
    `${pref}icon.path`,
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  icon.size = select(
    `${pref}icon.size`,
    defaultSizes,
    defaultSize,
    tabLabels.optional
  );
  icon.color = select(
    `${pref}icon.color`,
    defaultColors,
    defaultColor,
    tabLabels.optional
  );
  icon.transform = select(
    `${pref}icon.transform`,
    defaultTransforms,
    defaultTransform,
    tabLabels.optional
  );
  if (icon) {
    if (data.link && data.link.link) {
      data.link.icon = icon;
    } else {
      data.icon = icon;
    }
    if (data.link) {
      data.link.icon_position = select(
        'icon_position',
        iconPositionSettings,
        'after',
        tabLabels.optional
      );
    }
  }

  return data;
};

export const getFormKnobs = data => {
  const inputWidthOptions = {
    small: 's',
    medium: 'm',
    large: 'l',
  };
  data.invalid = boolean('invalid', false, tabLabels.states);
  data.disabled = boolean('disabled', false, tabLabels.states);
  data.required = boolean('required', false, tabLabels.states);
  data.label = text('label', data.label, tabLabels.required);
  if (data.invalid) {
    data.invalid_text = text(
      'invalid_text',
      data.invalid_text,
      tabLabels.required
    );
  } else {
    data.invalid_text = text(
      'invalid_text',
      data.invalid_text,
      tabLabels.optional
    );
  }
  if (data.required) {
    data.required_text = text(
      'required_text',
      data.required_text,
      tabLabels.required
    );
    data.optional_text = text(
      'optional text',
      data.optional_text,
      tabLabels.optional
    );
  } else {
    data.required_text = text(
      'required_text',
      data.required_text,
      tabLabels.optional
    );
    data.optional_text = text(
      'optional text',
      data.optional_text,
      tabLabels.required
    );
  }

  data.helper_text = text('helper_text', data.helper_text, tabLabels.optional);
  data.width = select('width', inputWidthOptions, 'm', tabLabels.optional);

  return data;
};

export const getFormItemKnobs = data => {
  data.items.forEach((item, i) => {
    item.label = text(`items[${i}].label`, item.label, tabLabels.required);
    item.id = select(`items[${i}].id`, [item.id], item.id, tabLabels.required);
    item.value = select(
      `items[${i}].value`,
      [item.value],
      item.value,
      tabLabels.required
    );
    item.helper_id = select(
      `items[${i}].value`,
      [item.helper_id],
      item.helper_id,
      tabLabels.optional
    );
    item.helper_text = text(
      `items[${i}].helper_text`,
      item.helper_text,
      tabLabels.optional
    );
  });

  return data;
};

export const getLogoKnobs = data => {
  data.logo.title = text('logo.title', data.logo.title, tabLabels.required);
  data.logo.alt = text('logo.alt', data.logo.alt, tabLabels.required);
  data.logo.href = text('logo.href', data.logo.href, tabLabels.required);
  data.logo.language = select(
    'logo.language',
    [data.logo.language],
    data.logo.language,
    tabLabels.required
  );

  return data;
};

export const getLoginKnobs = (data, required) => {
  let label = tabLabels.optional;
  if (required) {
    label = tabLabels.required;
  }
  if (data.login_toggle && data.login_box) {
    data.login_toggle.label_not_logged = text(
      'login_toggle.label_not_logged',
      data.login_toggle.label_not_logged,
      label
    );
    data.login_toggle.href_not_logged = text(
      'login_toggle.href_not_logged',
      data.login_toggle.href_not_logged,
      label
    );
    data.login_toggle.label_logged = text(
      'login_toggle.label_logged',
      data.login_toggle.label_logged,
      label
    );
    data.login_toggle.href_logged = text(
      'login_toggle.href_logged',
      data.login_toggle.href_logged,
      label
    );
    data.login_box.id = text('login_box.id', data.login_box.id, label);
    data.login_box.description = he.decode(
      text('login_box.description', data.login_box.description, label)
    );
    data.login_box.label = text('login_box.label', data.login_box.label, label);
    data.login_box.href = text('login_box.href', data.login_box.href, label);
  }

  return data;
};

export const getLanguageSelectorKnobs = (data, required) => {
  let label = tabLabels.optional;
  if (required) {
    label = tabLabels.required;
  }
  data.language_selector.href = text(
    'language_selector.href',
    data.language_selector.href,
    label
  );
  data.language_selector.label = text(
    'language_selector.label',
    data.language_selector.label,
    label
  );
  data.language_selector.code = text(
    'language_selector.code',
    data.language_selector.code,
    label
  );

  return data;
};

export const getSearchFormKnobs = (data, required) => {
  let label = tabLabels.optional;
  if (required) {
    label = tabLabels.required;
  }
  data.search_form.text_input.id = text(
    'search_form.text_input.id',
    data.search_form.text_input.id,
    label
  );
  data.search_form.text_input.label = text(
    'search_form.text_input.label',
    data.search_form.text_input.label,
    label
  );
  data.search_form.button.label = text(
    'search_form.button.label',
    data.search_form.button.label,
    label
  );

  return data;
};

export const getBrandedIconsOptions = (labels, none, hover) => {
  const options = [];
  if (none) {
    options.push('none');
  }
  if (labels) {
    options.push('Other social networks');
  }

  brandedIcons.forEach(icon => {
    if (labels) {
      icon = icon.charAt(0).toUpperCase() + icon.slice(1);
    } else if (hover) {
      icon = `${icon}_hover`;
    }

    options.push(icon);
  });

  return options;
};
