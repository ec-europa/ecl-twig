import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import { dataSimple, dataLong } from './demo/data';

import breadcrumbDocs from './README.md';
import breadcrumb from './breadcrumb-harmonised.html.twig';

storiesOf('Components/Navigation/Breadcrumbs/Breadcrumb Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'simple',
    () =>
      breadcrumb({
        links: dataSimple.links,
        icon_file_path: defaultSprite,
        navigation_text: dataSimple.navigation_text,
        ellipsis_label: 'Click to expand',
      }),
    {
      notes: { markdown: breadcrumbDocs },
    }
  )
  .add(
    'long',
    () =>
      breadcrumb({
        links: dataLong.links,
        icon_file_path: defaultSprite,
        navigation_text: dataLong.navigation_text,
        ellipsis_label: 'Click to expand',
      }),
    {
      notes: { markdown: breadcrumbDocs },
    }
  );
