/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';

import pageHeaderHarmonised from './ecl-page-header-harmonised.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

const preparePageHeaderHarmonised = data => {
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

storiesOf('Components/Page Headers/Page Header Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'title',
    () => {
      const data = preparePageHeaderHarmonised(demoTitleContent);

      return pageHeaderHarmonised(data);
    },
    {
      notes: { markdown: notes, json: demoTitleContent },
    }
  )
  .add(
    'meta-title',
    () => {
      const data = preparePageHeaderHarmonised(demoMetaTitleContent);

      return pageHeaderHarmonised(data);
    },
    {
      notes: { markdown: notes, json: demoMetaTitleContent },
    }
  )
  .add(
    'meta-title-description',
    () => {
      const data = preparePageHeaderHarmonised(demoMetaTitleDescriptionContent);

      return pageHeaderHarmonised(data);
    },
    {
      notes: {
        markdown: notes,
        json: demoMetaTitleDescriptionContent,
      },
    }
  );
