import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, tabLabels, getIconKnobs } from '@ecl-twig/story-utils';
// Import data for demos
import dataPrimary from '@ecl/ec-specs-button/demo/data--primary';
import dataSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import dataCall from '@ecl/ec-specs-button/demo/data--call';
import dataGhost from '@ecl/ec-specs-button/demo/data--ghost';
import dataSearch from '@ecl/ec-specs-button/demo/data--search';

import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import button from './ecl-button.html.twig';
import notes from './README.md';

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

// Preserve the adapted specs.
const prepareButton = data => {
  data.disabled = boolean('disabled', data.disabled, tabLabels.states);
  data.label = text('label', data.label, tabLabels.required);

  data.variant = select(
    'variant',
    [data.variant],
    data.variant,
    tabLabels.required
  );

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'primary',
    () => {
      const data = prepareButton(dataPrimary);
      const name = select('icon.name', iconsList, null, tabLabels.optional);
      if (name !== null) {
        getIconKnobs(data, name, 'ui', 'xs');
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
      const name = select('icon.name', iconsList, null, tabLabels.optional);
      if (name !== null) {
        getIconKnobs(data, name, 'ui', 'xs');
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
      const name = select(
        'icon.name',
        iconsList,
        'corner-arrow',
        tabLabels.optional
      );
      if (name !== null) {
        getIconKnobs(data, name, 'ui', 'xs', 'default', 'rotate-90');
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
      const name = select('icon.name', iconsList, null, tabLabels.optional);
      if (name !== null) {
        getIconKnobs(data, name, 'ui', 'xs');
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
      const name = select('icon.name', iconsList, null, tabLabels.optional);
      if (name !== null) {
        getIconKnobs(data, name, 'ui', 'xs');
      }

      return button(data);
    },
    {
      notes: { markdown: notes, json: dataSearch },
    }
  );
