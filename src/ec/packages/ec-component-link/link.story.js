import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

import linkDocs from './docs/link.md';
import link from './link.html.twig';

uiIcons.push('none');

const iconPositionSettings = {
  before: 'before',
  after: 'after',
};

storiesOf('Components/Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const icons = {
        type: 'ui',
        name: select('Icon (sample)', uiIcons, 'none'),
        path: defaultSprite,
      };

      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      return link({
        link: {
          type: 'default',
          label: text('Label', 'Default link'),
          path: '/example#link-default',
          icon_position: iconPosition,
        },
        icon: icons,
      });
    },
    {
      notes: { markdown: linkDocs },
    }
  )
  .add(
    'standalone',
    () => {
      const icons = {
        type: 'ui',
        name: select('Icon (sample)', uiIcons, 'none'),
        path: defaultSprite,
      };

      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      return link({
        link: {
          type: 'standalone',
          label: text('Label', 'Standalone link'),
          path: '/example#standalone-link',
          icon_position: iconPosition,
        },
        icon: icons,
      });
    },
    {
      notes: { markdown: linkDocs },
    }
  );
