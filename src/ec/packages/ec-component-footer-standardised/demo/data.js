/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-footer-standardised/demo/data';

// function formatLink(l) {
//   const link = {
//     link: {
//       label: l.label,
//       path: l.href,
//     },
//   };
//   if (l.icon) {
//     const [type, name] = l.icon.shape.split('--');
//     link.link.icon_position = l.iconPosition;
//     link.icon = {
//       path: 'static/icons.svg',
//       type,
//       name: l.icon.shape,
//       size: l.icon.size,
//     };
//   }
//   console.log('href = ' + link.link.path);
//   return link;
// }

export default specData.sections.map(s => {
  if (s.titleClassName) {
    s.title_class_name = s.titleClassName;
    delete s.titleClassName;
  }
  if (s.listClassName) {
    s.list_class_name = s.listClassName;
    delete s.listClassName;
  }
  if (s.contentBefore) {
    s.content_before = s.contentBefore;
    delete s.contentBefore;
  }

  // if (s.links && Array.isArray(s.links)) {
  //   s.links.forEach(function(l) {
  //     formatLink(l);
  //   });
  //   // s.links = s.links.map(formatLink);
  // }

  // if (s.title instanceof Object) {
  //   formatLink(s.title);
  // }

  return s;
});
