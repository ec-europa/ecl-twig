import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import he from 'he';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import dropdown from './ecl-dropdown-legacy.html.twig';
import notes from './README.md';

const prepareDropdown = data => {
  data.button.label = text(
    'button.label',
    data.button.label,
    tabLabels.required
  );
  data.button.icon.path = select(
    'button.icon.path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  data.list.items.forEach((item, i) => {
    item.label = he.decode(
      text(`list.items[${i}].label`, item.label, tabLabels.required)
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Dropdowns legacy', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => dropdown(prepareDropdown(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
