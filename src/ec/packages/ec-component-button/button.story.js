import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getIconKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
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
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Button',
  decorators: [withKnobs, withCode, withNotes],
};

export const Primary = () => {
  const data = prepareButton(dataPrimary);
  const name = select('icon.name', iconsList, null, tabLabels.optional);
  if (name !== null) {
    getIconKnobs(data, name, 'ui', 'xs');
  } else if (name === null && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

Primary.story = {
  name: 'primary',

  parameters: {
    notes: { markdown: notes, json: dataPrimary },
  },
};

export const Secondary = () => {
  const data = prepareButton(dataSecondary);
  const name = select('icon.name', iconsList, null, tabLabels.optional);
  if (name !== null) {
    getIconKnobs(data, name, 'ui', 'xs');
  } else if (name === null && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

Secondary.story = {
  name: 'secondary',

  parameters: {
    notes: { markdown: notes, json: dataSecondary },
  },
};

export const CallToAction = () => {
  const data = prepareButton(dataCall);
  const name = select(
    'icon.name',
    iconsList,
    'corner-arrow',
    tabLabels.optional
  );
  if (name !== null) {
    getIconKnobs(data, name, 'ui', 'xs', 'default', 'rotate-90');
  } else if (name === null && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

CallToAction.story = {
  name: 'call to action',

  parameters: {
    notes: { markdown: notes, json: dataCall },
  },
};

export const Text = () => {
  const data = prepareButton(dataGhost);
  const name = select('icon.name', iconsList, null, tabLabels.optional);
  if (name !== null) {
    getIconKnobs(data, name, 'ui', 'xs');
  } else if (name === null && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

Text.story = {
  name: 'text',

  parameters: {
    notes: { markdown: notes, json: dataGhost },
  },
};

export const Search = () => {
  const data = prepareButton(dataSearch);
  const name = select('icon.name', iconsList, null, tabLabels.optional);
  if (name !== null) {
    getIconKnobs(data, name, 'ui', 'xs');
  } else if (name === null && data.icon) {
    delete data.icon.name;
  }

  return button(data);
};

Search.story = {
  name: 'search',

  parameters: {
    notes: { markdown: notes, json: dataSearch },
  },
};
