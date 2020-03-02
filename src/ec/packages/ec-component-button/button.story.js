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

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

// Preserve the adapted specs.
const prepareButton = prepareData => {
  prepareData.label = text('Label', prepareData.label, requiredGroupId);

  prepareData.icon = {
    type: 'ui',
    path: defaultSprite,
    name: select('Icon (sample)', iconsList, 'null', optionalGroupId),
    size: 'xs',
  };

  prepareData.icon_position = select(
    'Icon position',
    iconPositionSettings,
    'after',
    optionalGroupId
  );

  prepareData.disabled = boolean(
    'Disabled',
    prepareData.disabled,
    optionalGroupId
  );

  return prepareData;
};

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'primary',
    () => {
      return button(prepareButton(dataPrimary));
    },
    {
      notes: { markdown: notes, json: prepareButton(dataPrimary) },
    }
  )
  .add(
    'secondary',
    () => {
      return button(prepareButton(dataSecondary));
    },
    {
      notes: { markdown: notes, json: prepareButton(dataSecondary) },
    }
  )
  .add(
    'call to action',
    () => {
      return button(prepareButton(dataCall));
    },
    {
      notes: { markdown: notes, json: prepareButton(dataCall) },
    }
  )
  .add(
    'text',
    () => {
      return button(prepareButton(dataGhost));
    },
    {
      notes: { markdown: notes, json: prepareButton(dataGhost) },
    }
  )
  .add(
    'search',
    () => {
      return button(prepareButton(dataSearch));
    },
    {
      notes: { markdown: notes, json: prepareButton(dataSearch) },
    }
  );
