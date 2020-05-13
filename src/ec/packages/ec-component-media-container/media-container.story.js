import he from 'he';
import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import demoImg from './demo/data--image';
import demoVideo from './demo/data--video';
import demoEmbed from './demo/data--embed';
import exampleImg from '../../../../static/images/example-image.jpg';
import mediaContainer from './ecl-media-container.html.twig';
import notes from './README.md';

const prepareMediaContainer = (data, media) => {
  if (media === 'video') {
    data.description = text(
      'description',
      demoVideo.description,
      tabLabels.optional
    );
    data.alt = text('alt', demoVideo.alt, tabLabels.required);
    data.sources = object('sources', demoVideo.sources, tabLabels.required);
    data.tracks = object('tracks', demoVideo.tracks, tabLabels.required);
  } else if (media === 'image') {
    data.description = text(
      'description',
      demoImg.description,
      tabLabels.optional
    );
    data.alt = text('alt', demoImg.alt, tabLabels.required);
    data.image = text('image', exampleImg, tabLabels.required);
  } else {
    const options = ['16-9', '4-3', '3-2', '1-1'];
    data.embedded_media = he.decode(
      text('embedded_media', data.embedded_media, tabLabels.required)
    );
    data.description = text(
      'description',
      demoVideo.description,
      tabLabels.optional
    );
    data.ratio = select('ratio', options, data.ratio, tabLabels.required);
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Media container', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('image', () => mediaContainer(prepareMediaContainer(demoImg, 'image')), {
    notes: { markdown: notes, json: demoImg },
  })
  .add(
    'video',
    () => mediaContainer(prepareMediaContainer(demoVideo, 'video')),
    {
      notes: { markdown: notes, json: demoVideo },
    }
  )
  .add(
    'embedded video',
    () => mediaContainer(prepareMediaContainer(demoEmbed, 'embed')),
    {
      notes: { markdown: notes, json: demoEmbed },
    }
  );
