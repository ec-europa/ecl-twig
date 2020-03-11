/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';

import pageHeaderCore from './ecl-page-header-core.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

const preparePageHeaderCore = data => {
  data.breadcrumb.icon_file_path = defaultSprite;
  data.title = text('title', data.title, requiredGroupId);
  data.breadcrumb = object('breadcrumb', data.breadcrumb, requiredGroupId);

  if (data.meta) {
    data.meta = text('meta', data.meta, optionalGroupId);
  }
  if (data.description) {
    data.description = text('description', data.description, optionalGroupId);
  }

  data.extra_classes = text('extra_classes', '', optionalGroupId);

  const attribute1Name = text('extra_attributes[0].name', '', optionalGroupId);

  if (attribute1Name !== '') {
    data.extra_attributes = [];
    let attribute = {};
    const attribute1Value = text(
      'extra_attributes[0].value',
      '',
      optionalGroupId
    );
    const attribute2Name = text(
      'extra_attributes[1].name',
      '',
      optionalGroupId
    );
    attribute.name = attribute1Name;
    if (attribute1Value !== '') {
      attribute.value = attribute1Value;
    }
    data.extra_attributes.push(attribute);

    if (attribute2Name !== '') {
      const attribute2Value = text(
        'extra_attributes[1].value',
        '',
        optionalGroupId
      );
      attribute = {};
      attribute.name = attribute2Name;
      if (attribute2Value !== '') {
        attribute.value = attribute2Value;
      }
      data.extra_attributes.push(attribute);
    }
  } else {
    delete data.extra_attributes;
  }

  return data;
};

storiesOf('Components/Page Headers/Page Header Core', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'title',
    () => {
      const data = preparePageHeaderCore(demoTitleContent);

      return pageHeaderCore(data);
    },
    {
      notes: { markdown: notes, json: demoTitleContent },
    }
  )
  .add(
    'meta-title',
    () => {
      const data = preparePageHeaderCore(demoMetaTitleContent);

      return pageHeaderCore(data);
    },
    {
      notes: { markdown: notes, json: demoMetaTitleContent },
    }
  )
  .add(
    'meta-title-description',
    () => {
      const data = preparePageHeaderCore(demoMetaTitleDescriptionContent);

      return pageHeaderCore(data);
    },
    {
      notes: {
        markdown: notes,
        json: demoMetaTitleDescriptionContent,
      },
    }
  );
