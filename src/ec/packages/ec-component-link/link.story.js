import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataDefault from './demo/data--default';
import dataCta from './demo/data--cta';
import dataStandalone from './demo/data--standalone';
import link from './ecl-link.html.twig';
import notes from './README.md';

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

const transforms = {
  None: '',
  'Rotate 90': 'rotate-90',
  'Rotate 180': 'rotate-180',
  'Rotate 270': 'rotate-270',
  'Flip horizontal': 'flip-horizontal',
  'Flip vertical': 'flip-vertical',
};
const iconPositionSettings = {
  before: 'before',
  after: 'after',
};
const defaultTransform = '';

storiesOf('Components/Navigation/Link', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);
      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );
      const transform = select('Transform', transforms, defaultTransform);

      const linkData = merge(dataDefault, {
        link: {
          label: text('Label', 'Default link'),
          icon_position: iconPosition,
        },
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
          size: 'fluid',
          transform,
        },
      });

      const demo = document.createDocumentFragment();
      const wrapper = document.createElement('p');
      wrapper.className = 'ecl-u-type-paragraph';
      wrapper.setAttribute('demo_only', true);
      wrapper.innerHTML = link(linkData);
      demo.appendChild(wrapper);

      return demo;
    },
    {
      notes: { markdown: notes, json: dataDefault },
    }
  )
  .add(
    'standalone',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);
      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );
      const transform = select('Transform', transforms, defaultTransform);

      return link(
        merge(dataStandalone, {
          link: {
            label: text('Label', 'Standalone link'),
            icon_position: iconPosition,
          },
          icon: {
            type: 'ui',
            name: iconsListSelect,
            path: defaultSprite,
            size: 'fluid',
            transform,
          },
        })
      );
    },
    {
      notes: { markdown: notes, json: dataStandalone },
    }
  )
  .add(
    'cta',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);
      const transform = select('Transform', transforms, defaultTransform);

      return link(
        merge(dataCta, {
          link: {
            label: text('Label', 'Call to action link'),
            icon_position: 'after',
          },
          icon: {
            name: iconsListSelect,
            path: defaultSprite,
            type: 'ui',
            transform,
            size: 'fluid',
          },
        })
      );
    },
    {
      notes: { markdown: notes, json: dataCta },
    }
  );
