const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  if (adaptedData.image) {
    adaptedData.background_image = true;
    adaptedData.background_image_url = adaptedData.image;
    delete adaptedData.image;
  }
  // Overriding this to align with ECL.
  adaptedData.breadcrumb.ellipsis_label = 'Click here to expand';

  return adaptedData;
};

export default adapter;
