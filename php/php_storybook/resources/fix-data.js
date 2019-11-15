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
  } else if (componentRootName === 'language-list') {
    data = data.dataSplash;
    data.icon_file_path = '/icons.svg';
    data.logo = {};
    data.logo.path = '/logo--mute.svg';
    data.logo.alt = 'European Commission logo';
  } else if (componentRootName.includes('card')) {
    data.card = {};
    data.card.description = data.description;
    data.card.title = data.title;
    delete(data.description);
    if (data.meta) {
      const meta = data.meta;
      data.card.meta = [];
      data.card.meta.push(meta);
      delete(data.meta);
    }
    if (data.tags) {
      data.card.tags = data.tags;
      delete(data.tags);
    }
    if (data.card.title.href) {
      data.card.title.path = data.card.title.href;
    }
    if (data.image) {
      data.card.image = data.image;
      delete(data.image);
    }
    if (data.infos) {
      data.card.infos = data.infos;
      delete(data.infos);
    }
    if (data.links) {
      data.card.links = data.links;
      delete(data.links);
    }
    delete(data.title);
  } else if (componentRootName === 'link') {
    data.link = {
      type: data.variant,
      label: data.label,
      path: data.href,
    };
    if (data.icon) {
      data.link.icon_position = 'after';
      data.icon.path = '/icons.svg';
      data.icon.name = data.icon.shape;
      delete(data.icon.shape);
    }
    delete(data.variant);
    delete(data.label);
    delete(data.href);
    delete(data.title);
  } else if (componentRootName === 'icon') {
    if (data.shape) {
      data.icon = {};
      data.icon.name = data.shape;
    }
  } else if (componentRootName === 'file') {
    data = data.dataWithTranslation;
  } else if (
    componentRootName === 'text-area' ||
    componentRootName === 'text-input'
  ) {
    if (data.has_error) {
      data.invalid = true;
      data.invalid_text = 'This is the error message';
    }
    if (data.is_disabled) {
      data.disabled = true;
    }
    data.helper_text = "This is the input's helper text";
    data.optional_text = '(optional)';
    data.name = 'example-name';
    data.label = 'Label';
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
