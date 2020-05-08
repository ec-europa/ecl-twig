import { storiesOf } from '@storybook/html';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

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

  data.items.forEach((item, i) => {
    item.label = text(`items[${i}].label`, item.label, tabLabels.required);
    item.path = text(`items[${i}].path`, item.path, tabLabels.required);

    if (item.children) {
      item.children.forEach((subitem, ind) => {
        subitem.label = text(
          `items[${i}].children[${ind}].label`,
          subitem.label,
          tabLabels.optional
        );
        subitem.path = text(
          `items[${i}].children[${ind}].path`,
          subitem.path,
          tabLabels.optional
        );
      });
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

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
