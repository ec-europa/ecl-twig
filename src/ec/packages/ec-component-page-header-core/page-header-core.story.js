import he from 'he';
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoBackgroundImage from './demo/data--background-image';
import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';
import euDemoTitleContent from './demo/eu-data--title';
import euDemoMetaTitleContent from './demo/eu-data--meta-title';
import euDemoMetaTitleDescriptionContent from './demo/eu-data--meta-title-description';
import euDemoBackgroundImage from './demo/eu-data--background-image';

import pageHeaderCore from './ecl-page-header-core.html.twig';
import notes from './README.md';

// Handle the EU demo.
const system = process.env.STORYBOOK_SYSTEM
  ? process.env.STORYBOOK_SYSTEM
  : false;

const dataTitle = system ? euDemoTitleContent : demoTitleContent;
const dataMetaTitle = system ? euDemoMetaTitleContent : demoMetaTitleContent;
const dataMetaTitleDescription = system
  ? euDemoMetaTitleDescriptionContent
  : demoMetaTitleDescriptionContent;
const dataBackgroundImage = system
  ? euDemoBackgroundImage
  : demoBackgroundImage;

const preparePageHeaderCore = (data, desc, meta, img) => {
  data.title = he.decode(text('title', data.title, tabLabels.required));
  if (meta) {
    data.meta = text('meta', data.meta, tabLabels.optional);
  }
  if (desc) {
    data.description = he.decode(
      text('description', data.description, tabLabels.optional)
    );
  }
  if (img) {
    data.background_image = boolean(
      'background_image',
      data.background_image,
      tabLabels.required
    );
    data.background_image_url = text(
      'background_image_url',
      data.background_image_url,
      tabLabels.required
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
  for (const [i, item] of data.breadcrumb.links.entries()) {
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
  }
  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Page Headers/Page Header Core',
  decorators: [withNotes, withCode, withKnobs],
};

export const Title = () => pageHeaderCore(preparePageHeaderCore(dataTitle));

Title.storyName = 'title';
Title.parameters = { notes: { markdown: notes, json: dataTitle } };

export const MetaTitle = () =>
  pageHeaderCore(preparePageHeaderCore(dataMetaTitle, false, true));

MetaTitle.storyName = 'meta-title';
MetaTitle.parameters = { notes: { markdown: notes, json: dataMetaTitle } };

export const MetaTitleDescription = () =>
  pageHeaderCore(preparePageHeaderCore(dataMetaTitleDescription, true, true));

MetaTitleDescription.storyName = 'meta-title-description';
MetaTitleDescription.parameters = {
  notes: { markdown: notes, json: dataMetaTitleDescription },
};

export const BackgroundImage = () =>
  pageHeaderCore(preparePageHeaderCore(dataBackgroundImage, true, true, true));

BackgroundImage.storyName = 'background image';
BackgroundImage.parameters = {
  notes: { markdown: notes, json: dataBackgroundImage },
};
