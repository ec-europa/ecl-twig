import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb-standardised/demo/data';
import demoTitleContent from '@ecl/ec-specs-page-header-standardised/demo/data--title';
import demoMetaTitleContent from '@ecl/ec-specs-page-header-standardised/demo/data--meta-title';
import demoMetaTitleDescriptionContent from '@ecl/ec-specs-page-header-standardised/demo/data--meta-title-description';

import pageHeaderStandardisedDocs from './README.md';
import pageHeaderStandardised from './page-header-standardised.html.twig';

function formatBreadcrumbLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

function formatPageHeaderStandardisedInfo(i, index) {
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

function preparePageHeaderStandardisedData(data) {
  const output = {};

  output.breadcrumb = {
    links: breadcrumbContent.items.map(formatBreadcrumbLink),
    navigation_text: breadcrumbContent.label,
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
    output.infos = data.infos.map(formatPageHeaderStandardisedInfo);
  }

  return output;
}

storiesOf('Components/Page Header Standardised', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'title',
    () => {
      const sampleData = preparePageHeaderStandardisedData(demoTitleContent);

      return pageHeaderStandardised(sampleData);
    },
    {
      notes: { markdown: pageHeaderStandardisedDocs },
    }
  )
  .add(
    'meta-title',
    () => {
      const sampleData = preparePageHeaderStandardisedData(
        demoMetaTitleContent
      );

      return pageHeaderStandardised(sampleData);
    },
    {
      notes: { markdown: pageHeaderStandardisedDocs },
    }
  )
  .add(
    'meta-title-description',
    () => {
      const sampleData = preparePageHeaderStandardisedData(
        demoMetaTitleDescriptionContent
      );

      return pageHeaderStandardised(sampleData);
    },
    {
      notes: { markdown: pageHeaderStandardisedDocs },
    }
  );
