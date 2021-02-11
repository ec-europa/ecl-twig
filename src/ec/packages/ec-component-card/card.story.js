import he from 'he';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  withKnobs,
  text,
  array,
  select,
  optionsKnob,
} from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataCard from './demo/data--card';
import dataCardTaxonomy from './demo/data--card-taxonomy';
import dataCardTile from './demo/data--tile';
import dataCardTileTaxonomy from './demo/data--tile-taxonomy';

import card from './ecl-card.html.twig';
import notes from './README.md';

dataCardTileTaxonomy.card.type = 'tile';

const iconsList = [];
generalIcons.forEach((icon) => {
  iconsList.push(icon);
});

const prepareCard = (data) => {
  if (data.card.title) {
    data.card.title.label = he.decode(
      text('card.title.label', data.card.title.label, tabLabels.required)
    );
    if (data.card.title.type) {
      data.card.title.type = text(
        'card.title.type',
        data.card.title.type,
        tabLabels.optional
      );
    }
  }
  if (data.card.description) {
    data.card.description = he.decode(
      text('card.description', data.card.description, tabLabels.optional)
    );
  }
  if (data.card.meta) {
    data.card.meta = array(
      'card.meta',
      data.card.meta,
      '|',
      tabLabels.optional
    );
  }
  if (data.card.tags) {
    data.card.tags.forEach((tag, i) => {
      tag.label = he.decode(
        text(`card.tags[${i}].label`, tag.label, tabLabels.optional)
      );
    });
  }
  data.icon_path = optionsKnob(
    'icon_path',
    { current: defaultSprite, 'no path': '' },
    defaultSprite,
    { display: 'inline-radio' },
    tabLabels.optional
  );
  if (data.card.infos) {
    data.card.infos.forEach((info, i) => {
      info.label = text(
        `card.infos[${i}].label`,
        info.label,
        tabLabels.optional
      );
      info.icon.path = optionsKnob(
        `infos[${i}].icon.path (not needed if icon_path is set)`,
        { current: defaultSprite, 'no path': '' },
        defaultSprite,
        { display: 'inline-radio' },
        tabLabels.optional
      );
      if (data.card.infos[i].icon.path || data.icon_path) {
        info.icon.name = select(
          `infos[${i}].icon.name`,
          [...iconsList],
          info.icon.name,
          tabLabels.optional
        );
        info.icon.type = select(
          `infos[${i}].icon.type`,
          [info.icon.type],
          info.icon.type,
          tabLabels.optional
        );
        info.icon.size = select(
          `infos[${i}].icon.size (the size will not change, this is for demoing that)`,
          ['xl', 'm', 's', 'xs', '2xs'],
          info.icon.size,
          tabLabels.optional
        );
      }
    });
  }
  if (data.card.links) {
    data.card.links.forEach((link, i) => {
      link.label = text(
        `card.links[${i}].label`,
        link.label,
        tabLabels.optional
      );
    });
  }
  if (data.card.image) {
    data.card.image.alt = text(
      'card.image.alt',
      data.card.image.alt,
      tabLabels.optional
    );
    data.card.image.src = text(
      'card.image.src',
      data.card.image.src,
      tabLabels.optional
    );
  }
  if (data.card.lists) {
    data.card.lists.forEach((list, j) => {
      list.variant = text(
        `card.lists[${j}].variant`,
        list.variant,
        tabLabels.optional
      );
      list.items.forEach((item, k) => {
        item.term = text(
          `card.lists[${j}].items[${k}].term`,
          item.term,
          tabLabels.optional
        );
        if (!Array.isArray(item.definition)) {
          item.defitiion = text(
            `card.lists[${j}].items[${k}].definition`,
            item.definition,
            tabLabels.optional
          );
        } else {
          item.definition.forEach((def, l) => {
            def.label = text(
              `card.lists[${j}].items[${k}].definition[${l}].label`,
              def.label,
              tabLabels.optional
            );
            def.variant = text(
              `card.lists[${j}].items[${k}].definition[${l}].variant`,
              def.variant,
              tabLabels.optional
            );
          });
        }
      });
    });
  }

  getExtraKnobs(data);
  getComplianceKnob(data);
  // Return the full data
  return data;
};

export default {
  title: 'Components/Card',
  decorators: [withCode, withNotes, withKnobs],
};

export const Card = () => card(prepareCard(dataCard));

Card.storyName = 'card';
Card.parameters = { notes: { markdown: notes, json: dataCard } };

export const CardTaxonomy = () => card(prepareCard(dataCardTaxonomy));

CardTaxonomy.storyName = 'card (taxonomy)';
CardTaxonomy.parameters = {
  notes: { markdown: notes, json: dataCardTaxonomy },
};

export const Tile = () => card(prepareCard(dataCardTile));

Tile.storyName = 'tile';
Tile.parameters = { notes: { markdown: notes, json: dataCardTile } };

export const TileTaxonomy = () => card(prepareCard(dataCardTileTaxonomy));

TileTaxonomy.storyName = 'tile (taxonomy)';
TileTaxonomy.parameters = {
  notes: { markdown: notes, json: dataCardTileTaxonomy },
};
