/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import { formatLink } from '@ecl-twig/data-utils';

const formatSection = section => {
  const sections = [];
  if (!Array.isArray(section)) {
    section = [section];
  }

  section.forEach(s => {
    if (s.listClassName) {
      s.list_class_name = s.listClassName;
      delete s.listClassName;
    }
    if (s.titleClassName) {
      s.title_class_name = s.titleClassName;
      delete s.titleClassName;
    }
    if (s.contentBefore) {
      s.content_before = s.contentBefore;
      delete s.contentBefore;
    }
    if (s.contentAfter) {
      s.content_after = s.contentAfter;
      delete s.contentAfter;
    }
    if (s.title && s.title instanceof Object) {
      s.title = formatLink(s.title);
      if (s.title.icon) {
        s.title.icon.path = '/icons.svg';
      }
    }
    if (s.links && Array.isArray(s.links)) {
      s.links = s.links.map(formatLink);
      s.links.forEach(l => {
        if (l.icon) {
          l.icon.path = '/icons.svg';
        }
      });
    }
    sections.push(s);
  });

  return sections;
};

const adapter = initialData => {
  const adaptedData = {};
  adaptedData.sections = [];
  Object.keys(initialData.sections).forEach(section => {
    if (section === 'siteName') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.siteName)
      );
    }
    if (section === 'dgServices') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.dgServices)
      );
    }
    if (section === 'dgNavigations') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.dgNavigations)
      );
    }
    if (section === 'classes') {
      adaptedData.sections.push(...formatSection(initialData.sections.classes));
    }
    if (section === 'corporateName') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.corporateName)
      );
    }
    if (section === 'serviceNavigation') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.serviceNavigation)
      );
    }
    if (section === 'legalNavigation') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.legalNavigation)
      );
    }
  });

  adaptedData.group = initialData.group;

  return adaptedData;
};

export default adapter;
