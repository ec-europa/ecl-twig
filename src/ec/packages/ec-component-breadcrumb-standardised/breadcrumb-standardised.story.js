import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import {
  getExtraKnobs,
  tabLabels,
  getLinkKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataSimple from './demo/data--simple';
import dataLong from './demo/data';

import breadcrumb from './ecl-breadcrumb-standardised.html.twig';
import notes from './README.md';

const prepareBreadcrumbStandardised = data => {
  data.icon_file_path = optionsKnob(
    'icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.navigation_text = text(
    'navigation_text',
    data.navigation_text,
    tabLabels.required
  );
  data.ellipsis_label = text(
    'ellipsis_label',
    data.ellipsis_label,
    tabLabels.required
  );

  getLinkKnobs(data);
  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Navigation/Breadcrumbs/Breadcrumb Standardised',
  decorators: [withNotes, withCode, withKnobs],
};

export const Simple = () =>
  breadcrumb(prepareBreadcrumbStandardised(dataSimple));

Simple.story = {
  name: 'simple',

  parameters: {
    notes: { markdown: notes, json: dataSimple },
  },
};

export const Long = () => breadcrumb(prepareBreadcrumbStandardised(dataLong));

Long.story = {
  name: 'long',

  parameters: {
    notes: { markdown: notes, json: dataLong },
  },
};
