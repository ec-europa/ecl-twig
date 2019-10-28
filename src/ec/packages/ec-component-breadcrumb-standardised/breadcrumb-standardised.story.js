import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import { dataSimple, dataLong } from './demo/data';

import breadcrumbDocs from './README.md';
import breadcrumb from './breadcrumb-standardised.html.twig';

storiesOf('Components/Navigation/Breadcrumbs/Breadcrumb Standardised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'simple',
    () =>
      breadcrumb({
        links: dataSimple.links,
        icon_file_path: defaultSprite,
        navigation_text: dataSimple.label,
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
        extra_attributes: [
          { name: 'data-ecl-auto-init', value: 'BreadcrumbStandardised' },
        ],
        links: dataLong.links,
        icon_file_path: defaultSprite,
        navigation_text: dataLong.label,
        ellipsis_label: 'Click to expand',
      }),
    {
      notes: { markdown: breadcrumbDocs },
    }
  );
