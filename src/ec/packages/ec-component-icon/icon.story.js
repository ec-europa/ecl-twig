import { storiesOf } from '@storybook/html';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { getExtraKnobs, getIconKnobs, tabLabels } from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataBranded from './demo/data--facebook';
import dataNotifications from './demo/data--success';
import dataGeneral from './demo/data--audio';
import dataUi from './demo/data--ui';

import icon from './ecl-icon.html.twig';
import notes from './README.md';

const prepareIcon = (data, name) => {
  getIconKnobs(data, name, data.icon.type);
  getExtraKnobs(data);

  return data;
};

storiesOf('Components/Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'branded',
    () => {
      const iconName = select(
        'icon.name',
        brandedIcons,
        brandedIcons[0],
        tabLabels.required
      );
      const dataStory = prepareIcon(dataBranded, iconName);

      return icon(dataStory);
    },
    {
      notes: { markdown: notes, json: dataBranded },
    }
  )
  .add(
    'general',
    () => {
      const iconName = select(
        'icon.name',
        generalIcons,
        generalIcons[0],
        tabLabels.required
      );
      const dataStory = prepareIcon(dataGeneral, iconName);

      return icon(dataStory);
    },
    {
      notes: { markdown: notes, json: dataGeneral },
    }
  )
  .add(
    'notifications',
    () => {
      const iconName = select(
        'icon.name',
        notificationsIcons,
        notificationsIcons[0],
        tabLabels.required
      );
      const dataStory = prepareIcon(dataNotifications, iconName);

      return icon(dataStory);
    },
    {
      notes: { markdown: notes, json: dataNotifications },
    }
  )
  .add(
    'ui',
    () => {
      const iconName = select(
        'icon.name',
        uiIcons,
        uiIcons[0],
        tabLabels.required
      );
      const dataStory = prepareIcon(dataUi, iconName);

      return icon(dataStory);
    },
    {
      notes: { markdown: notes, json: dataUi },
    }
  );
