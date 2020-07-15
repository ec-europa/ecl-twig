import { withKnobs, text, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';
import pageHeaderStandardised from './ecl-page-header-standardised.html.twig';
import notes from './README.md';

const preparePageHeaderStandardised = (data, desc, meta) => {
  data.title = text('title', data.title, tabLabels.required);
  if (meta) {
    data.meta = text('meta', data.meta, tabLabels.optional);
  }
  if (desc) {
    data.description = text(
      'description',
      data.description,
      tabLabels.optional
    );
  }
  data.breadcrumb.icon_file_path = optionsKnob(
    'breadcrumb.icon_file_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.required
  );
  data.breadcrumb.ellipsis_label = text(
    'breadcrumb.ellipsis_label',
    data.breadcrumb.ellipsis_label,
    tabLabels.required
  );
  data.breadcrumb.navigation_text = text(
    'breadcrumb.navigation_text',
    data.breadcrumb.navigation_text,
    tabLabels.required
  );
  data.breadcrumb.links.forEach((item, i) => {
    item.label = text(
      `data.breadcrumb.links[${i}].label`,
      item.label,
      tabLabels.required
    );
    item.path = text(
      `data.breadcrumb.links[${i}].path`,
      item.path,
      tabLabels.required
    );
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Page Headers/Page Header Standardised',
  decorators: [withNotes, withCode, withKnobs],
};

export const Title = () =>
  pageHeaderStandardised(preparePageHeaderStandardised(demoTitleContent));

Title.story = {
  name: 'title',

  parameters: {
    notes: { markdown: notes, json: demoTitleContent },
  },
};

export const MetaTitle = () =>
  pageHeaderStandardised(
    preparePageHeaderStandardised(demoMetaTitleContent, false, true)
  );

MetaTitle.story = {
  name: 'meta-title',

  parameters: {
    notes: { markdown: notes, json: demoMetaTitleContent },
  },
};

export const MetaTitleDescription = () =>
  pageHeaderStandardised(
    preparePageHeaderStandardised(demoMetaTitleDescriptionContent, true, true)
  );

MetaTitleDescription.story = {
  name: 'meta-title-description',

  parameters: {
    notes: {
      markdown: notes,
      json: demoMetaTitleDescriptionContent,
    },
  },
};
