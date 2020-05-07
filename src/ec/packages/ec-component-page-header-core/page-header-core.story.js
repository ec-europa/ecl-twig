import { storiesOf } from '@storybook/html';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';

import pageHeaderCore from './ecl-page-header-core.html.twig';
import notes from './README.md';

const preparePageHeaderCore = data => {
  data.breadcrumb.icon_file_path = defaultSprite;
  data.title = text('title', data.title, tabLabels.required);
  data.breadcrumb = object('breadcrumb', data.breadcrumb, tabLabels.required);

  if (data.meta) {
    data.meta = text('meta', data.meta, tabLabels.optional);
  }
  if (data.description) {
    data.description = text(
      'description',
      data.description,
      tabLabels.optional
    );
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Page Headers/Page Header Core', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add('title', () => pageHeaderCore(preparePageHeaderCore(demoTitleContent)), {
    notes: { markdown: notes, json: demoTitleContent },
  })
  .add(
    'meta-title',
    () => pageHeaderCore(preparePageHeaderCore(demoMetaTitleContent)),
    {
      notes: { markdown: notes, json: demoMetaTitleContent },
    }
  )
  .add(
    'meta-title-description',
    () =>
      pageHeaderCore(preparePageHeaderCore(demoMetaTitleDescriptionContent)),
    {
      notes: {
        markdown: notes,
        json: demoMetaTitleDescriptionContent,
      },
    }
  );
