const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  const iconType = adaptedData.link.icon.shape.split('--');
  const banner = {
    type: adaptedData.variant,
    title: adaptedData.title,
    baseline: adaptedData.baseline,
    link: {
      link: {
        label: adaptedData.link.label,
        icon_position: 'after',
      },
      icon: {
        type: iconType[0],
        name: iconType[1],
        transform: adaptedData.link.icon.transform,
        size: adaptedData.link.icon.size,
        path: '/icons.svg',
      },
    },
    centered: adaptedData.isCentered,
  };

  if ('image' in adaptedData) {
    banner.image = adaptedData.image;
  }

  return banner;
};

export default adapter;
