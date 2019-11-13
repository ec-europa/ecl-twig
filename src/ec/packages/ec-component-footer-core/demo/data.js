/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-footer-core/demo/data';
import { formatLink } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.sections.forEach(section => {
    if (section.title) {
      section.title = formatLink(section.title);
    }
    if (section.sectionClassName) {
      section.section_class_name = section.sectionClassName;
      delete section.sectionClassName;
    }
    if (section.listClassName) {
      section.list_class_name = section.listClassName;
      delete section.listClassName;
    }
    if (section.links && Array.isArray(section.links)) {
      section.links = section.links.map(formatLink);
    }
  });
  return adaptedData;
};

export default adapter(specData);
