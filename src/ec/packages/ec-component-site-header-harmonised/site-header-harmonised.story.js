import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import logo from '@ecl/ec-resources-logo/logo--en.svg';
import siteHeaderHarmonised from './ecl-site-header-harmonised.html.twig';
import dataGroup2 from './demo/data--group2';
import notes from './README.md';

storiesOf('Components/Site Headers/Harmonised', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'group 2',
    () =>
      siteHeaderHarmonised(
        merge(dataGroup2, {
          logo: {
            src: logo,
          },
          group: 'group2',
          icon_file_path: defaultSprite,
        })
      ),
    {
      notes: { markdown: notes, json: dataGroup2 },
    }
  );
