/* eslint-disable no-param-reassign, prefer-destructuring */

function fixDataInput(data, componentRootName) {
  if (componentRootName.includes('page-header-')) {
    data = data.demoMetaTitleDescriptionContent;
  } else if (data.dataGroup1) {
    data = data.dataGroup1;
  } else if (data.englishData) {
    data = data.englishData;
  }
  return data;
}

module.exports = fixDataInput;
