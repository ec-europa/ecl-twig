import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, tabLabels, getLinkKnobs } from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataSimple from './demo/data--simple';
import dataLong from './demo/data';

import breadcrumb from './ecl-breadcrumb-core.html.twig';
import notes from './README.md';

const prepareBreadcrumbCore = data => {
  data.icon_file_path = select(
    'icon_file_path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );
  data.navigation_text = text(
    'navigation_text',
    data.navigation_text,
    tabLabels.required
  );
  data.ellipsis_label = text(
    'ellipsis_label',
    data.ellipsis_label,
    tabLabels.required
  );

  getLinkKnobs(data);

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Navigation/Breadcrumbs/Breadcrumb Core', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add('simple', () => breadcrumb(prepareBreadcrumbCore(dataSimple)), {
    notes: { markdown: notes, json: dataSimple },
  })
  .add('long', () => breadcrumb(prepareBreadcrumbCore(dataLong)), {
    notes: { markdown: notes, json: dataLong },
  });
