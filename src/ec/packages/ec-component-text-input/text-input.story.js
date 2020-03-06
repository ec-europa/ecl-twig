/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import {
  withKnobs,
  text,
  select,
  boolean,
  object,
} from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from './demo/data--default';
import textInput from './ecl-text-input.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const statesGroupId = 'States';

const inputWidthOptions = {
  small: 's',
  medium: 'm',
  large: 'l',
};

const prepareTextInput = data => {
  data.label = text('label', data.label, requiredGroupId);
  data.helper_text = text(
    'helper_text',
    "This is the input's helper text.",
    optionalGroupId
  );
  data.invalid = boolean('invalid', false, statesGroupId);
  data.disabled = boolean('disabled', false, statesGroupId);
  data.required = boolean('required', false, statesGroupId);
  if (data.invalid) {
    data.invalid_text = text(
      'invalid_text',
      'This is the error message',
      requiredGroupId
    );
  } else {
    data.invalid_text = text(
      'invalid_text',
      'This is the error message',
      optionalGroupId
    );
  }
  if (data.required) {
    data.required_text = text('required_text', '*', requiredGroupId);
    data.optional_text = text('optional text', '(optional)', optionalGroupId);
  } else {
    data.required_text = text('required_text', '*', optionalGroupId);
    data.optional_text = text('optional text', '(optional)', requiredGroupId);
  }

  data.width = select('width', inputWidthOptions, 'm', optionalGroupId);
  data.extra_classes = text(
    'extra_classes (comma separated)',
    '',
    optionalGroupId
  );
  data.extra_attributes = object(
    'extra_attributes',
    { name: '', value: '' },
    optionalGroupId
  );

  return data;
};

storiesOf('Components/Forms/Text field', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = prepareTextInput(dataDefault);

      return textInput(data);
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  );
