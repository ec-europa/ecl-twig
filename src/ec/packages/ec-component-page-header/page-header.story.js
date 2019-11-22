import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import breadcrumbDataSimple from '@ecl/ec-specs-breadcrumb/demo/data-simple';

import pageHeaderDataTitle from '@ecl/ec-specs-page-header/demo/data-title';
import pageHeaderDataTitleDescription from '@ecl/ec-specs-page-header/demo/data-title-description';
import pageHeaderDataMetaTitle from '@ecl/ec-specs-page-header/demo/data-meta-title';
import pageHeaderDataMetaTitleDescription from '@ecl/ec-specs-page-header/demo/data-meta-title-description';
import pageHeaderDataEvents from '@ecl/ec-specs-page-header/demo/data-events';
import pageHeaderDataEventsDescription from '@ecl/ec-specs-page-header/demo/data-events-description';

import pageHeader from './ecl-page-header.html.twig';
import notes from './README.md';

function formatBreadcrumbLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

function formatPageHeaderInfo(i, index) {
  const iconType = i.icon.split('--');
  const info = {
    text: text(`Info ${index} text`, i.text),
    icon: {
      type: iconType[0],
      name: iconType[1],
      path: defaultSprite,
    },
  };

  return info;
}

function preparePageHeaderData(data) {
  const output = {};

  output.breadcrumb = {
    links: breadcrumbDataSimple.items.map(formatBreadcrumbLink),
    navigation_text: breadcrumbDataSimple.label,
    icon_file_path: defaultSprite,
  };

  output.title = text('Title', data.title);

  if (data.description) {
    output.description = text('Description', data.description);
  }

  if (data.meta) {
    output.meta = text('Meta', data.meta);
  }

  if (data.infos) {
    output.infos = data.infos.map(formatPageHeaderInfo);
  }

  return output;
}

storiesOf('Components/deprecated/Page Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'ECL < 2.14 title',
    () => {
      const sampleData = preparePageHeaderData(pageHeaderDataTitle);

      return pageHeader(sampleData);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageHeaderData(pageHeaderDataTitle),
      },
    }
  )
  .add(
    'ECL < 2.14 title-description',
    () => {
      const sampleData = preparePageHeaderData(pageHeaderDataTitleDescription);

      return pageHeader(sampleData);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageHeaderData(pageHeaderDataTitleDescription),
      },
    }
  )
  .add(
    'ECL < 2.14 meta-title',
    () => {
      const sampleData = preparePageHeaderData(pageHeaderDataMetaTitle);

      return pageHeader(sampleData);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageHeaderData(pageHeaderDataTitle),
      },
    }
  )
  .add(
    'ECL < 2.14 meta-title-description',
    () => {
      const sampleData = preparePageHeaderData(
        pageHeaderDataMetaTitleDescription
      );

      return pageHeader(sampleData);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageHeaderData(pageHeaderDataMetaTitleDescription),
      },
    }
  )
  .add(
    'ECL < 2.14 events',
    () => {
      const sampleData = preparePageHeaderData(pageHeaderDataEvents);

      return pageHeader(sampleData);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageHeaderData(pageHeaderDataEvents),
      },
    }
  )
  .add(
    'ECL < 2.14 events-description',
    () => {
      const sampleData = preparePageHeaderData(pageHeaderDataEventsDescription);

      return pageHeader(sampleData);
    },
    {
      notes: {
        markdown: notes,
        json: preparePageHeaderData(pageHeaderDataEventsDescription),
      },
    }
  );
