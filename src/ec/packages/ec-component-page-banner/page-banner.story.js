import { storiesOf } from '@storybook/html';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import {
  withKnobs,
  text,
  boolean,
  select,
  button,
} from '@storybook/addon-knobs';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getIconKnobs,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';
import bannerDataDefault from './demo/data--default';
import bannerDataImage from './demo/data--image';
import bannerDataImageShade from './demo/data--image-shade';
import bannerDataPrimary from './demo/data--primary';
import bannerDataAlignLeft from './demo/data--align-left';
import pageBanner from './ecl-page-banner.html.twig';
import notes from './README.md';

// Preserve the adapted specs.
let defaultData = { ...bannerDataDefault };
let imageData = { ...bannerDataImage };
let imageShadeData = { ...bannerDataImageShade };
let primaryData = { ...bannerDataPrimary };
let leftData = { ...bannerDataAlignLeft };

// Show/hide buttons for optional elements.
const defaultDescBtnToggler = () => {
  defaultData.baseline = defaultData.baseline
    ? false
    : bannerDataDefault.baseline;
};
const imageDescBtnToggler = () => {
  imageData.baseline = imageData.baseline ? false : bannerDataImage.baseline;
};
const imageShadeDescBtnToggler = () => {
  imageShadeData.baseline = imageShadeData.baseline
    ? false
    : bannerDataImageShade.baseline;
};
const primaryDescBtnToggler = () => {
  primaryData.baseline = primaryData.baseline
    ? false
    : bannerDataPrimary.baseline;
};
const leftDescBtnToggler = () => {
  leftData.baseline = leftData.baseline ? false : bannerDataAlignLeft.baseline;
};
const defaultTitleBtnToggler = () => {
  defaultData.title = defaultData.title ? false : bannerDataDefault.title;
};
const imageTitleBtnToggler = () => {
  imageData.title = imageData.title ? false : bannerDataImage.title;
};
const imageShadeTitleBtnToggler = () => {
  imageShadeData.title = imageShadeData.title
    ? false
    : bannerDataImageShade.title;
};
const primaryTitleBtnToggler = () => {
  primaryData.title = primaryData.title ? false : bannerDataPrimary.title;
};
const leftTitleBtnToggler = () => {
  leftData.title = leftData.title ? false : bannerDataAlignLeft.title;
};
const defaultCtaBtnToggler = () => {
  defaultData.link = defaultData.link ? false : bannerDataDefault.link;
};
const imageCtaBtnToggler = () => {
  imageData.link = imageData.link ? false : bannerDataImage.link;
};
const imageShadeCtaBtnToggler = () => {
  imageShadeData.link = imageShadeData.link ? false : bannerDataImage.link;
};
const primaryCtaBtnToggler = () => {
  primaryData.link = primaryData.link ? false : bannerDataPrimary.link;
};
const leftCtaBtnToggler = () => {
  leftData.link = leftData.link ? false : bannerDataAlignLeft.link;
};
// Reset buttons.
const defaultResetBtnToggler = () => {
  defaultData = { ...bannerDataDefault };
};
const imageResetBtnToggler = () => {
  imageData = { ...bannerDataImage };
};
const imageShadeResetBtnToggler = () => {
  imageShadeData = { ...bannerDataImageShade };
};
const primaryResetBtnToggler = () => {
  primaryData = { ...bannerDataPrimary };
};
const leftResetBtnToggler = () => {
  leftData = { ...bannerDataAlignLeft };
};

uiIcons.unshift('null');
const preparePageBanner = data => {
  if (data.centered) {
    data.centered = boolean('centered', data.centered, tabLabels.states);
  }

  data.type = select('type', [data.type], data.type, tabLabels.required);
  if (data.title) {
    data.title = text('title', data.title, tabLabels.optional);
  }
  if (data.baseline) {
    data.baseline = text('baseline', data.baseline, tabLabels.optional);
  }
  if (data.image) {
    data.image = text('image', data.image, tabLabels.required);
  }
  if (data.link) {
    if (data.link.link) {
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
    }
    if (data.link.icon) {
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
    }
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

storiesOf('Components/Banners/Page Banner', module)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .addDecorator(withKnobs)
  .add(
    'image',
    () => {
      button('With or without title', imageTitleBtnToggler, tabLabels.cases);
      button('With or without baseline', imageDescBtnToggler, tabLabels.cases);
      button('With or without cta', imageCtaBtnToggler, tabLabels.cases);
      button('Reset the layout', imageResetBtnToggler, tabLabels.cases);

      return pageBanner(preparePageBanner(imageData));
    },
    {
      notes: { markdown: notes, json: imageData },
    }
  )
  .add(
    'image-shade',
    () => {
      button(
        'With or without title',
        imageShadeTitleBtnToggler,
        tabLabels.cases
      );
      button(
        'With or without baseline',
        imageShadeDescBtnToggler,
        tabLabels.cases
      );
      button('With or without cta', imageShadeCtaBtnToggler, tabLabels.cases);
      button('Reset the layout', imageShadeResetBtnToggler, tabLabels.cases);

      return pageBanner(preparePageBanner(imageShadeData));
    },
    {
      notes: { markdown: notes, json: imageShadeData },
    }
  )
  .add(
    'primary',
    () => {
      button('With or without title', primaryTitleBtnToggler, tabLabels.cases);
      button(
        'With or without baseline',
        primaryDescBtnToggler,
        tabLabels.cases
      );
      button('With or without cta', primaryCtaBtnToggler, tabLabels.cases);
      button('Reset the layout', primaryResetBtnToggler, tabLabels.cases);

      return pageBanner(preparePageBanner(primaryData));
    },
    {
      notes: { markdown: notes, json: primaryData },
    }
  )
  .add(
    'default',
    () => {
      button('With or without title', defaultTitleBtnToggler, tabLabels.cases);
      button(
        'With or without baseline',
        defaultDescBtnToggler,
        tabLabels.cases
      );
      button('With or without cta', defaultCtaBtnToggler, tabLabels.cases);
      button('Reset the layout', defaultResetBtnToggler, tabLabels.cases);

      return pageBanner(preparePageBanner(defaultData));
    },
    {
      notes: { markdown: notes, json: defaultData },
    }
  )
  .add(
    'align-left',
    () => {
      button('With or without title', leftTitleBtnToggler, tabLabels.cases);
      button('With or without baseline', leftDescBtnToggler, tabLabels.cases);
      button('With or without cta', leftCtaBtnToggler, tabLabels.cases);
      button('Reset the layout', leftResetBtnToggler, tabLabels.cases);

      return pageBanner(preparePageBanner(leftData));
    },
    {
      notes: { markdown: notes, json: leftData },
    }
  );
