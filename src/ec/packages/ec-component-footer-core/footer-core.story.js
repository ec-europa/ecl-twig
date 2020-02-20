import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text } from '@storybook/addon-knobs';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
/* eslint-disable no-param-reassign, no-shadow */

import specs from './demo/data';
import footer from './ecl-footer-core.html.twig';
import notes from './README.md';

const data = [...specs.sections];
// Labels for the buttons.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
// Prepare the knobs.
const formatFooter = data => {
  // Site name.
  data[0].title.link = {
    label: text(
      'sections[0].title.link.label',
      data[0].title.link.label,
      requiredGroupId
    ),
    path: text(
      'sections[0].title.link.path',
      data[0].title.link.path,
      requiredGroupId
    ),
    placeholder: text('optional elements', 'none', optionalGroupId),
  };
  // Class navigation.
  data[1].links.forEach((link, index) => {
    data[1].links[index].link.label = text(
      `sections[1].links[${index}].link.label`,
      data[1].links[index].link.label,
      requiredGroupId
    );
    data[1].links[index].link.path = text(
      `sections[1].links[${index}].link.path`,
      data[1].links[index].link.path,
      requiredGroupId
    );
    data[1].section_class_name = text(
      `sections[1].section_class_name`,
      data[1].section_class_name,
      requiredGroupId
    );
    data[1].list_class_name = text(
      `sections[1].list_class_name`,
      data[1].list_class_name,
      requiredGroupId
    );
  });
  // Service navigation.
  data[2].links.forEach((link, index) => {
    data[2].links[index].link.label = text(
      `sections[2].links[${index}].link.label`,
      data[2].links[index].link.label,
      requiredGroupId
    );
    data[2].links[index].link.path = text(
      `sections[2].links[${index}].link.path`,
      data[2].links[index].link.path,
      requiredGroupId
    );
    if (link.icon) {
      data[2].links[index].icon.name = text(
        `sections[2].links[${index}].icon.name`,
        data[2].links[index].icon.name,
        requiredGroupId
      );
      data[2].links[index].icon.path = text(
        `sections[2].links[${index}].icon.path`,
        defaultSprite,
        requiredGroupId
      );
      data[2].links[index].icon.size = text(
        `sections[2].links[${index}].icon.size`,
        data[2].links[index].icon.size,
        requiredGroupId
      );
    }
  });
  // Legal navigation.
  data[3].links.forEach((link, index) => {
    data[3].links[index].link.label = text(
      `sections[3].links[${index}].link.label`,
      data[3].links[index].link.label,
      requiredGroupId
    );
    data[3].links[index].link.path = text(
      `sections[3].links[${index}].link.path`,
      data[3].links[index].link.path,
      requiredGroupId
    );
  });

  // Return the full specs.
  return data;
};

storiesOf('Components/Footers/Core', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add('default', () => footer({ sections: formatFooter(data) }), {
    notes: { markdown: notes, json: { sections: data } },
  });
