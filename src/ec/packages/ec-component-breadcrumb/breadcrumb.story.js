import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataSimple from './demo/data--simple';
import dataLong from './demo/data';

import breadcrumb from './ecl-breadcrumb.html.twig';
import notes from './README.md';

storiesOf('Components/Navigation/Breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'simple',
    () =>
      breadcrumb({
        links: dataSimple.links,
        icon_file_path: defaultSprite,
        navigation_text: dataSimple.label,
        ellipsis_label: dataSimple.ariaLabel,
      }),
    {
      notes: { markdown: notes, json: dataSimple },
    }
  )
  .add(
    'long',
    () =>
      breadcrumb({
        links: dataLong.links,
        icon_file_path: defaultSprite,
        navigation_text: dataLong.label,
        ellipsis_label: dataLong.ariaLabel,
      }),
    {
      notes: { markdown: notes, json: dataLong },
    }
  );
