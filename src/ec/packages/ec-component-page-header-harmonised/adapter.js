import dataLong from '../ec-component-breadcrumb-harmonised/demo/data';
import dataLongEu from '../ec-component-breadcrumb-core/demo/data--eu';

// Handle the EU demo.
const system = process.env.STORYBOOK_SYSTEM
  ? process.env.STORYBOOK_SYSTEM
  : false;

const breadcrumb = system ? dataLongEu : dataLong;

const adapter = initialData => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.breadcrumb = breadcrumb;

  if (adaptedData.meta) {
    adaptedData.meta = adaptedData.meta.replace(/(<([^>]+)>)/gi, '');
  }

  return adaptedData;
};

export default adapter;
