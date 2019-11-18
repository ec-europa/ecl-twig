/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import { dataCard, dataCardEvent, dataCardTag, dataTile } from './demo/data';
import cardDocs from './docs/card.md';

import card from './ecl-card.html.twig';

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
  .add(
    'card',
    () => {
      return card(formatInfo(dataCard));
    },
    {
      notes: { markdown: cardDocs },
    }
  )
  .add(
    'tile',
    () => {
      return card(dataTile);
    },
    {
      notes: { markdown: cardDocs },
    }
  )
  .add(
    'tag',
    () => {
      return card(formatInfo(dataCardTag));
    },
    {
      notes: { markdown: cardDocs },
    }
  )
  .add(
    'event',
    () => {
      return card(formatInfo(dataCardEvent));
    },
    {
      notes: { markdown: cardDocs },
    }
  );
