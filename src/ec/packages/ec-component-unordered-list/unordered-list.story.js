import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import he from 'he';
import withCode from '@ecl-twig/storybook-addon-code';

import dataDefault from '@ecl/ec-specs-list/demo/data--text';
import dataLink from '@ecl/ec-specs-list/demo/data--link';
import dataLinkDivider from '@ecl/ec-specs-list/demo/data--link-divider';
import dataLinkNoBullet from '@ecl/ec-specs-list/demo/data--link-no-bullet';

import unorderedList from './ecl-unordered-list.html.twig';
import notes from './README.md';

const prepareUnorderedList = data => {
  if (data.variant) {
    data.variant = select(
      'variant',
      [data.variant],
      data.variant,
      tabLabels.required
    );
  }
  data.items.forEach((item, i) => {
    item.label = he.decode(
      text(`items[${i}].label`, item.label, tabLabels.required)
    );

    if (item.nested) {
      item.nested.forEach((n, ind) => {
        n.label = he.decode(
          text(`items[${i}].nested[${ind}].label`, n.label, tabLabels.optional)
        );
      });
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/List/Unordered list',
  decorators: [withNotes, withCode, withKnobs],
};

export const Default = () => unorderedList(prepareUnorderedList(dataDefault));

Default.story = {
  name: 'default',

  parameters: {
    notes: { markdown: notes, json: dataDefault },
  },
};

export const Divider = () =>
  unorderedList(prepareUnorderedList(dataLinkDivider));

Divider.story = {
  name: 'with divider',

  parameters: {
    notes: { markdown: notes, json: dataLinkDivider },
  },
};

export const Links = () => unorderedList(prepareUnorderedList(dataLink));

Links.story = {
  name: 'with links',

  parameters: {
    notes: { markdown: notes },
  },
};

export const NoBullet = () =>
  unorderedList(prepareUnorderedList(dataLinkNoBullet));

NoBullet.story = {
  name: 'no bullet',

  parameters: {
    notes: { markdown: notes },
  },
};
