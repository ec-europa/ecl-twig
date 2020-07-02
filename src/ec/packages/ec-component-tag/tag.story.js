import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, optionsKnob } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import dataLink from './demo/data--link';
import dataButton from './demo/data--button';
import dataRemovable from './demo/data--removable';
import tag from './ecl-tag.html.twig';
import notes from './README.md';

// Preserve the adapted specs.
const prepareTag = (data, link, aria) => {
  data.tag.type = select(
    'tag.type',
    [data.tag.type],
    data.tag.type,
    tabLabels.required
  );
  data.tag.label = text('tag.label', data.tag.label, tabLabels.required);
  if (link) {
    data.tag.path = text('tag.path', data.tag.path, tabLabels.required);
  }
  if (aria) {
    data.tag.aria_label = text(
      'tag.aria_label',
      data.tag.aria_label,
      tabLabels.required
    );
  }
  if (aria) {
    data.default_icon_path = optionsKnob(
      'default_icon_path',
      { current: defaultSprite, 'no path': '' },
      defaultSprite,
      { display: 'inline-radio' },
      tabLabels.required
    );
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Tag', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('as a link', () => tag(prepareTag(dataLink, true)), {
    notes: { markdown: notes, json: dataLink },
  })
  .add('as a button', () => tag(prepareTag(dataButton)), {
    notes: { markdown: notes, json: dataButton },
  })
  .add('removable', () => tag(prepareTag(dataRemovable, false, true)), {
    notes: { markdown: notes, json: dataRemovable },
  });
