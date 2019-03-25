/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-breadcrumb/demo/data';

function formatLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));

  const links = adaptedData.items.map(formatLink);

  return {
    links,
    navigation_text: adaptedData.label,
    ellipsis_label: 'Click to expand',
  };
};

export default adapter(specData);
