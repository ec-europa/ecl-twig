/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-page-header/demo/data-events-description';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.infos && Array.isArray(adaptedData.infos)) {
    adaptedData.infos.forEach(info => {
      const iconName = info.icon;
      info.icon = {};
      info.icon.name = iconName;
    });
  }

  return adaptedData;
};

export default adapter(specData);
