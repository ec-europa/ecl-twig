import dataLong from '../ec-component-breadcrumb-standardised/demo/data';

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.breadcrumb = dataLong;
  if (adaptedData.meta) {
    adaptedData.meta = adaptedData.meta.replace(/(<([^>]+)>)/gi, '');
  }

  return adaptedData;
};

export default adapter;
