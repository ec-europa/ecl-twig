import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import he from 'he';

import iconPath from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoData from './demo/data';
import menuLegacy from './ecl-menu-legacy.html.twig';
import notes from './README.md';

const prepareMenuLegacy = data => {
  data.label = text('label', data.label, tabLabels.required);
  data.icon_path = select(
    'icon_path',
    [iconPath],
    iconPath,
    tabLabels.required
  );

  data.items.forEach((item, i) => {
    item.label = he.decode(
      text(`items[${i}].label`, item.label, tabLabels.required)
    );
    item.href = text(`items[${i}].href`, item.href, tabLabels.required);

    if (item.children) {
      item.children.forEach((column, ind) => {
        column.items.forEach((subItem, idx) => {
          subItem.label = text(
            `items[${i}].children[${ind}].items[${idx}].label`,
            subItem.label,
            tabLabels.optional
          );
          subItem.href = text(
            `items[${i}].children[${ind}].items[${idx}].href`,
            subItem.href,
            tabLabels.optional
          );
        });
      });
    }
  });

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Navigation/Menu Legacy', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add('default', () => menuLegacy(prepareMenuLegacy(demoData)), {
    notes: { markdown: notes, json: demoData },
  });
