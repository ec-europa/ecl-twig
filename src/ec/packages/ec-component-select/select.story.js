/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, getFormKnobs, tabLabels } from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import specData from './demo/data';

import selectBox from './ecl-select.html.twig';
import notes from './README.md';

const prepareSelect = data => {
  getFormKnobs(data);
  getExtraKnobs(data);

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

  return data;
};

storiesOf('Components/Forms/Select', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const dataStory = prepareSelect(specData);

      return selectBox(dataStory);
    },
    {
      notes: { markdown: notes, json: specData },
    }
  );
