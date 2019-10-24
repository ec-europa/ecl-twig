/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-file-upload/demo/data--default';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.helper_text = adaptedData.helperText;
  delete adaptedData.helperText;

  return adaptedData;
};

export default adapter(specData);
