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

function prepareMerge(oldArrayName, newArrayName, label) {
  oldArrayName.forEach((a, key) => {
    if (label === 'label') {
      newArrayName.push(oldArrayName[key].label);
    } else {
      newArrayName.push(oldArrayName[key]);
    }
  });
  oldArrayName.splice(0, oldArrayName.length);
}

const dataCardInfos = [];
const dataCardMeta = [];
const dataCardTags = [];
const dataTileLinks = [];
const dataCardTagMeta = [];
const dataCardTagTag = [];
const dataCardEventInfos = [];

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
        merge(dataCard, {
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
                  size: 'xs',
                  path: defaultSprite,
                  name: 'general--calendar',
                },
                label: text('Info 0 text', dataCardInfos[0]),
              },
              {
                icon: {
                  size: 'xs',
                  path: defaultSprite,
                  name: 'general--location',
                },
                label: text('Info 1 text', dataCardInfos[1]),
              },
            ],
            tags: [
              {
                label: text('Tag 0', dataCardTags[0]),
                path: '/example',
              },
              {
                label: text('Tag 1', dataCardTags[1]),
                path: '/example',
              },
              {
                label: text('Tag 2', dataCardTags[2]),
                path: '/example',
              },
            ],
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataCard },
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
            links: [
              {
                label: text('link 1', dataTileLinks[0]),
                path: '/example',
              },
              {
                label: text('link 2', dataTileLinks[1]),
                path: '/example',
              },
              {
                label: text('link 3', dataTileLinks[2]),
                path: '/example',
              },
            ],
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
            image: {
              src: text('Img url', dataCardTag.card.image.src),
            },
            meta: array('Metatags', dataCardTagMeta, '|'),
            tags: [
              {
                label: text('Tag 0', dataCardTagTag[0]),
                path: '/example',
              },
              {
                label: text('Tag 1', dataCardTagTag[1]),
                path: '/example',
              },
              {
                label: text('Tag 2', dataCardTagTag[2]),
                path: '/example',
              },
            ],
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataCardTag },
    }
  )
  .add(
    'event',
    () =>
      card(
        merge(dataCardEvent, {
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
                  size: 'xs',
                  path: defaultSprite,
                  name: 'general--calendar',
                },
                label: text('Info 0 text', dataCardEventInfos[0]),
              },
              {
                icon: {
                  size: 'xs',
                  path: defaultSprite,
                  name: 'general--location',
                },
                label: text('Info 1 text', dataCardEventInfos[1]),
              },
            ],
          },
        })
      ),
    {
      notes: { markdown: notes, json: dataCardEvent },
    }
  );
