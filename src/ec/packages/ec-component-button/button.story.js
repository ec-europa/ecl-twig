/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

// Import data for demos
import dataPrimary from '@ecl/ec-specs-button/demo/data--primary';
import dataSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import dataCall from '@ecl/ec-specs-button/demo/data--call';
import dataGhost from '@ecl/ec-specs-button/demo/data--ghost';
import dataSearch from '@ecl/ec-specs-button/demo/data--search';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import button from './ecl-button.html.twig';
import notes from './README.md';

const iconPositionSettings = {
  before: 'before',
  after: 'after',
};

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

// labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const statusGroupId = 'States';

// Preserve the adapted specs.
const prepareButton = data => {
  data.disabled = boolean('disabled', data.disabled, statusGroupId);
  data.label = text('label', data.label, requiredGroupId);

  data.variant = select(
    'variant (default value: primary)',
    [data.variant],
    data.variant,
    requiredGroupId
  );

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

const prepareIcon = (name, data) => {
  const icon = {};
  icon.name = name;
  icon.type = select('icon.type', ['ui'], 'ui', optionalGroupId);
  icon.path = select(
    'icon.path',
    [defaultSprite],
    defaultSprite,
    optionalGroupId
  );
  icon.size = select('icon.size', ['xs'], 'xs', optionalGroupId);

  if (icon) {
    data.icon = icon;
    data.icon_position = select(
      'icon_position',
      iconPositionSettings,
      'after',
      optionalGroupId
    );
  }
};

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'primary',
    () => {
      const data = prepareButton(dataPrimary);
      const name = select('icon.name', iconsList, null, optionalGroupId);
      if (name !== null) {
        prepareIcon(name, data);
      }

      return button(data);
    },
    {
      notes: { markdown: notes, json: dataPrimary },
    }
  )
  .add(
    'secondary',
    () => {
      const data = prepareButton(dataSecondary);
      const name = select('icon.name', iconsList, null, optionalGroupId);
      if (name !== null) {
        prepareIcon(name, data);
      }

      return button(data);
    },
    {
      notes: { markdown: notes, json: dataSecondary },
    }
  )
  .add(
    'call to action',
    () => {
      const data = prepareButton(dataCall);
      const name = select('icon.name', iconsList, null, optionalGroupId);
      if (name !== null) {
        prepareIcon(name, data);
      }

      return button(data);
    },
    {
      notes: { markdown: notes, json: dataCall },
    }
  )
  .add(
    'text',
    () => {
      const data = prepareButton(dataGhost);
      const name = select('icon.name', iconsList, null, optionalGroupId);
      if (name !== null) {
        prepareIcon(name, data);
      }

      return button(data);
    },
    {
      notes: { markdown: notes, json: dataGhost },
    }
  )
  .add(
    'search',
    () => {
      const data = prepareButton(dataSearch);
      const name = select('icon.name', iconsList, null, optionalGroupId);
      if (name !== null) {
        prepareIcon(name, data);
      }

      return button(data);
    },
    {
      notes: { markdown: notes, json: dataSearch },
    }
  );
