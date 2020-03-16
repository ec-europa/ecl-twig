/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import specs from '@ecl/ec-specs-skip-link/demo/data';
import skipLink from './ecl-skip-link.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const statesGroupId = 'States';

// Buttons for the demo.
const btnTabLabel = 'Focus on/off';
const btnTabHandler = () => {
  const skipLinkEl = document.querySelector('.ecl-skip-link');
  if (skipLinkEl !== document.activeElement) {
    skipLinkEl.focus();
  } else {
    document.activeElement.blur();
  }
  // Prevent the story from being reloaded.
  return false;
};

const prepareSkipLink = data => {
  data.label = text('label', data.label, requiredGroupId);
  data.href = text('href', data.href, requiredGroupId);
  data.extra_classes = text('extra_classes', '', optionalGroupId);
  const attribute1Name = text('extra_attributes[0].name', '', optionalGroupId);
  // First attribute.
  if (attribute1Name !== '') {
    data.extra_attributes = [];
    let attribute = {};
    const attribute1Value = text(
      'extra_attributes[0].value',
      '',
      optionalGroupId
    );
    const attribute2Name = text(
      'extra_attributes[1].name',
      '',
      optionalGroupId
    );
    attribute.name = attribute1Name;
    if (attribute1Value !== '') {
      attribute.value = attribute1Value;
    }
    data.extra_attributes.push(attribute);
    // Second attribute.
    if (attribute2Name !== '') {
      const attribute2Value = text(
        'extra_attributes[1].value',
        '',
        optionalGroupId
      );
      attribute = {};
      attribute.name = attribute2Name;
      if (attribute2Value !== '') {
        attribute.value = attribute2Value;
      }
      data.extra_attributes.push(attribute);
    }
  } else {
    delete data.extra_attributes;
  }

  return data;
};

storiesOf('Components/Navigation/Skip Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      button(btnTabLabel, btnTabHandler, statesGroupId);
      const dataStory = prepareSkipLink(specs);

      return skipLink(dataStory);
    },
    {
      notes: { markdown: notes, json: specs },
    }
  );
