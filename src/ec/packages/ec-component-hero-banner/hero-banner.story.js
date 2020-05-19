import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  getExtraKnobs,
  getIconKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';
import withCode from '@ecl-twig/storybook-addon-code';

import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import dataDefault from './demo/data--default';
import dataImage from './demo/data--image';
import dataImageShade from './demo/data--image-shade';
import dataPrimary from './demo/data--primary';
import dataLeft from './demo/data--align-left';

import heroBanner from './ecl-hero-banner.html.twig';
import notes from './README.md';

uiIcons.unshift('null');

const prepareBanner = (data, variant) => {
  data.centered = boolean('centered', data.centered, tabLabels.states);
  data.type = select('type', [data.type], data.type, tabLabels.required);
  data.title = text('title', data.title, tabLabels.required);
  data.description = text('description', data.description, tabLabels.required);

  if (variant === 'img') {
    data.image = text('image', data.image, tabLabels.required);
  }
  data.link.link.label = text(
    'link.link.label',
    data.link.link.label,
    tabLabels.required
  );
  data.link.link.path = text(
    'link.link.path',
    data.link.link.path,
    tabLabels.required
  );
  data.link.icon.name = select(
    'link.icon.name',
    uiIcons,
    data.link.icon.name,
    tabLabels.optional
  );
  if (data.link.icon.name !== 'null') {
    getIconKnobs(
      data,
      data.link.icon.name,
      'ui',
      'xs',
      'default',
      'rotate-90',
      true
    );
  } else {
    delete data.link.icon;
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Banners/Hero Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add('image', () => heroBanner(prepareBanner(dataImage, 'img')), {
    notes: { markdown: notes, json: dataImage },
  })
  .add('image-shade', () => heroBanner(prepareBanner(dataImageShade, 'img')), {
    notes: { markdown: notes, json: dataImageShade },
  })
  .add('primary', () => heroBanner(prepareBanner(dataPrimary)), {
    notes: { markdown: notes, json: dataPrimary },
  })
  .add('default', () => heroBanner(prepareBanner(dataDefault)), {
    notes: { markdown: notes, json: dataDefault },
  })
  .add('align-left', () => heroBanner(prepareBanner(dataLeft)), {
    notes: { markdown: notes, json: dataLeft },
  });
