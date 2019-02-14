import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

// Import data for demos
import dataPrimary from '@ecl/eu-specs-button/demo/data--primary';
import dataSecondary from '@ecl/eu-specs-button/demo/data--secondary';
import dataCall from '@ecl/eu-specs-button/demo/data--call';
import dataGhost from '@ecl/eu-specs-button/demo/data--ghost';
import dataSearch from '@ecl/eu-specs-button/demo/data--search';

import defaultSprite from '@ecl/eu-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/eu-resources-icons/dist/lists/ui.json';

import button from './button.html.twig';

import primaryDocs from './docs/primary.md';
import secondaryDocs from './docs/secondary.md';
import ctaDocs from './docs/cta.md';
import searchDocs from './docs/search.md';
import ghostDocs from './docs/ghost.md';

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'primary',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      return button({
        label: text('Label', dataPrimary.label),
        variant: dataPrimary.variant,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
        },
        disabled: boolean('Disabled', false),
      });
    },
    {
      notes: { markdown: primaryDocs },
    }
  )
  .add(
    'secondary',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      return button({
        label: text('Label', dataSecondary.label),
        variant: dataSecondary.variant,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
        },
        disabled: boolean('Disabled', false),
      });
    },
    {
      notes: { markdown: secondaryDocs },
    }
  )
  .add(
    'call-to-action',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      return button({
        label: text('Label', dataCall.label),
        variant: dataCall.variant,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
        },
        disabled: boolean('Disabled', false),
      });
    },
    {
      notes: { markdown: ctaDocs },
    }
  )
  .add(
    'ghost',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      return button({
        label: text('Label', dataGhost.label),
        variant: dataGhost.variant,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
        },
        disabled: boolean('Disabled', false),
      });
    },
    {
      notes: { markdown: ghostDocs },
    }
  )
  .add(
    'search',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      return button({
        label: text('Label', dataSearch.label),
        variant: dataSearch.variant,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
        },
        disabled: boolean('Disabled', false),
      });
    },
    {
      notes: { markdown: searchDocs },
    }
  );
