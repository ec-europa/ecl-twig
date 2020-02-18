/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, array, button } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

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
// Labels for the buttons.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const useCasesGroup = 'Use cases';
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
        type: text('card.title.type', data.title.type, optionalGroupId),
        label: text('card.title.label', data.title.label, requiredGroupId),
      }
    : {
        ...data.title,
        label: text('card.title.label', data.title.label, requiredGroupId),
      };
  // Description.
  const description = data.description
    ? text('card.description', data.description, optionalGroupId)
    : false;
  // Meta.
  const meta = data.meta
    ? array('card.meta (tags)', data.meta, '|', optionalGroupId)
    : false;

  const formatTag = (tag, index) => {
    tag.label = text(
      `card.tags.label (Tag ${index})`,
      tag.label,
      optionalGroupId
    );
    // Tags.
    return tag;
  };
  const tags = data.tags ? data.tags.map(formatTag) : false;

  const formatInfos = (info, index) => {
    info.label = text(
      `card.infos.label (Info ${index})`,
      info.label,
      optionalGroupId
    );
    info.icon.path = defaultSprite;
    // Infos.
    return info;
  };
  const infos = data.infos ? data.infos.map(formatInfos) : [];

  const formatLinks = (link, index) => {
    link.label = text(
      `card.links.label (Link ${index})`,
      link.label,
      optionalGroupId
    );
    // Links.
    return link;
  };
  const links = data.links ? data.links.map(formatLinks) : [];
  // Image.
  const image = data.image
    ? {
        alt: text('card.image.alt', data.image.alt, optionalGroupId),
        src: text('card.image.src', data.image.src, optionalGroupId),
      }
    : {};

  const newCard = {
    card: {
      title,
      description,
      meta,
      tags,
      infos,
      image,
      links,
    },
  };
  // Return the full object.
  return newCard;
};

storiesOf('Components/Card', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'card',
    () => {
      button('With or without card.image', imgBtnToggler, useCasesGroup);
      button('With or without card.tags', tagsBtnToggler, useCasesGroup);
      button('With or without card.infos', infosBtnToggler, useCasesGroup);
      button('With or without card.meta', metaBtnToggler, useCasesGroup);
      button('With or without card.description', descBtnToggler, useCasesGroup);
      button('Reset the layout', resetBtnToggler, useCasesGroup);

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
        useCasesGroup
      );
      button('With or without card.links', linksBtnToggler, useCasesGroup);
      button('Reset the layout', resetTileBtnToggler, useCasesGroup);

      return card(formatCard(tileData));
    },
    {
      notes: { markdown: notes, json: { card: tileData } },
    }
  )
  .add(
    'tag',
    () => {
      button(
        'With or without card.description',
        descTagBtnToggler,
        useCasesGroup
      );
      button('With or without card.tags', tagsTagBtnToggler, useCasesGroup);
      button('With or without card.meta', metaTagBtnToggler, useCasesGroup);
      button('With or without card.image', imgTagBtnToggler, useCasesGroup);
      button('Reset the layout', resetTagBtnToggler, useCasesGroup);

      return card(formatCard(tagData));
    },
    {
      notes: { markdown: notes, json: { card: dataCardTag } },
    }
  )
  .add(
    'event',
    () => {
      button('With or without card.image', imgEventBtnToggler, useCasesGroup);
      button(
        'With or without cad.description"',
        descEventBtnToggler,
        useCasesGroup
      );
      button(
        'With or without card.infos"',
        infosEventBtnToggler,
        useCasesGroup
      );
      button('Reset the layout', resetEventBtnToggler, useCasesGroup);

      return card(formatCard(eventData));
    },
    {
      notes: { markdown: notes, json: { card: eventData } },
    }
  );
