/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withKnobs, select, text, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, tabLabels } from '@ecl-twig/story-utils';

import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import enData from './demo/data--en';
import frData from './demo/data--fr';
import menu from './ecl-menu.html.twig';
import notes from './README.md';

const prepareMenu = data => {
  data.title = text('title', data.title, tabLabels.required);
  data.close = text('close', data.close, tabLabels.required);
  data.back = text('back', data.back, tabLabels.required);
  data.icon_path = select(
    'icon_path',
    [iconPath],
    iconPath,
    tabLabels.required
  );

  getExtraKnobs(data);

  data.items = object('items', data.items, tabLabels.optional);

  return data;
};

storiesOf('Components/Navigation/Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('default', () => menu(prepareMenu(enData)), {
    notes: { markdown: notes, json: enData },
  })
  .add('translated', () => menu(prepareMenu(frData)), {
    notes: { markdown: notes, json: frData },
  });
