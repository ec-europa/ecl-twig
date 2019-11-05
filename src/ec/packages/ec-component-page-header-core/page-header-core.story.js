import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import {
  demoTitleContent,
  demoMetaTitleContent,
  demoMetaTitleDescriptionContent,
} from './demo/data';
import pageHeaderCoreDocs from './README.md';
import pageHeaderCore from './page-header-core.html.twig';

demoTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleDescriptionContent.breadcrumb.icon_file_path = defaultSprite;

storiesOf('Components/Page Header Standardised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'title',
    () => {
      return pageHeaderCore(demoTitleContent);
    },
    {
      notes: { markdown: pageHeaderCoreDocs },
    }
  )
  .add(
    'meta-title',
    () => {
      return pageHeaderCore(demoMetaTitleContent);
    },
    {
      notes: { markdown: pageHeaderCoreDocs },
    }
  )
  .add(
    'meta-title-description',
    () => {
      return pageHeaderCore(demoMetaTitleDescriptionContent);
    },
    {
      notes: { markdown: pageHeaderCoreDocs },
    }
  );
