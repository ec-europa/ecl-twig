/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-expandable/demo/data';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  adaptedData.label_expanded = adaptedData.labelExpanded;
  adaptedData.label_collapsed = adaptedData.labelCollapsed;
  adaptedData.extra_dropdown_classes = 'ecl-u-type-paragraph-m';

  const [type, name] = adaptedData.button.icon.shape.split('--');

  adaptedData.button.icon = {
    type,
    name,
    ...adaptedData.button.icon,
  };

  return adaptedData;
};

export default adapter(specData);
