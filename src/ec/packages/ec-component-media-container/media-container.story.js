/* eslint-disable no-param-reassign */
import decode from 'decode-html';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import demoImg from './demo/data--image';
import demoVideo from './demo/data--video';
import demoEmbed from './demo/data--embed';
import exampleImg from '../../../../static/images/example-image.jpg';

import mediaContainer from './ecl-media-container.html.twig';
import notes from './README.md';

// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

const prepareMediaContainer = (data, media) => {
  if (media === 'video') {
    data.description = text(
      'description',
      demoVideo.description,
      optionalGroupId
    );
    data.alt = text('alt', demoVideo.alt, requiredGroupId);
    data.sources = object('sources', demoVideo.sources, requiredGroupId);
    data.tracks = object('tracks', demoVideo.tracks, requiredGroupId);
  } else if (media === 'image') {
    data.description = text(
      'description',
      demoImg.description,
      optionalGroupId
    );
    data.alt = text('alt', demoImg.alt, requiredGroupId);
    data.image = text('image', exampleImg, requiredGroupId);
  } else {
    const options = ['16-9', '4-3', '3-2', '1-1'];
    data.embedded_media = decode(
      text('embedded_media', data.embedded_media, requiredGroupId)
    );
    data.description = text(
      'description',
      demoVideo.description,
      optionalGroupId
    );
    data.ratio = select('ratio', options, data.ratio, requiredGroupId);
  }
  data.extra_classes = text('extra_classes', '', optionalGroupId);
  const attribute1Name = text('extra_attributes[0].name', '', optionalGroupId);
  if (attribute1Name !== '') {
    data.extra_attributes = [];
    let attribute = {};
    const attribute1Value = text(
      'extra_attributes[0].value',
      '',
      optionalGroupId
    );
    const attribute2Name = text(
      'extra_attributes[1].name',
      '',
      optionalGroupId
    );
    attribute.name = attribute1Name;
    if (attribute1Value !== '') {
      attribute.value = attribute1Value;
    }
    data.extra_attributes.push(attribute);

    if (attribute2Name !== '') {
      const attribute2Value = text(
        'extra_attributes[1].value',
        '',
        optionalGroupId
      );
      attribute = {};
      attribute.name = attribute2Name;
      if (attribute2Value !== '') {
        attribute.value = attribute2Value;
      }
      data.extra_attributes.push(attribute);
    }
  } else {
    delete data.extra_attributes;
  }
  return data;
};

storiesOf('Components/Media container', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'image',
    () => {
      const dataStory = prepareMediaContainer(demoImg, 'image');
      return mediaContainer(dataStory);
    },
    {
      notes: { markdown: notes, json: demoImg },
    }
  )
  .add(
    'video',
    () => {
      const dataStory = prepareMediaContainer(demoVideo, 'video');
      return mediaContainer(dataStory);
    },
    {
      notes: { markdown: notes, json: demoVideo },
    }
  )
  .add(
    'embedded video',
    () => {
      const dataStory = prepareMediaContainer(demoEmbed, 'embed');
      return mediaContainer(dataStory);
    },
    {
      notes: { markdown: notes, json: demoEmbed },
    }
  );
