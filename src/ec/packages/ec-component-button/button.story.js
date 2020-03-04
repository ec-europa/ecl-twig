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
      const name = select('Icon (sample)', iconsList, null, optionalGroupId);
      const iconPosition = select(
        'icon_position',
        iconPositionSettings,
        'after',
        optionalGroupId
      );

      const data = prepareButton(dataPrimary);
      if (name) {
        data.icon = {
          type: 'ui',
          path: defaultSprite,
          name,
          size: 'xs',
        };

        data.icon_position = iconPosition;
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
      const name = select('Icon (sample)', iconsList, null, optionalGroupId);
      const iconPosition = select(
        'icon_position',
        iconPositionSettings,
        'after',
        optionalGroupId
      );

      const data = prepareButton(dataSecondary);
      if (name) {
        data.icon = {
          type: 'ui',
          path: defaultSprite,
          name,
          size: 'xs',
        };

        data.icon_position = iconPosition;
      }

      return button(prepareButton(data));
    },
    {
      notes: { markdown: notes, json: dataSecondary },
    }
  )
  .add(
    'call to action',
    () => {
      const name = select('Icon (sample)', iconsList, null, optionalGroupId);
      const iconPosition = select(
        'icon_position',
        iconPositionSettings,
        'after',
        optionalGroupId
      );

      const data = prepareButton(dataCall);
      if (name) {
        data.icon = {
          type: 'ui',
          path: defaultSprite,
          name,
          size: 'xs',
        };

        data.icon_position = iconPosition;
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
      const name = select('Icon (sample)', iconsList, null, optionalGroupId);
      const iconPosition = select(
        'icon_position',
        iconPositionSettings,
        'after',
        optionalGroupId
      );

      const data = prepareButton(dataGhost);
      if (name) {
        data.icon = {
          type: 'ui',
          path: defaultSprite,
          name,
          size: 'xs',
        };

        data.icon_position = iconPosition;
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
      const name = select('Icon (sample)', iconsList, null, optionalGroupId);
      const iconPosition = select(
        'icon_position',
        iconPositionSettings,
        'after',
        optionalGroupId
      );

      const data = prepareButton(dataSearch);
      if (name) {
        data.icon = {
          type: 'ui',
          path: defaultSprite,
          name,
          size: 'xs',
        };

        data.icon_position = iconPosition;
      }

      return button(data);
    },
    {
      notes: { markdown: notes, json: dataSearch },
    }
  );
