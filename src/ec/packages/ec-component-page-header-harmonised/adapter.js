const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  // Overriding this to align with ECL.
  adaptedData.breadcrumb.ellipsis_label = 'Click here to expand';

  return adaptedData;
};

export default adapter;
