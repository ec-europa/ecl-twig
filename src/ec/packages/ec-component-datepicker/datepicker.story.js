/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, buttonLabels } from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataDefault from './demo/data';
import datepicker from './ecl-datepicker.html.twig';
import notes from './README.md';

const prepareDatePicker = data => {
  data.label = text('label', data.label, buttonLabels.required);
  data.icons_path = select(
    'icons_path',
    [defaultSprite],
    defaultSprite,
    buttonLabels.required
  );
  data.helper_text = text(
    'helper_text',
    data.helper_text,
    buttonLabels.required
  );
  data.invalid = boolean('invalid', false, buttonLabels.cases);
  data.invalid_text = text(
    'invalid_text',
    data.invalid_text,
    buttonLabels.optional
  );
  data.disabled = boolean('disabled', false, buttonLabels.cases);
  data.required = boolean('required', data.required, buttonLabels.cases);
  data.required_text = text(
    'required_text',
    data.required_text,
    buttonLabels.optional
  );
  data.optional_text = text(
    'optional_text',
    data.optional_text,
    buttonLabels.optional
  );
  data.placeholder = text(
    'placeholder',
    data.placeholder,
    buttonLabels.required
  );
  getExtraKnobs(data);

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
