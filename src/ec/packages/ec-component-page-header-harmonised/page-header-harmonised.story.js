import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import breadcrumbDataSimple from '@ecl/ec-specs-breadcrumb-core/demo/data-simple';

import pageHeaderHarmonisedDataTitle from '@ecl/ec-specs-page-header-harmonised/demo/data--title';
import pageHeaderHarmonisedDataMetaTitle from '@ecl/ec-specs-page-header-harmonised/demo/data--meta-title';
import pageHeaderHarmonisedDataMetaTitleDescription from '@ecl/ec-specs-page-header-harmonised/demo/data--meta-title-description';

import pageHeaderHarmonisedDocs from './README.md';
import pageHeaderHarmonised from './page-header-harmonised.html.twig';

function formatBreadcrumbLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

function formatPageHeaderHarmonisedInfo(i, index) {
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

function preparePageHeaderHarmonisedData(data) {
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
    output.infos = data.infos.map(formatPageHeaderHarmonisedInfo);
  }

  return output;
}

storiesOf('Components/Page Headers/Page Header Harmonised', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'title',
    () => {
      const sampleData = preparePageHeaderHarmonisedData(
        pageHeaderHarmonisedDataTitle
      );

      return pageHeaderHarmonised(sampleData);
    },
    {
      notes: { markdown: pageHeaderHarmonisedDocs },
    }
  )
  .add(
    'meta-title',
    () => {
      const sampleData = preparePageHeaderHarmonisedData(
        pageHeaderHarmonisedDataMetaTitle
      );

      return pageHeaderHarmonised(sampleData);
    },
    {
      notes: { markdown: pageHeaderHarmonisedDocs },
    }
  )
  .add(
    'meta-title-description',
    () => {
      const sampleData = preparePageHeaderHarmonisedData(
        pageHeaderHarmonisedDataMetaTitleDescription
      );

      return pageHeaderHarmonised(sampleData);
    },
    {
      notes: { markdown: pageHeaderHarmonisedDocs },
    }
  );
