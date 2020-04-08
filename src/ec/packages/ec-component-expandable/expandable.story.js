/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, tabLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';
import he from 'he';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';

import expandable from './ecl-expandable.html.twig';
import notes from './README.md';

const prepareExpandable = data => {
  data.id = select('id', [data.id], data.id, tabLabels.required);
  data.label_expanded = text(
    'label_expanded',
    data.label_expanded,
    tabLabels.required
  );
  data.label_collapsed = text(
    'label_collapsed',
    data.label_collapsed,
    tabLabels.required
  );
  data.content = he.decode(text('content', data.content, tabLabels.required));
  data.button.icon.path = select(
    'button.icon.path',
    [defaultSprite],
    defaultSprite,
    tabLabels.required
  );

  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Expandables', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add('default', () => expandable(prepareExpandable(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
