import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import {
  demoTitleContent,
  demoMetaTitleContent,
  demoMetaTitleDescriptionContent,
} from './demo/data';
import pageHeaderStandardisedDocs from './README.md';
import pageHeaderStandardised from './page-header-harmonised.html.twig';

demoTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleDescriptionContent.breadcrumb.icon_file_path = defaultSprite;

storiesOf('Components/Page Headers/Page Header Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'title',
    () => {
      return pageHeaderStandardised(demoTitleContent);
    },
    {
      notes: { markdown: pageHeaderStandardisedDocs },
    }
  )
  .add(
    'meta-title',
    () => {
      return pageHeaderStandardised(demoMetaTitleContent);
    },
    {
      notes: { markdown: pageHeaderStandardisedDocs },
    }
  )
  .add(
    'meta-title-description',
    () => {
      return pageHeaderStandardised(demoMetaTitleDescriptionContent);
    },
    {
      notes: { markdown: pageHeaderStandardisedDocs },
    }
  );
