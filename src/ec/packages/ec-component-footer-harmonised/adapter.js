/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import { formatLink } from '@ecl-twig/data-utils';

const adapter = initialData => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.sections.forEach(section => {
    if (section.contentBefore) {
      section.content_before = section.contentBefore;
      delete section.contentBefore;
    }

    if (section.sectionClassName) {
      section.section_class_name = section.sectionClassName;
      delete section.sectionClassName;
    }
    if (section.listClassName) {
      section.list_class_name = section.listClassName;
      delete section.listClassName;
    }
    if (section.titleClassName) {
      section.title_class_name = section.titleClassName;
      delete section.titleClassName;
    }
    if (section.title && section.title instanceof Object) {
      section.title = formatLink(section.title);
      if (section.title.icon) {
        section.title.icon.path = '/icons.svg';
      }
    }
    if (section.links && Array.isArray(section.links)) {
      section.links = section.links.map(formatLink);
      section.links.forEach(l => {
        if (l.icon) {
          l.icon.path = '/icons.svg';
        }
      });
    }
  });

  return adaptedData;
};

export default adapter;