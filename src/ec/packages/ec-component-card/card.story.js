/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text } from '@storybook/addon-knobs';
import merge from 'deepmerge';

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

console.log();
storiesOf('Components/Card', module)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add(
    'card',
    () =>
      card(
        merge(dataCard, {
          card: {
            title: {
              label: text('Title card', dataCard.card.title.label),
            },
            description: text('Description', dataCard.card.description),
            image: {
              src: text('Image path', dataCard.card.image.src),
            },
          },
        })
      ),
    {
      notes: { markdown: notes, json: formatInfo(dataCard) },
    }
  )
  .add(
    'tile',
    () =>
      card(
        merge(dataTile, {
          card: {
            title: {
              label: text('Title card', dataTile.card.title.label),
            },
            description: text('Description', dataTile.card.description),
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataTile },
    }
  )
  .add(
    'tag',
    () =>
      card(
        merge(dataCardTag, {
          card: {
            title: {
              label: text('Title card', dataCardTag.card.title.label),
            },
            description: text('Description', dataCardTag.card.description),
          },
        })
      ),
    {
      notes: { markdown: notes, json: formatInfo(dataCardTag) },
    }
  )
  .add(
    'event',
    () =>
      card(
        merge(dataCardTag, {
          card: {
            title: {
              label: text('Title card', dataCardEvent.card.title.label),
            },
            description: text('Description', dataCardEvent.card.description),
          },
        })
      ),
    {
      notes: { markdown: notes, json: formatInfo(dataCardEvent) },
    }
  );
