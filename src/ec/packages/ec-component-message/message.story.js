/* eslint-disable no-param-reassign */
import merge from 'deepmerge';
import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import dataInfo from './demo/data--info';
import dataSuccess from './demo/data--success';
import dataError from './demo/data--error';
import dataWarning from './demo/data--warning';

import message from './ecl-message.html.twig';
import notes from './README.md';

const formatIcon = data => {
  data.icon.path = defaultSprite;
  data.close.icon.path = defaultSprite;
  return data;
};

storiesOf('Components/Messages', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'Info',
    () =>
      message(
        merge(formatIcon(dataInfo), {
          title: text('Title', 'Information message'),
          description: text(
            'Description',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.'
          ),
        })
      ),
    {
      notes: { markdown: notes, json: formatIcon(dataInfo) },
    }
  )
  .add(
    'Success',
    () =>
      message(
        merge(formatIcon(dataSuccess), {
          title: text('Title', 'Information message'),
          description: text(
            'Description',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.'
          ),
        })
      ),
    {
      notes: { markdown: notes, json: formatIcon(dataSuccess) },
    }
  )
  .add(
    'Error',
    () =>
      message(
        merge(formatIcon(dataError), {
          title: text('Title', 'Information message'),
          description: text(
            'Description',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.'
          ),
        })
      ),
    {
      notes: { markdown: notes, json: formatIcon(dataError) },
    }
  )
  .add(
    'Warning',
    () =>
      message(
        merge(formatIcon(dataWarning), {
          title: text('Title', 'Information message'),
          description: text(
            'Description',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem, ac mollis lacus tincidunt eu. Duis scelerisque diam eu tempus fringilla.'
          ),
        })
      ),
    {
      notes: { markdown: notes, json: formatIcon(dataWarning) },
    }
  );
