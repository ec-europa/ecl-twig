import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import pageHeaderDataTitle from './demo/data--title';
import pageHeaderDataTitleDescription from './demo/data--title-description';
import pageHeaderDataMetaTitle from './demo/data--meta-title';
import pageHeaderDataMetaTitleDescription from './demo/data--meta-title-description';
import pageHeaderDataEvents from './demo/data--events';
import pageHeaderDataEventsDescription from './demo/data--events-description';
import pageHeaderBackgroundImage from './demo/data--background-image';
import pageHeader from './ecl-page-header.html.twig';
import notes from './README.md';

const preparePageHeader = (data, variant) => {
  data.title = text('title', data.title, tabLabels.required);
  data.description = text('description', data.description, tabLabels.optional);
  data.meta = text('meta', data.meta, tabLabels.optional);

  if (variant === 'event') {
    data.infos.forEach((info, i) => {
      info.text = text(`infos[${i}].text`, info.text, tabLabels.required);
      info.icon.name = select(
        `infos[${i}].icon.name`,
        [info.icon.name],
        info.icon.name,
        tabLabels.required
      );
      info.icon.path = select(
        `infos[${i}].icon.path`,
        [defaultSprite],
        defaultSprite,
        tabLabels.required
      );
      info.icon.type = select(
        `infos[${i}].icon.type`,
        [info.icon.type],
        info.icon.type,
        tabLabels.required
      );
    });
  }

  if (variant === 'img') {
    data.background_image = boolean(
      'background_image',
      data.background_image,
      tabLabels.required
    );
    data.background_image_url = text(
      'background_image_url',
      data.background_image_url,
      tabLabels.optional
    );
  }
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
  data.breadcrumb.icon_file_path = select(
    'breadcrumb.icon_file_path',
    [defaultSprite],
    defaultSprite,
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
  title: 'Components/deprecated/Page Header',
  decorators: [withKnobs, withNotes, withCode],
};

export const Ecl214Title = () =>
  pageHeader(preparePageHeader(pageHeaderDataTitle));

Ecl214Title.story = {
  name: 'ECL < 2.14 title',

  parameters: {
    notes: { markdown: notes, json: pageHeaderDataTitle },
  },
};

export const Ecl214TitleDescription = () =>
  pageHeader(preparePageHeader(pageHeaderDataTitleDescription));

Ecl214TitleDescription.story = {
  name: 'ECL < 2.14 title-description',

  parameters: {
    notes: { markdown: notes, json: pageHeaderDataTitleDescription },
  },
};

export const Ecl214MetaTitle = () =>
  pageHeader(preparePageHeader(pageHeaderDataMetaTitle));

Ecl214MetaTitle.story = {
  name: 'ECL < 2.14 meta-title',

  parameters: {
    notes: { markdown: notes, json: pageHeaderDataMetaTitle },
  },
};

export const Ecl214MetaTitleDescription = () =>
  pageHeader(preparePageHeader(pageHeaderDataMetaTitleDescription));

Ecl214MetaTitleDescription.story = {
  name: 'ECL < 2.14 meta-title-description',

  parameters: {
    notes: { markdown: notes, json: pageHeaderDataMetaTitleDescription },
  },
};

export const Ecl214Events = () =>
  pageHeader(preparePageHeader(pageHeaderDataEvents, 'event'));

Ecl214Events.story = {
  name: 'ECL < 2.14 events',

  parameters: {
    notes: { markdown: notes, json: pageHeaderDataEvents },
  },
};

export const Ecl214EventsDescription = () =>
  pageHeader(preparePageHeader(pageHeaderDataEventsDescription, 'event'));

Ecl214EventsDescription.story = {
  name: 'ECL < 2.14 events-description',

  parameters: {
    notes: { markdown: notes, json: pageHeaderDataEventsDescription },
  },
};

export const Ecl214BackgroundImage = () =>
  pageHeader(preparePageHeader(pageHeaderBackgroundImage, 'img'));

Ecl214BackgroundImage.story = {
  name: 'ECL < 2.14 Background image',

  parameters: {
    notes: { markdown: notes, json: pageHeaderBackgroundImage },
  },
};
