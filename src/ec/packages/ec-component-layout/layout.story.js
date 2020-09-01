import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs } from '@ecl-twig/story-utils';

import specs from './demo/data';
import layout from './ecl-layout.html.twig';
import notes from './README.md';

const prepareLayout = (data) => {
  getExtraKnobs(data);

  return data;
};

export default {
  title: 'Components/Layout',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => layout(prepareLayout(specs, 'default'));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
