import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import euLogoMobile from '@ecl/eu-resources-logo/condensed-version/positive/en.svg';
import euLogoDesktop from '@ecl/eu-resources-logo/standard-version/positive/en.svg';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import specs from './demo/data';
import euSpecs from './demo/eu-data';
import footer from './ecl-footer-core.html.twig';
import notes from './README.md';

// Handle the EU demo.
let systemSpec = specs;
if (process.env.STORYBOOK_SYSTEM === 'EU') {
  systemSpec = euSpecs;
  euSpecs.system = 'EU';
}

// Prepare the knobs.
const formatFooter = data => {
  data.sections.forEach((section, i) => {
    if (section.logo) {
      section.logo.path = text(
        `sections[${i}].logo.path`,
        section.logo.path,
        tabLabels.required
      );
      section.logo.title = text(
        `sections[${i}].logo.title`,
        section.logo.title,
        tabLabels.required
      );
      section.logo.alt = text(
        `sections[${i}].logo.alt`,
        section.logo.alt,
        tabLabels.required
      );
      section.logo.src_mobile = optionsKnob(
        `sections[${i}].logo.src_mobile`,
        { current: euLogoMobile, 'no path': '' },
        euLogoMobile,
        { display: 'inline-radio' },
        tabLabels.required
      );
      section.logo.src_desktop = optionsKnob(
        `sections[${i}].logo.src_desktop`,
        { current: euLogoDesktop, 'no path': '' },
        euLogoDesktop,
        { display: 'inline-radio' },
        tabLabels.required
      );
    }
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
      section.links.forEach((link, j) => {
        link.link.label = text(
          `sections[${i}].links[${j}].link.label`,
          link.link.label,
          tabLabels.required
        );
        link.link.path = text(
          `sections[${i}].links[${j}].link.path`,
          link.link.path,
          tabLabels.required
        );

        if (link.icon) {
          link.icon.name = text(
            `sections[${i}].links[${j}].icon.name`,
            link.icon.name,
            tabLabels.required
          );
          link.icon.path = text(
            `sections[${i}].links[${j}].icon.path`,
            defaultSprite,
            tabLabels.required
          );
          link.icon.size = text(
            `sections[${i}].links[${j}].icon.size`,
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
  // Not in EU.
  if (!data.system) {
    getComplianceKnob(data);
  }

  return data;
};

export default {
  title: 'Components/Footers/Core',
  decorators: [withCode, withNotes, withKnobs],
};

export const Default = () => footer(formatFooter(systemSpec));

Default.story = {
  name: 'default',

  parameters: {
    notes: { markdown: notes, json: systemSpec },
  },
};
