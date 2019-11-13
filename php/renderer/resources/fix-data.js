/* eslint-disable no-param-reassign, prefer-destructuring */

function fixDataInput(data, componentRootName) {
  if (componentRootName.includes('page-header-')) {
    data = data.demoMetaTitleDescriptionContent;
  } else if (componentRootName === 'search-form') {
    data = {
      text_input: {
        id: 'input-search',
        name: 'search',
        extra_classes: 'ecl-search-form__text-input',
        label: 'Search',
      },
      button: {
        variant: 'search',
        icon: {
          type: 'general',
          name: 'search',
          path: '/icons.svg',
          size: 'fluid',
        },
        label: 'Search',
        extra_classes: 'ecl-search-form__button',
      },
    };
  } else if (componentRootName === 'tag') {
    data = {
      tag: {
        label: 'Link tag',
        path: '/example',
      },
    };
  } else if (componentRootName.includes('card')) {
    if (data.card.meta) {
      const meta = data.card.meta;
      data.card.meta = [];
      data.card.meta.push(meta);
    }
    if (data.card.image) {
      data.card.image = {};
      data.card.image.src =
        'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg';
      data.card.image.alt = 'alt';
    }
    if (data.card.title.href) {
      data.card.title.path = data.card.title.href;
    }
  }
  if (componentRootName === 'link') {
    data.link = {
      extra_classes: data.variant ? data.variant : '',
      type: 'standalone',
      label: data.label,
      href: data.href,
      icon: data.icon ? data.icon : '',
    };
  } else if (componentRootName === 'icon') {
    if (data.shape) {
      data.icon = {};
      data.icon.name = data.shape;
    }
  } else if (componentRootName === 'file') {
    data = data.dataWithTranslation;
  } else if (data.dataDefault) {
    data = data.dataDefault;
    if (componentRootName === 'hero-banner') {
      if (data.link) {
        data.link = [];
        data.link.link = data.link;
      }
    }
  } else if (data.bannerDataDefault) {
    data = data.bannerDataDefault;
  } else if (data.dataInfo) {
    data = data.dataInfo;
  } else if (data.dataGroup1) {
    data = data.dataGroup1;
  } else if (data.dataLong) {
    data = data.dataLong;
  } else if (data.englishData) {
    data = data.englishData;
  }
  return data;
}

module.exports = fixDataInput;
