/* eslint-disable no-param-reassign, prefer-destructuring */

function fixDataInput(data, componentRootName) {
  if (componentRootName.includes('page-header-')) {
    data = data.demoMetaTitleDescriptionContent;
  } else if (componentRootName === 'tag') {
    data = {
      tag: {
        label: 'Link tag',
        path: '/example',
      },
    };
  } else if (componentRootName === 'file') {
    data = data.dataWithTranslation;
  } else if (componentRootName === 'text-area') {
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
