import { storiesOf } from '@storybook/html';
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

const iconOptions = {
  none: false,
  defaultSprite,
};

const prepareDatePicker = data => {
  getFormKnobs(data);

  data.label = text('label', data.label, tabLabels.required);
  data.icons_path = select(
    'icons_path',
    iconOptions,
    defaultSprite,
    tabLabels.required
  );
  data.placeholder = text('placeholder', data.placeholder, tabLabels.required);

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Forms/Datepicker', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'default',
    () => {
      return datepicker(prepareDatePicker(dataDefault));
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  );
