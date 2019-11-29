/* eslint-disable import/no-extraneous-dependencies */
import demoTitle from '@ecl/ec-specs-page-header-standardised/demo/data--title';
import demoMetaTitle from '@ecl/ec-specs-page-header-standardised/demo/data--meta-title';
import demoMetaTitleDescription from '@ecl/ec-specs-page-header-standardised/demo/data--meta-title-description';
import dataLong from '../../ec-component-breadcrumb-standardised/demo/data';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.breadcrumb = dataLong;
  return adaptedData;
};

export const demoTitleContent = adapter(demoTitle);
export const demoMetaTitleContent = adapter(demoMetaTitle);
export const demoMetaTitleDescriptionContent = adapter(
  demoMetaTitleDescription
);
