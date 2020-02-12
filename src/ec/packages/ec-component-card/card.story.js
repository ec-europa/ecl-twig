/* eslint-disable no-param-reassign */
import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import merge from 'deepmerge';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataCard from './demo/data--card';
import dataTile from './demo/data--tile';
import dataCardTag from './demo/data--card-tag';
import dataCardEvent from './demo/data--card-event';

import card from './ecl-card.html.twig';
import notes from './README.md';

const dataCardInfos = [];
const dataCardMeta = [];
const dataCardTags = [];
const dataTileLinks = [];
const dataCardTagMeta = [];
const dataCardTagTag = [];
const dataCardEventInfos = [];

function prepareMerge(oldArray, newArray, label) {
  oldArray.forEach((a, key) => {
    if (label === 'label') {
      newArray.push(oldArray[key].label);
    } else {
      newArray.push(oldArray[key]);
    }
  });
  oldArray.splice(0, oldArray.length);
}

const formatCards = data => {
  if (data.card.infos) {
    data.card.infos.forEach(item => {
      item.icon.path = defaultSprite;
    });
  }

  if (data.card.tags) {
    data.card.tags.forEach(item => {
      item.path = '/example';
    });
  }

  if (data.card.links) {
    data.card.links.forEach(item => {
      item.path = '/example';
    });
  }
  return data;
};

prepareMerge(dataCard.card.infos, dataCardInfos, 'label');
prepareMerge(dataCard.card.meta, dataCardMeta);
prepareMerge(dataCard.card.tags, dataCardTags, 'label');
prepareMerge(dataTile.card.links, dataTileLinks, 'label');
prepareMerge(dataTile.card.links, dataTileLinks, 'label');
prepareMerge(dataCardTag.card.tags, dataCardTagTag, 'label');
prepareMerge(dataCardTag.card.meta, dataCardTagMeta);
prepareMerge(dataCardTag.card.tags, dataCardTagTag, 'label');
prepareMerge(dataCardEvent.card.infos, dataCardEventInfos, 'label');

storiesOf('Components/Card', module)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add(
    'card',
    () =>
      card(
        merge(
          dataCard,
          formatCards({
            card: {
              title: {
                label: text('Title card', dataCard.card.title.label),
              },
              description: text('Description', dataCard.card.description),
              image: {
                src: text('Image path', dataCard.card.image.src),
              },
              meta: array('Metatags', dataCardMeta, '|'),
              infos: [
                {
                  icon: {
                    name: 'general--calendar',
                  },
                  label: text('Info 0 text', dataCardInfos[0]),
                },
                {
                  icon: {
                    name: 'general--location',
                  },
                  label: text('Info 1 text', dataCardInfos[1]),
                },
              ],
              tags: [
                {
                  label: text('Tag 0', dataCardTags[0]),
                },
                {
                  label: text('Tag 1', dataCardTags[1]),
                },
                {
                  label: text('Tag 2', dataCardTags[2]),
                },
              ],
            },
          })
        )
      ),
    {
      notes: { markdown: notes, json: formatCards(dataCard) },
    }
  )
  .add(
    'tile',
    () =>
      card(
        merge(
          dataTile,
          formatCards({
            card: {
              title: {
                label: text('Title card', dataTile.card.title.label),
              },
              description: text('Description', dataTile.card.description),
              links: [
                {
                  label: text('link 1', dataTileLinks[0]),
                },
                {
                  label: text('link 2', dataTileLinks[1]),
                },
                {
                  label: text('link 3', dataTileLinks[2]),
                },
              ],
            },
          })
        )
      ),
    {
      notes: { markdown: notes, json: formatCards(dataTile) },
    }
  )
  .add(
    'tag',
    () =>
      card(
        merge(
          dataCardTag,
          formatCards({
            card: {
              title: {
                label: text('Title card', dataCardTag.card.title.label),
              },
              description: text('Description', dataCardTag.card.description),
              image: {
                src: text('Img url', dataCardTag.card.image.src),
              },
              meta: array('Metatags', dataCardTagMeta, '|'),
              tags: [
                {
                  label: text('Tag 0', dataCardTagTag[0]),
                },
                {
                  label: text('Tag 1', dataCardTagTag[1]),
                },
                {
                  label: text('Tag 2', dataCardTagTag[2]),
                },
              ],
            },
          })
        )
      ),
    {
      notes: { markdown: notes, json: formatCards(dataCardTag) },
    }
  )
  .add(
    'event',
    () =>
      card(
        merge(
          dataCardEvent,
          formatCards({
            card: {
              title: {
                label: text('Title card', dataCardEvent.card.title.label),
              },
              description: text('Description', dataCardEvent.card.description),
              image: {
                src: text('Img url', dataCardEvent.card.image.src),
              },
              infos: [
                {
                  icon: {
                    name: 'general--calendar',
                  },
                  label: text('Info 0 text', dataCardEventInfos[0]),
                },
                {
                  icon: {
                    name: 'general--location',
                  },
                  label: text('Info 1 text', dataCardEventInfos[1]),
                },
              ],
            },
          })
        )
      ),
    {
      notes: { markdown: notes, json: formatCards(dataCardEvent) },
    }
  );
