import { storiesOf } from '@storybook/html';
import { withKnobs, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import icon from './ecl-icon.html.twig';
import notes from './README.md';

const sizes = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  '2XL': '2xl',
};

const defaultSize = 'm';

const colors = {
  Default: '',
  Inverted: 'inverted',
  Primary: 'primary',
};

const defaultColor = '';

const transforms = {
  None: '',
  'Rotate 90': 'rotate-90',
  'Rotate 180': 'rotate-180',
  'Rotate 270': 'rotate-270',
  'Flip horizontal': 'flip-horizontal',
  'Flip vertical': 'flip-vertical',
};

const defaultTransform = '';

const defaultIconPath = defaultSprite;

storiesOf('Components/Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'branded',
    () => {
      const shape = select('Icon', brandedIcons, brandedIcons[0]);
      const size = select('Size', sizes, defaultSize);
      const color = select('Color', colors, defaultColor);
      const transform = select('Transform', transforms, defaultTransform);

      return icon({
        icon: {
          type: 'branded',
          name: shape,
          size,
          transform,
          color,
          path: defaultIconPath,
        },
      });
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'general',
    () => {
      const shape = select('Icon', generalIcons, generalIcons[0]);
      const size = select('Size', sizes, defaultSize);
      const color = select('Color', colors, defaultColor);
      const transform = select('Transform', transforms, defaultTransform);

      return icon({
        icon: {
          type: 'general',
          name: shape,
          size,
          transform,
          color,
          path: defaultIconPath,
        },
      });
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'notifications',
    () => {
      const shape = select('Icon', notificationsIcons, notificationsIcons[0]);
      const size = select('Size', sizes, defaultSize);
      const color = select('Color', colors, defaultColor);
      const transform = select('Transform', transforms, defaultTransform);

      return icon({
        icon: {
          type: 'notifications',
          name: shape,
          size,
          transform,
          color,
          path: defaultIconPath,
        },
      });
    },
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'ui',
    () => {
      const shape = select('Icon', uiIcons, uiIcons[0]);
      const size = select('Size', sizes, defaultSize);
      const color = select('Color', colors, defaultColor);
      const transform = select('Transform', transforms, defaultTransform);

      return icon({
        icon: {
          type: 'ui',
          name: shape,
          size,
          transform,
          color,
          path: defaultIconPath,
        },
      });
    },
    {
      notes: { markdown: notes },
    }
  );
