/* eslint-disable import/no-extraneous-dependencies, no-param-reassign, default-case */
import { formatLink } from '@ecl-twig/data-utils';

const formatSection = (section, name) => {
  const sections = [];
  if (!Array.isArray(section)) {
    section = [section];
  }

  section.forEach((s, i) => {
    switch (name) {
      case 'siteName':
        s.section_id = '1';
        s.type = 'site_name';
        break;
      case 'dgServices':
        s.section_id = '2';
        s.demo_id = 'contact_us';
        s.type = 'dg_services_navigation';
        if (i === 1) {
          s.demo_id = 'follow_us';
        }
        break;
      case 'dgNavigations':
        s.section_id = '3';
        s.demo_id = 'about_us';
        s.type = 'dg_related_navigation';
        if (i === 1) {
          s.demo_id = 'related';
        }
        break;
      case 'classes':
        s.section_id = '6';
        s.type = 'class_names';
        break;
      case 'corporateName':
        s.section_id = '7';
        s.type = 'corporate_name';
        break;
      case 'serviceNavigation':
        s.section_id = '8';
        s.type = 'service_navigation';
        break;
      case 'legalNavigation':
        s.section_id = '9';
        s.type = 'legal_navigation';
        break;
      case 'partnershipLogos':
        s.section_id = '2';
        s.type = 'partnership_logos';
        break;
      case 'ecLogo':
        s.section_id = '2';
        s.type = 'commission_logo';
        break;
      case 'partnershipLabel':
        s.section_id = '1';
        s.type = 'partnership_label';
        break;
    }

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
        ...formatSection(initialData.sections.siteName, section)
      );
    }
    if (section === 'dgServices') {
      adaptedData.sections.push(
        formatSection(initialData.sections.dgServices, section)
      );
    }
    if (section === 'dgNavigations') {
      adaptedData.sections.push(
        formatSection(initialData.sections.dgNavigations, section)
      );
    }
    if (section === 'classes') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.classes, section)
      );
    }
    if (section === 'corporateName') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.corporateName, section)
      );
    }
    if (section === 'serviceNavigation') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.serviceNavigation, section)
      );
    }
    if (section === 'legalNavigation') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.legalNavigation, section)
      );
    }
    if (section === 'partnershipLabel') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.partnershipLabel, section)
      );
    }
    if (section === 'partnershipLogos') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.partnershipLogos, section)
      );
    }
    if (section === 'ecLogo') {
      adaptedData.sections.push(
        ...formatSection(initialData.sections.ecLogo, section)
      );
    }
  });

  adaptedData.group = initialData.group;

  if (adaptedData.group === 'group3') {
    // Group3 adaptations.
    const section0 = adaptedData.sections.shift();
    const dataGroup3 = { sections: [] };
    dataGroup3.sections.push(section0);
    dataGroup3.sections.push({ logos: adaptedData.sections, section_id: 2 });
    dataGroup3.group = adaptedData.group;
    return dataGroup3;
  }
  // Group2 adaptations.
  if (adaptedData.group === 'group2') {
    adaptedData.sections[0].section_id = 1;
    adaptedData.sections[1].section_id = 2;
  }

  return adaptedData;
};

export default adapter;
