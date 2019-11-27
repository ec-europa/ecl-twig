const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.icon = {};
  adaptedData.icon.size = 'm';
  adaptedData.icon.path = '/icons.svg';
  adaptedData.icon.name = adaptedData.shape;
  delete adaptedData.shape;

  return adaptedData;
};

export default adapter;
