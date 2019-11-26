import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import {
  demoTitleContent,
  demoMetaTitleContent,
  demoMetaTitleDescriptionContent,
} from './demo/data';

import pageHeaderHarmonised from './ecl-page-header-harmonised.html.twig';
import notes from './README.md';

demoTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleDescriptionContent.breadcrumb.icon_file_path = defaultSprite;

storiesOf('Components/Page Headers/Page Header Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'title',
    () => {
      return pageHeaderHarmonised(demoTitleContent);
    },
    {
      notes: { markdown: notes, json: demoTitleContent },
    }
  )
  .add(
    'meta-title',
    () => {
      return pageHeaderHarmonised(demoMetaTitleContent);
    },
    {
      notes: { markdown: notes, json: demoMetaTitleContent },
    }
  )
  .add(
    'meta-title-description',
    () => {
      return pageHeaderHarmonised(demoMetaTitleDescriptionContent);
    },
    {
      notes: {
        markdown: notes,
        json: demoMetaTitleDescriptionContent,
      },
    }
  );
