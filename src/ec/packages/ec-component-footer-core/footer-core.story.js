/* eslint-disable no-shadow */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import specs from './demo/data';
import footer from './ecl-footer-core.html.twig';
import notes from './README.md';

// Prepare the knobs.
const formatFooter = data => {
  data.sections.forEach((section, i) => {
    if (section.title) {
      section.title.link.label = text(
        `sections[${i}].title.link.label`,
        section.title.link.label,
        tabLabels.required
      );
      section.title.link.path = text(
        `sections[${i}].title.link.path`,
        section.title.link.path,
        tabLabels.required
      );
      section.description = text(
        `sections[${i}].description`,
        section.description,
        tabLabels.required
      );
    }

    if (section.links) {
      section.links.forEach((link, index) => {
        link.link.label = text(
          `sections[${i}].links[${index}].link.label`,
          link.link.label,
          tabLabels.required
        );
        link.link.path = text(
          `sections[${i}].links[${index}].link.path`,
          link.link.path,
          tabLabels.required
        );

        if (link.icon) {
          link.icon.name = text(
            `sections[${i}].links[${index}].icon.name`,
            link.icon.name,
            tabLabels.required
          );
          link.icon.path = text(
            `sections[${i}].links[${index}].icon.path`,
            defaultSprite,
            tabLabels.required
          );
          link.icon.size = text(
            `sections[${i}].links[${index}].icon.size`,
            link.icon.size,
            tabLabels.required
          );
        }
      });
    }

    if (section.section_class_name) {
      section.section_class_name = text(
        `sections[${i}].section_class_name`,
        section.section_class_name,
        tabLabels.required
      );
    }

    if (section.list_class_name) {
      section.list_class_name = text(
        `sections[${i}].list_class_name`,
        section.list_class_name,
        tabLabels.required
      );
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Footers/Core', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add('default', () => footer(formatFooter(specs)), {
    notes: { markdown: notes, json: specs },
  });
