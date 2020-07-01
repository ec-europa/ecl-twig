import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import he from 'he';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataCustom from './demo/data--custom';
import dataCorporate from './demo/data--corporate';
import footer from './ecl-footer.html.twig';
import notes from './README.md';

const iconsList = ['external'];
brandedIcons.forEach(icon => {
  iconsList.push(icon);
});

const prepareFooter = data => {
  if (data.identity) {
    data.identity.title = text(
      'identity.title',
      data.identity.title,
      tabLabels.required
    );
    data.identity.follow.label = text(
      'identity.follow.label',
      data.identity.follow.label,
      tabLabels.required
    );
    data.identity.follow.links.forEach((linkItem, i) => {
      linkItem.link.label = text(
        `identity.follow.links[${i}].link.label`,
        linkItem.link.label,
        tabLabels.required
      );
      linkItem.link.path = text(
        `identity.follow.links[${i}].link.path`,
        linkItem.link.path,
        tabLabels.required
      );

      if (linkItem.icon) {
        linkItem.icon.path = select(
          `identity.follow.links[${i}].icon.path`,
          ['none', defaultSprite],
          defaultSprite,
          tabLabels.required
        );
        if (linkItem.icon.path === 'none') {
          linkItem.icon.path = '';
        } else {
          linkItem.icon.name = select(
            `identity.follow.links[${i}].icon.name`,
            [...iconsList],
            linkItem.icon.name,
            tabLabels.required
          );
        }
      }
    });
  }

  data.sections.forEach((section, i) => {
    section.links.forEach((linkItem, j) => {
      linkItem.link.label = text(
        `sections[${i}].links[${j}].link.label`,
        linkItem.link.label,
        tabLabels.required
      );
      linkItem.link.path = text(
        `sections[${i}].links[${j}].link.path`,
        linkItem.link.path,
        tabLabels.required
      );
      if (linkItem.icon) {
        linkItem.icon.path = select(
          `sections[${i}].links[${j}].icon.path`,
          ['none', defaultSprite],
          defaultSprite,
          tabLabels.required
        );
        if (linkItem.icon.path === 'none') {
          linkItem.icon.path = '';
        } else {
          linkItem.icon.name = select(
            `sections[${i}].links[${j}].icon.name`,
            [...iconsList],
            linkItem.icon.name,
            tabLabels.required
          );
        }
      }
    });
  });

  data.common.forEach((linkItem, i) => {
    linkItem.link.label = he.decode(
      text(`common[${i}].link.label`, linkItem.link.label, tabLabels.required)
    );
    linkItem.link.path = text(
      `common[${i}].link.path`,
      linkItem.link.path,
      tabLabels.required
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/deprecated/Footer',
  decorators: [withCode, withNotes, withKnobs],
};

export const Ecl2120Corporate = () => footer(prepareFooter(dataCorporate));

Ecl2120Corporate.story = {
  name: 'ECL < 2.12.0 - corporate',

  parameters: {
    notes: { markdown: notes, json: dataCorporate },
  },
};

export const Ecl2120Custom = () => footer(prepareFooter(dataCustom));

Ecl2120Custom.story = {
  name: 'ECL < 2.12.0 - custom',

  parameters: {
    notes: { markdown: notes, json: dataCustom },
  },
};
