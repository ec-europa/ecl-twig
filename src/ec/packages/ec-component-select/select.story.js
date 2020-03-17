/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  getFormKnobs,
  buttonLabels,
} from '@ecl-twig/story-utils';

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
    buttonLabels.required
  );

  data.options.forEach((option, i) => {
    option.label = text(
      `options[${i}].label`,
      option.label,
      buttonLabels.required
    );
    option.value = text(
      `options[${i}].value`,
      option.value,
      buttonLabels.required
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
