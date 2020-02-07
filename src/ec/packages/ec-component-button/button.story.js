import merge from 'deepmerge';
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

const prepareButton = data => {
  const dataWithIcon = data;
  dataWithIcon.icon = {
    type: 'ui',
    path: defaultSprite,
    size: 'xs',
  };

  return dataWithIcon;
};

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'primary',
    () =>
      button(
        merge(prepareButton(dataPrimary), {
          icon: {
            name: select('Icon (sample)', iconsList, null),
          },
          label: text('label', dataPrimary.label),
          icon_position: select('Icon position', iconPositionSettings, 'after'),
          disabled: boolean('Disabled', false),
        })
      ),
    {
      notes: { markdown: notes, json: prepareButton(dataPrimary) },
    }
  )
  .add(
    'secondary',
    () =>
      button(
        merge(dataSecondary, {
          icon: {
            name: select('Icon (sample)', iconsList, null),
          },
          label: text('label', dataSecondary.label),
          icon_position: select('Icon position', iconPositionSettings, 'after'),
          disabled: boolean('Disabled', false),
        })
      ),
    {
      notes: { markdown: notes, json: prepareButton(dataSecondary) },
    }
  )
  .add(
    'call to action',
    () =>
      button(
        merge(prepareButton(dataCall), {
          icon: {
            name: select('Icon (sample)', iconsList, null),
          },
          label: text('label', dataCall.label),
          icon_position: select('Icon position', iconPositionSettings, 'after'),
          disabled: boolean('Disabled', false),
        })
      ),
    {
      notes: { markdown: notes, json: prepareButton(dataCall) },
    }
  )
  .add(
    'text',
    () =>
      button(
        merge(prepareButton(dataGhost), {
          icon: {
            name: select('Icon (sample)', iconsList, null),
          },
          label: text('label', dataGhost.label),
          icon_position: select('Icon position', iconPositionSettings, 'after'),
          disabled: boolean('Disabled', false),
        })
      ),
    {
      notes: { markdown: notes, json: prepareButton(dataGhost) },
    }
  )
  .add(
    'search',
    () =>
      button(
        merge(prepareButton(dataSearch), {
          icon: {
            name: select('Icon (sample)', iconsList, null),
          },
          label: text('label', dataSearch.label),
          icon_position: select('Icon position', iconPositionSettings, 'after'),
          disabled: boolean('Disabled', false),
        })
      ),
    {
      notes: { markdown: notes, json: prepareButton(dataSearch) },
    }
  );
