/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-menu-legacy/demo/data';

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.icon_path = '/icons.svg';
  if (adaptedData.items && Array.isArray(adaptedData.items)) {
    for (const mainItem of adaptedData.items) {
      if (mainItem.isCurrent) {
        mainItem.is_current = mainItem.isCurrent;
        delete mainItem.isCurrent;
      }

      if (Array.isArray(mainItem.children)) {
        for (const item of mainItem.children) {
          if (Array.isArray(item.items)) {
            for (const option of item.items) {
              if (option.isCurrent) {
                option.is_current = option.isCurrent;
                delete option.isCurrent;
              }
            }
          }
        }
      }
    }
  }

  return adaptedData;
};

export default adapter(specData);
