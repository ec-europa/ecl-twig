import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import { getExtraKnobs, tabLabels, getIconKnobs } from '@ecl-twig/story-utils';

import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

import bannerDataDefault from './demo/data--default';
import bannerDataImage from './demo/data--image';
import bannerDataImageShade from './demo/data--image-shade';
import bannerDataPrimary from './demo/data--primary';
import bannerDataAlignLeft from './demo/data--align-left';

import pageBanner from './ecl-page-banner.html.twig';
import notes from './README.md';

uiIcons.unshift('null');
const preparePageBanner = data => {
  if (data.centered) {
    data.centered = boolean('centered', data.centered, tabLabels.states);
  }

  data.type = select('type', [data.type], data.type, tabLabels.required);
  data.title = text('title', data.title, tabLabels.required);
  if (data.baseline) {
    data.baseline = text('baseline', data.baseline, tabLabels.required);
  }
  if (data.image) {
    data.image = text('image', data.image, tabLabels.required);
  }
  data.link.link.label = text(
    'Link label',
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

  return data;
};

storiesOf('Components/Banners/Page Banner', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add('image', () => pageBanner(preparePageBanner(bannerDataImage)), {
    notes: { markdown: notes, json: bannerDataImage },
  })
  .add(
    'image-shade',
    () => pageBanner(preparePageBanner(bannerDataImageShade)),
    {
      notes: { markdown: notes, json: bannerDataImageShade },
    }
  )
  .add('primary', () => pageBanner(preparePageBanner(bannerDataPrimary)), {
    notes: { markdown: notes, json: bannerDataPrimary },
  })
  .add('default', () => pageBanner(preparePageBanner(bannerDataDefault)), {
    notes: { markdown: notes, json: bannerDataDefault },
  })
  .add('align-left', () => pageBanner(preparePageBanner(bannerDataAlignLeft)), {
    notes: { markdown: notes, json: bannerDataAlignLeft },
  });
