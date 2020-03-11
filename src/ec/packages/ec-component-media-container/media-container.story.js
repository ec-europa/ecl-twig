import decode from 'decode-html';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import imgProps from '@ecl/ec-specs-media-container/demo/data--image';
import demoVideo from './demo/data';
import demoImg from '../../../../static/images/example-image.jpg';

import mediaContainer from './ecl-media-container.html.twig';
import notes from './README.md';

const embeddedMedia =
  '<iframe title="New digital strategy" width="350" height="197" src="https://www.youtube.com/embed/fgi-GSCB6ho" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>';
// Labels for the groups.
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';

const prepareMediaContainer = media => {
  let data = {};
  if (media === 'video') {
    data = {
      description: text('description', demoVideo.description, optionalGroupId),
      alt: text('alt', demoVideo.alt, requiredGroupId),
      sources: object('sources', demoVideo.sources, requiredGroupId),
      tracks: object('tracks', demoVideo.tracks, requiredGroupId),
    };
  } else if (media === 'embed') {
    const options = ['16-9', '4-3', '3-2', '1-1'];
    data = {
      embedded_media: decode(
        text('embedded_media', embeddedMedia, requiredGroupId)
      ),
      description: text('description', demoVideo.description, optionalGroupId),
      ratio: select('ratio', options, '16-9', requiredGroupId),
    };
  } else {
    data = {
      description: text('description', imgProps.description, optionalGroupId),
      alt: text('alt', imgProps.alt, requiredGroupId),
      image: text('image', demoImg, requiredGroupId),
    };
  }

  return data;
};

storiesOf('Components/Media container', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('image', () => mediaContainer(prepareMediaContainer('image')), {
    notes: { markdown: notes, json: prepareMediaContainer('image') },
  })
  .add('video', () => mediaContainer(prepareMediaContainer('video')), {
    notes: { markdown: notes, json: prepareMediaContainer('video') },
  })
  .add(
    'embedded video',
    () => {
      return mediaContainer(prepareMediaContainer('embed'));
    },
    {
      notes: { markdown: notes, json: prepareMediaContainer('embed') },
    }
  );
