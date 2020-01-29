/* eslint-disable no-param-reassign */
import breadcrumbDataSimple from '../ec-component-breadcrumb/demo/data--simple';

function formatPageHeaderInfo(i) {
  const iconType = i.icon.name.split('--');
  const info = {
    icon: {
      type: iconType[0],
      name: iconType[1],
      path: '/icons.svg',
    },
    text: i.text,
  };

  return info;
}

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.infos && Array.isArray(adaptedData.infos)) {
    adaptedData.infos.forEach(info => {
      const iconName = info.icon;
      info.icon = {};
      info.icon.name = iconName;
      info.icon.path = '/icons.svg';
    });
  }

  adaptedData.breadcrumb = breadcrumbDataSimple;
  if (adaptedData.infos) {
    adaptedData.infos = adaptedData.infos.map(formatPageHeaderInfo);
  }

  return adaptedData;
};

export default adapter;
