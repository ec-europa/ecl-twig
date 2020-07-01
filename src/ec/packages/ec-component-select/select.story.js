import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  getFormKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import specData from './demo/data';

import selectBox from './ecl-select.html.twig';
import notes from './README.md';

const prepareSelect = data => {
  getFormKnobs(data);

  data.icon_path = select(
    'icon_path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );

  data.options.forEach((option, i) => {
    option.label = text(
      `options[${i}].label`,
      option.label,
      tabLabels.required
    );
    option.value = text(
      `options[${i}].value`,
      option.value,
      tabLabels.required
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Forms/Select',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => selectBox(prepareSelect(specData));

Default.story = {
  name: 'default',

  parameters: {
    notes: { markdown: notes, json: specData },
  },
};
