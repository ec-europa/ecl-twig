import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

import linkDocs from './docs/link.md';
import link from './link.html.twig';

const iconPositionSettings = {
  before: 'before',
  after: 'after',
};

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

storiesOf('Components/Navigation/Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      const iconsListSelect = select('Icon (sample)', iconsList, null);

      return link({
        link: {
          type: 'default',
          label: text('Label', 'Default link'),
          path: '/example#link-default',
          icon_position: iconPosition,
        },
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
          size: 'fluid',
        },
      });
    },
    {
      notes: { markdown: linkDocs },
    }
  )
  .add(
    'standalone',
    () => {
      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      const iconsListSelect = select('Icon (sample)', iconsList, null);

      return link({
        link: {
          type: 'standalone',
          label: text('Label', 'Standalone link'),
          path: '/example#standalone-link',
          icon_position: iconPosition,
        },
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
          size: 'fluid',
        },
      });
    },
    {
      notes: { markdown: linkDocs },
    }
  )
  .add(
    'cta',
    () => {
      const iconsListSelect = boolean('Icon (optional)', false);

      return link({
        link: {
          type: 'cta',
          label: text('Label', 'Call to action link'),
          path: '/example#link-cta',
          icon_position: 'after',
        },
        icon: {
          type: 'ui',
          name: iconsListSelect ? 'corner-arrow' : '',
          path: defaultSprite,
          size: 'fluid',
          transform: 'rotate-90',
        },
      });
    },
    {
      notes: { markdown: linkDocs },
    }
  );
