/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-footer-core/demo/data';

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
      path: 'static/icons.svg',
      type,
      name,
      size: l.icon.size,
    };
  }
  return link;
}

export default specData.sections.map(s => {
  if (s.sectionClassName) {
    s.section_class_name = s.sectionClassName;
    delete s.sectionClassName;
  }
  if (s.listClassName) {
    s.list_class_name = s.listClassName;
    delete s.listClassName;
  }
  if (s.links && Array.isArray(s.links)) {
    s.links = s.links.map(formatLink);
  }
  return s;
});
