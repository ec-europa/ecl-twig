/* eslint-disable no-param-reassign, no-return-assign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataCard from './demo/data--card';
import dataCardEvent from './demo/data--card-event';
import dataCardTag from './demo/data--card-tag';
import dataTile from './demo/data--tile';

import card from './ecl-card.html.twig';
import notes from './README.md';

const formatInfo = data => {
  if (data.card.infos) {
    data.card.infos.forEach(item => {
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
      return card(
        formatInfo(dataCard),
        (dataCard.card.image.src = text('Image', dataCard.card.image.src)),
        (dataCard.card.meta = array('Meta tags', dataCard.card.meta, '|')),
        (dataCard.card.title.label = text('Title', dataCard.card.title.label)),
        (dataCard.card.description = text(
          'Description',
          dataCard.card.description
        )),
        (dataCard.card.infos[0].label = text(
          'Info 0',
          dataCard.card.infos[0].label
        )),
        (dataCard.card.infos[1].label = text(
          'Info 1',
          dataCard.card.infos[1].label
        )),
        (dataCard.card.tags[0].label = text(
          'Tag 0',
          dataCard.card.tags[0].label
        )),
        (dataCard.card.tags[1].label = text(
          'Tag 1',
          dataCard.card.tags[1].label
        )),
        (dataCard.card.tags[2].label = text(
          'Tag 2',
          dataCard.card.tags[2].label
        ))
      );
    },
    {
      notes: { markdown: notes, json: formatInfo(dataCard) },
    }
  )
  .add(
    'tile',
    () => {
      return card(
        dataTile,
        (dataTile.card.title.label = text(
          'Title Label',
          dataTile.card.title.label
        )),
        (dataTile.card.description = text(
          'Description',
          dataTile.card.description
        )),
        (dataTile.card.links[0].label = text(
          'link 0',
          dataTile.card.links[0].label
        )),
        (dataTile.card.links[1].label = text(
          'link 1',
          dataTile.card.links[1].label
        )),
        (dataTile.card.links[2].label = text(
          'link 2',
          dataTile.card.links[2].label
        ))
      );
    },
    {
      notes: { markdown: notes, json: dataTile },
    }
  )
  .add(
    'tag',
    () => {
      return card(
        formatInfo(dataCardTag),
        (dataCardTag.card.image.src = text(
          'Image',
          dataCardTag.card.image.src
        )),
        (dataCardTag.card.meta = array(
          'Meta tags',
          dataCardTag.card.meta,
          '|'
        )),
        (dataCardTag.card.title.label = text(
          'Title',
          dataCardTag.card.title.label
        )),
        (dataCardTag.card.description = text(
          'Description',
          dataCardTag.card.description
        )),
        (dataCardTag.card.tags[0].label = text(
          'Tag 0',
          dataCardTag.card.tags[0].label
        )),
        (dataCardTag.card.tags[1].label = text(
          'Tag 1',
          dataCardTag.card.tags[1].label
        )),
        (dataCardTag.card.tags[2].label = text(
          'Tag 2',
          dataCardTag.card.tags[2].label
        ))
      );
    },
    {
      notes: { markdown: notes, json: formatInfo(dataCardTag) },
    }
  )
  .add(
    'event',
    () => {
      return card(
        formatInfo(dataCardEvent),
        (dataCardEvent.card.image.src = text(
          'Image',
          dataCardEvent.card.image.src
        )),
        (dataCardEvent.card.meta = array(
          'Meta tags',
          dataCardEvent.card.meta,
          '|'
        )),
        (dataCardEvent.card.title.label = text(
          'Title',
          dataCardEvent.card.title.label
        )),
        (dataCardEvent.card.description = text(
          'Description',
          dataCardEvent.card.description
        )),
        (dataCardEvent.card.infos[0].label = text(
          'Info 0',
          dataCardEvent.card.infos[0].label
        )),
        (dataCardEvent.card.infos[1].label = text(
          'Info 1',
          dataCardEvent.card.infos[1].label
        ))
      );
    },
    {
      notes: { markdown: notes, json: formatInfo(dataCardEvent) },
    }
  );
