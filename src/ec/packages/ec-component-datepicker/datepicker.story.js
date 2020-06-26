import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getFormKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data';
import datepicker from './ecl-datepicker.html.twig';
import notes from './README.md';

const prepareDatePicker = data => {
  getFormKnobs(data);

  data.label = text('label', data.label, tabLabels.required);
  data.icons_path = select(
    'icons_path',
    ['none', defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  if (data.icons_path === 'none') {
    data.icons_path = false;
  }
  data.placeholder = text('placeholder', data.placeholder, tabLabels.required);

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/Datepicker',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => {
  return datepicker(prepareDatePicker(dataDefault));
};

Default.story = {
  name: 'default',

  parameters: {
    notes: { markdown: notes, json: dataDefault },
  },
};
