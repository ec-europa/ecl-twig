import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataDefault from './demo/data--default';
import dataCta from './demo/data--cta';
import dataStandalone from './demo/data--standalone';
import link from './ecl-link.html.twig';
import notes from './README.md';

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

      const linkData = merge(dataDefault, {
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
      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      const iconsListSelect = select('Icon (sample)', iconsList, null);

      return link({
        link: {
          label: text('Label', 'Standalone link'),
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
      notes: { markdown: notes, json: dataStandalone },
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
      notes: { markdown: notes, json: dataCta },
    }
  );
