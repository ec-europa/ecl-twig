/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specDataDefault from '@ecl/ec-specs-hero-banner/demo/data--default';
import specDataPrimary from '@ecl/ec-specs-hero-banner/demo/data--primary';
import specDataImage from '@ecl/ec-specs-hero-banner/demo/data--image';
import specDataImageShade from '@ecl/ec-specs-hero-banner/demo/data--image-shade';
import specDataLeft from '@ecl/ec-specs-hero-banner/demo/data--align-left';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.centered = initialData.isCentered;
  delete adaptedData.isCentered;

  return adaptedData;
};

export const dataDefault = adapter(specDataDefault);
export const dataPrimary = adapter(specDataPrimary);
export const dataImage = adapter(specDataImage);
export const dataImageShade = adapter(specDataImageShade);
export const dataLeft = adapter(specDataLeft);
