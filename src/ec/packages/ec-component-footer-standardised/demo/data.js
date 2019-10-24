/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-footer-standardised/demo/data';

function formatLink(l) {
  const link = {
    link: {
      label: l.label,
      path: l.href,
    },
  };
  if (l.icon) {
    const [type, name] = l.icon.shape.split('--');
    link.link.icon_position = l.iconPosition;
    link.icon = {
      path: 'static/media/icons.a11fa655.svg',
      type,
      name,
      size: l.icon.size,
    };
  }
  return link;
}

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
    }
    if (section.links && Array.isArray(section.links)) {
      section.links = section.links.map(formatLink);
    }
  });

  return adaptedData;
};

export default adapter(specData);
