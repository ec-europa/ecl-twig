/* eslint-disable no-param-reassign */
import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataSimple from './demo/data--simple';
import dataLong from './demo/data';

import breadcrumb from './ecl-breadcrumb-core.html.twig';
import notes from './README.md';

const dataSimpleLinks = [];
const dataLongLinks = [];

const formatlinks = data => {
  if (data.links) {
    data.links.forEach(item => {
      item.path = '/example';
    });
  }

  return data;
};

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

prepareMerge(dataSimple.links, dataSimpleLinks, 'label');
prepareMerge(dataLong.links, dataLongLinks, 'label');

storiesOf('Components/Navigation/Breadcrumbs/Breadcrumb Core', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'simple',
    () =>
      breadcrumb(
        merge(
          dataSimple,
          formatlinks({
            icon_file_path: defaultSprite,
            links: [
              {
                label: text('Link 0', dataSimpleLinks[0]),
              },
              {
                label: text('Link 1', dataSimpleLinks[1]),
              },
              {
                label: text('Link 2', dataSimpleLinks[2]),
              },
            ],
          })
        )
      ),
    {
      notes: { markdown: notes, json: dataSimple },
    }
  )
  .add(
    'long',
    () =>
      breadcrumb(
        merge(
          dataLong,
          formatlinks({
            icon_file_path: defaultSprite,
            links: [
              {
                label: text('Link 0', dataLongLinks[0]),
              },
              {
                label: text('Link 1', dataLongLinks[1]),
              },
              {
                label: text('Link 2', dataLongLinks[2]),
              },
              {
                label: text('Link 3', dataLongLinks[3]),
              },
              {
                label: text('Link 4', dataLongLinks[4]),
              },
            ],
          })
        )
      ),
    {
      notes: { markdown: notes, json: dataLong },
    }
  );
