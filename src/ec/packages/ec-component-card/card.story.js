/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, array, button } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataCard from './demo/data--card';
import dataCardEvent from './demo/data--card-event';
import dataCardTag from './demo/data--card-tag';
import dataTile from './demo/data--tile';

import card from './ecl-card.html.twig';
import notes from './README.md';

const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const useCasesGroup = 'Use cases';
const defaultData = { ...dataCard.card };

// Show/hide buttons for optional elements.
const descBtnHandler = () => {
  if (defaultData.description) {
    delete defaultData.description;
  } else {
    defaultData.description = dataCard.card.description;
  }
};
const metaBtnHandler = () => {
  if (defaultData.meta) {
    delete defaultData.meta;
  } else {
    defaultData.meta = dataCard.card.meta;
  }
};
const infosBtnHandler = () => {
  if (defaultData.infos) {
    delete defaultData.infos;
  } else {
    defaultData.infos = dataCard.card.infos;
  }
};
const tagsBtnHandler = () => {
  if (defaultData.tags) {
    delete defaultData.tags;
  } else {
    defaultData.tags = dataCard.card.tags;
  }
};
const imgBtnHandler = () => {
  if (defaultData.image) {
    delete defaultData.image;
  } else {
    defaultData.image = dataCard.card.image;
  }
};
const formatInfo = data => {
  if (data.infos) {
    data.infos.forEach(item => {
      item.icon.path = defaultSprite;
    });
  }

  return data;
};

storiesOf('Components/Card', module)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'card',
    () => {
      // Description.
      const description = defaultData.description
        ? text('Card.description', defaultData.description, optionalGroupId)
        : false;
      // Meta.
      const meta = defaultData.meta
        ? array('Card.meta (tags)', defaultData.meta, '|', optionalGroupId)
        : [];
      // Tags.
      const formatTag = (tag, index) => {
        tag.label = text(
          `Card.tags.label (Tag ${index})`,
          tag.label,
          optionalGroupId
        );
        return tag;
      };
      const tags = defaultData.tags ? defaultData.tags.map(formatTag) : [];
      // Infos.
      const formatInfos = (info, index) => {
        info.label = text(
          `Card.infos.label (Info ${index})`,
          info.label,
          optionalGroupId
        );
        info.icon.path = defaultSprite;
        return info;
      };
      const infos = defaultData.infos ? defaultData.infos.map(formatInfos) : [];
      // Image.
      const image = defaultData.image
        ? {
            alt: text('Card.image.alt', defaultData.image.alt, optionalGroupId),
            src: text('Card.image.src', defaultData.image.src, optionalGroupId),
          }
        : '';

      const data = {
        card: {
          title: {
            type: text(
              'Card.title.type',
              defaultData.title.type,
              optionalGroupId
            ),
            label: text(
              'Card.title.label',
              defaultData.title.label,
              requiredGroupId
            ),
            path: defaultData.title.path,
            level: defaultData.title.level,
          },
          description,
          meta,
          tags,
          infos,
          image,
        },
      };

      button('With or without image', imgBtnHandler, useCasesGroup);
      button('With or without tags', tagsBtnHandler, useCasesGroup);
      button('With or without infos', infosBtnHandler, useCasesGroup);
      button('With or without meta', metaBtnHandler, useCasesGroup);
      button('With or without description', descBtnHandler, useCasesGroup);

      return card(data);
    },
    {
      notes: { markdown: notes, json: defaultData },
    }
  )
  .add(
    'tile',
    () => {
      dataTile.card.title.label = text('Title', dataTile.card.title.label);
      dataTile.card.description = text(
        'Description',
        dataTile.card.description
      );
      dataTile.card.link[0].label = text('Link 0', dataTile.card.link[0].label);
      dataTile.card.link[1].label = text('Link 1', dataTile.card.link[1].label);
      dataTile.card.link[2].label = text('Link 2', dataTile.card.link[2].label);
      return card(dataTile);
    },
    {
      notes: { markdown: notes, json: dataTile },
    }
  )
  .add(
    'tag',
    () => {
      dataCardTag.card.image.src = text('Image', dataCardTag.card.image.src);
      dataCardTag.card.meta = array('Meta tags', dataCardTag.card.meta, '|');
      dataCardTag.card.title.label = text(
        'Title',
        dataCardTag.card.title.label
      );
      dataCardTag.card.description = text(
        'Description',
        dataCardTag.card.description
      );
      dataCardTag.card.tags[0].label = text(
        'Tag 0',
        dataCardTag.card.tags[0].label
      );
      dataCardTag.card.tags[1].label = text(
        'Tag 1',
        dataCardTag.card.tags[1].label
      );
      dataCardTag.card.tags[2].label = text(
        'Tag 2',
        dataCardTag.card.tags[2].label
      );
      return card(formatInfo(dataCardTag));
    },
    {
      notes: { markdown: notes, json: formatInfo(dataCardTag) },
    }
  )
  .add(
    'event',
    () => {
      dataCardEvent.card.image.src = text(
        'Image',
        dataCardEvent.card.image.src
      );
      dataCardEvent.card.title.label = text(
        'Title',
        dataCardEvent.card.title.label
      );
      dataCardEvent.card.description = text(
        'Description',
        dataCardEvent.card.description
      );
      dataCardEvent.card.infos[0].label = text(
        'Info 0',
        dataCardEvent.card.infos[0].label
      );
      dataCardEvent.card.infos[1].label = text(
        'Info 1',
        dataCardEvent.card.infos[1].label
      );
      return card(formatInfo(dataCardEvent));
    },
    {
      notes: { markdown: notes, json: formatInfo(dataCardEvent) },
    }
  );
