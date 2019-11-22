/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
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
  .add(
    'card',
    () => {
      return card(formatInfo(dataCard));
    },
    {
      notes: { markdown: notes, json: formatInfo(dataCard) },
    }
  )
  .add(
    'tile',
    () => {
      return card(dataTile);
    },
    {
      notes: { markdown: notes, json: dataTile },
    }
  )
  .add(
    'tag',
    () => {
      return card(formatInfo(dataCardTag));
    },
    {
      notes: { markdown: notes, json: formatInfo(dataCardTag) },
    }
  )
  .add(
    'event',
    () => {
      return card(formatInfo(dataCardEvent));
    },
    {
      notes: { markdown: notes, json: formatInfo(dataCardEvent) },
    }
  );
