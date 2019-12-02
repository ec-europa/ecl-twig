import dataLong from '../ec-component-breadcrumb-harmonised/demo/data';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.breadcrumb = dataLong;
  return adaptedData;
};

export default adapter;
