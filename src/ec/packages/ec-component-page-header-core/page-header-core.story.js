/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
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

  data.extra_classes = text(
    'extra_classes (comma separated)',
    '',
    optionalGroupId
  );
  data.extra_attributes = object(
    'extra_attributes',
    { name: '', value: '' },
    optionalGroupId
  );

  return data;
};

storiesOf('Components/Page Headers/Page Header Core', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'title',
    () => {
      select(
        'optional elements',
        ['no optional element is present in this story'],
        'no optional element is present in this story',
        optionalGroupId
      );
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
