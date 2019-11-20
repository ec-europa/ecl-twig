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
import pageHeaderCore from './ecl-page-header-core.html.twig';

demoTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleContent.breadcrumb.icon_file_path = defaultSprite;
demoMetaTitleDescriptionContent.breadcrumb.icon_file_path = defaultSprite;

storiesOf('Components/Page Headers/Page Header Core', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'title',
    () => {
      return pageHeaderCore(demoTitleContent);
    },
    {
      notes: { markdown: pageHeaderCoreDocs, json: demoTitleContent },
    }
  )
  .add(
    'meta-title',
    () => {
      return pageHeaderCore(demoMetaTitleContent);
    },
    {
      notes: { markdown: pageHeaderCoreDocs, json: demoMetaTitleContent },
    }
  )
  .add(
    'meta-title-description',
    () => {
      return pageHeaderCore(demoMetaTitleDescriptionContent);
    },
    {
      notes: {
        markdown: pageHeaderCoreDocs,
        json: demoMetaTitleDescriptionContent,
      },
    }
  );
