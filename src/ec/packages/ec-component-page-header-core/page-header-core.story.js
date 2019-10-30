import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import breadcrumbDataSimple from '@ecl/ec-specs-breadcrumb-core/demo/data-simple';

import PageHeaderCoreDataTitle from '@ecl/ec-specs-page-header-core/demo/data--title';
import PageHeaderCoreDataMetaTitle from '@ecl/ec-specs-page-header-core/demo/data--meta-title';
import PageHeaderCoreDataMetaTitleDescription from '@ecl/ec-specs-page-header-core/demo/data--meta-title-description';

import PageHeaderCoreDocs from './README.md';
import PageHeaderCore from './page-header-core.html.twig';

function formatBreadcrumbLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

function formatPageHeaderCoreInfo(i, index) {
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

function preparePageHeaderCoreData(data) {
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
    output.infos = data.infos.map(formatPageHeaderCoreInfo);
  }

  return output;
}

storiesOf('Components/Page Headers/Page Header Core', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'title',
    () => {
      const sampleData = preparePageHeaderCoreData(PageHeaderCoreDataTitle);

      return PageHeaderCore(sampleData);
    },
    {
      notes: { markdown: PageHeaderCoreDocs },
    }
  )
  .add(
    'meta-title',
    () => {
      const sampleData = preparePageHeaderCoreData(PageHeaderCoreDataMetaTitle);

      return PageHeaderCore(sampleData);
    },
    {
      notes: { markdown: PageHeaderCoreDocs },
    }
  )
  .add(
    'meta-title-description',
    () => {
      const sampleData = preparePageHeaderCoreData(
        PageHeaderCoreDataMetaTitleDescription
      );

      return PageHeaderCore(sampleData);
    },
    {
      notes: { markdown: PageHeaderCoreDocs },
    }
  );
