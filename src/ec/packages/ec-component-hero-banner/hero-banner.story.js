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
import dataImage from './demo/data--image-text-box';
import dataImageGradient from './demo/data--image-gradient';
import dataImageShade from './demo/data--image-shade';
import dataSimplePrimary from './demo/data--simple-primary';
import dataSimpleGrey from './demo/data--simple-grey';
import dataSimpleWhite from './demo/data--simple-white';
import heroBanner from './ecl-hero-banner.html.twig';
import notes from './README.md';

const icons = { none: '' };
uiIcons.forEach((icon) => {
  icons[icon] = icon;
});

const prepareBanner = (data, variant) => {
  data.centered = boolean('centered', data.centered, tabLabels.states);
  data.type = select('type', [data.type], data.type, tabLabels.required);
  data.title = text('title', data.title, tabLabels.optional);
  data.description = text('description', data.description, tabLabels.optional);

  if (variant === 'img') {
    data.image = text('image', data.image, tabLabels.required);
  }
  data.link.link.label = text(
    'link.link.label',
    data.link.link.label,
    tabLabels.optional
  );
  data.link.link.path = text(
    'link.link.path',
    data.link.link.path,
    tabLabels.optional
  );
  data.link.icon.name = select(
    'link.icon.name',
    icons,
    data.link.icon.name,
    tabLabels.optional
  );
  if (data.link.icon.name) {
    getIconKnobs(
      data,
      data.link.icon.name,
      'ui',
      'xs',
      'default',
      'rotate-90',
      true
    );
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Banners/Hero Banner',
  decorators: [withKnobs, withNotes, withCode],
};

export const Default = () => heroBanner(prepareBanner(dataSimplePrimary));

Default.storyName = 'simple - primary';
Default.parameters = { notes: { markdown: notes, json: dataSimplePrimary } };

export const SimpleGrey = () => heroBanner(prepareBanner(dataSimpleGrey));

SimpleGrey.storyName = 'simple - grey';
SimpleGrey.parameters = { notes: { markdown: notes, json: dataSimpleGrey } };

export const SimpleWhite = () => heroBanner(prepareBanner(dataSimpleWhite));

SimpleWhite.storyName = 'simple - white';
SimpleWhite.parameters = { notes: { markdown: notes, json: dataSimpleWhite } };

export const Image = () => heroBanner(prepareBanner(dataImage, 'img'));

Image.storyName = 'image - text-box';
Image.parameters = { notes: { markdown: notes, json: dataImage } };

export const ImageGradient = () =>
  heroBanner(prepareBanner(dataImageGradient, 'img'));

ImageGradient.storyName = 'image - gradient';
ImageGradient.parameters = {
  notes: { markdown: notes, json: dataImageGradient },
};

export const ImageShade = () =>
  heroBanner(prepareBanner(dataImageShade, 'img'));

ImageShade.storyName = 'image - shade';
ImageShade.parameters = { notes: { markdown: notes, json: dataImageShade } };
