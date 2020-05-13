import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, array, button } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataCard from './demo/data--card';
import dataCardEvent from './demo/data--card-event';
import dataCardTag from './demo/data--card-tag';
import dataCardTile from './demo/data--tile';

import card from './ecl-card.html.twig';
import notes from './README.md';
// Preserve the adapted specs.
let defaultData = { ...dataCard.card };
let eventData = { ...dataCardEvent.card };
let tagData = { ...dataCardTag.card };
let tileData = { ...dataCardTile.card };

// Show/hide buttons for optional elements.
const descBtnToggler = () => {
  defaultData.description = defaultData.description
    ? false
    : dataCard.card.description;
};
const descEventBtnToggler = () => {
  eventData.description = eventData.description
    ? false
    : dataCardEvent.card.description;
};
const descTileBtnToggler = () => {
  tileData.description = tileData.description
    ? false
    : dataCardTile.card.description;
};
const descTagBtnToggler = () => {
  tagData.description = tagData.description
    ? false
    : dataCardTag.card.description;
};
const metaBtnToggler = () => {
  defaultData.meta = defaultData.meta ? false : dataCard.card.meta;
};
const metaTagBtnToggler = () => {
  tagData.meta = tagData.meta ? false : dataCardTag.card.meta;
};
const infosBtnToggler = () => {
  defaultData.infos = defaultData.infos ? false : dataCard.card.infos;
};
const infosEventBtnToggler = () => {
  eventData.infos = eventData.infos ? false : dataCardEvent.card.infos;
};
const tagsBtnToggler = () => {
  defaultData.tags = defaultData.tags ? false : dataCard.card.tags;
};
const tagsTagBtnToggler = () => {
  tagData.tags = tagData.tags ? false : dataCardTag.card.tags;
};
const imgBtnToggler = () => {
  defaultData.image = defaultData.image ? false : dataCard.card.image;
};
const imgEventBtnToggler = () => {
  eventData.image = eventData.image ? false : dataCardEvent.card.image;
};
const imgTagBtnToggler = () => {
  tagData.image = tagData.image ? false : dataCardTag.card.image;
};
const linksBtnToggler = () => {
  tileData.links = tileData.links ? false : dataCardTile.card.links;
};
// Reset buttons.
const resetBtnToggler = () => {
  defaultData = { ...dataCard.card };
};
const resetTileBtnToggler = () => {
  tileData = { ...dataCardTile.card };
};
const resetEventBtnToggler = () => {
  eventData = { ...dataCardEvent.card };
};
const resetTagBtnToggler = () => {
  tagData = { ...dataCardTag.card };
};
// Prepare the rendering with knobs.
const formatCard = data => {
  // Title
  const title = data.title.type
    ? {
        ...data.title,
        type: text('card.title.type', data.title.type, tabLabels.optional),
        label: text('card.title.label', data.title.label, tabLabels.required),
      }
    : {
        ...data.title,
        label: text('card.title.label', data.title.label, tabLabels.required),
      };
  // Description.
  const description = data.description
    ? text('card.description', data.description, tabLabels.optional)
    : false;
  // Meta.
  const meta = data.meta
    ? array('card.meta', data.meta, '|', tabLabels.optional)
    : false;

  const formatTag = (tag, index) => {
    tag.label = text(
      `card.tags[${index}].label`,
      tag.label,
      tabLabels.optional
    );
    // Tags.
    return tag;
  };
  const tags = data.tags ? data.tags.map(formatTag) : false;

  const formatInfos = (info, index) => {
    info.label = text(
      `card.infos[${index}].label`,
      info.label,
      tabLabels.optional
    );
    info.icon.path = defaultSprite;
    // Infos.
    return info;
  };
  const infos = data.infos ? data.infos.map(formatInfos) : [];

  const formatLinks = (link, index) => {
    link.label = text(
      `card.links[${index}].label`,
      link.label,
      tabLabels.optional
    );
    // Links.
    return link;
  };
  const links = data.links ? data.links.map(formatLinks) : [];
  // Image.
  const image = data.image
    ? {
        alt: text('card.image.alt', data.image.alt, tabLabels.optional),
        src: text('card.image.src', data.image.src, tabLabels.optional),
      }
    : {};

  const newCard = {
    title,
    description,
    meta,
    tags,
    infos,
    image,
    links,
  };

  data = {};
  // Return the full object.
  data.card = newCard;

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Card', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'card',
    () => {
      button('With or without card.image', imgBtnToggler, tabLabels.cases);
      button('With or without card.tags', tagsBtnToggler, tabLabels.cases);
      button('With or without card.infos', infosBtnToggler, tabLabels.cases);
      button('With or without card.meta', metaBtnToggler, tabLabels.cases);
      button(
        'With or without card.description',
        descBtnToggler,
        tabLabels.cases
      );
      button('Reset the layout', resetBtnToggler, tabLabels.cases);

      return card(formatCard(defaultData));
    },
    {
      notes: { markdown: notes, json: { card: defaultData } },
    }
  )
  .add(
    'tile',
    () => {
      button(
        'With or without card.description',
        descTileBtnToggler,
        tabLabels.cases
      );
      button('With or without card.links', linksBtnToggler, tabLabels.cases);
      button('Reset the layout', resetTileBtnToggler, tabLabels.cases);

      return card(formatCard(tileData));
    },
    {
      notes: {
        markdown: notes,
        json: {
          card: tileData,
        },
      },
    }
  )
  .add(
    'tag',
    () => {
      button(
        'With or without card.description',
        descTagBtnToggler,
        tabLabels.cases
      );
      button('With or without card.tags', tagsTagBtnToggler, tabLabels.cases);
      button('With or without card.meta', metaTagBtnToggler, tabLabels.cases);
      button('With or without card.image', imgTagBtnToggler, tabLabels.cases);
      button('Reset the layout', resetTagBtnToggler, tabLabels.cases);

      return card(formatCard(tagData));
    },
    {
      notes: { markdown: notes, json: { card: dataCardTag } },
    }
  )
  .add(
    'event',
    () => {
      button('With or without card.image', imgEventBtnToggler, tabLabels.cases);
      button(
        'With or without cad.description"',
        descEventBtnToggler,
        tabLabels.cases
      );
      button(
        'With or without card.infos"',
        infosEventBtnToggler,
        tabLabels.cases
      );
      button('Reset the layout', resetEventBtnToggler, tabLabels.cases);

      return card(formatCard(eventData));
    },
    {
      notes: { markdown: notes, json: { card: eventData } },
    }
  );
