/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import {
  withKnobs,
  text,
  boolean,
  select,
  object,
} from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, tabLabels } from '@ecl-twig/story-utils';

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

const pageHeaderDataEventsInfo = [];
const pageHeaderDataEventsDescriptioninfo = [];

pageHeaderDataEvents.infos.forEach((item, key) => {
  pageHeaderDataEventsInfo.push(pageHeaderDataEvents.infos[key].text);
  pageHeaderDataEvents.infos[key].text = '';
});

pageHeaderDataEventsDescription.infos.forEach((item, key) => {
  pageHeaderDataEventsDescriptioninfo.push(
    pageHeaderDataEventsDescription.infos[key].text
  );
  pageHeaderDataEventsDescription.infos[key].text = '';
});

const preparePageHeader = data => {
  data.title = text('title', data.title, tabLabels.required);
  data.description = text('description', data.description, tabLabels.optional);

  if (data.meta) {
    data.meta = text('meta', data.meta, tabLabels.optional);
  }
  if (data.infos) {
    data.infos.forEach((info, i) => {
      info.text = text(`Info[${i}].text`, info.text, tabLabels.required);
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
  data.background_image = boolean(
    'background_image',
    data.background_image,
    tabLabels.required
  );
  if (data.background_image) {
    data.background_image_url = text(
      'background_image_url',
      data.background_image_url,
      tabLabels.optional
    );
  }
  data.breadcrumb.icon_file_path = select(
    'breadcrumb.icon_file_path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  data.breadcrumb = object(
    'data.breadcrumb',
    data.breadcrumb,
    tabLabels.optional
  );

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/deprecated/Page Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'ECL < 2.14 title',
    () => pageHeader(preparePageHeader(pageHeaderDataTitle)),
    {
      notes: { markdown: notes, json: pageHeaderDataTitle },
    }
  )
  .add(
    'ECL < 2.14 title-description',
    () => pageHeader(preparePageHeader(pageHeaderDataTitleDescription)),
    {
      notes: { markdown: notes, json: pageHeaderDataTitleDescription },
    }
  )
  .add(
    'ECL < 2.14 meta-title',
    () => pageHeader(preparePageHeader(pageHeaderDataMetaTitle)),
    {
      notes: { markdown: notes, json: pageHeaderDataMetaTitle },
    }
  )
  .add(
    'ECL < 2.14 meta-title-description',
    () => pageHeader(preparePageHeader(pageHeaderDataMetaTitleDescription)),
    {
      notes: { markdown: notes, json: pageHeaderDataMetaTitleDescription },
    }
  )
  .add(
    'ECL < 2.14 events',
    () => pageHeader(preparePageHeader(pageHeaderDataEvents)),
    {
      notes: { markdown: notes, json: pageHeaderDataEvents },
    }
  )
  .add(
    'ECL < 2.14 events-description',
    () => pageHeader(preparePageHeader(pageHeaderDataEventsDescription)),
    {
      notes: { markdown: notes, json: pageHeaderDataEventsDescription },
    }
  )
  .add(
    'ECL < 2.14 Background image',
    () => pageHeader(preparePageHeader(pageHeaderBackgroundImage)),
    {
      notes: { markdown: notes, json: pageHeaderBackgroundImage },
    }
  );
