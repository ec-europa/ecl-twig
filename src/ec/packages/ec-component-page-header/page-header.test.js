import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import breadcrumbDataSimple from '@ecl/ec-specs-breadcrumb/demo/data-simple';

import pageHeaderDataTitle from '@ecl/ec-specs-page-header/demo/data-title';
import pageHeaderDataTitleDescription from '@ecl/ec-specs-page-header/demo/data-title-description';
import pageHeaderDataMetaTitle from '@ecl/ec-specs-page-header/demo/data-meta-title';
import pageHeaderDataMetaTitleDescription from '@ecl/ec-specs-page-header/demo/data-meta-title-description';
import pageHeaderDataEvents from '@ecl/ec-specs-page-header/demo/data-events';
import pageHeaderDataEventsDescription from '@ecl/ec-specs-page-header/demo/data-events-description';

function formatBreadcrumbLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

function formatPageHeaderInfo(i) {
  const iconType = i.icon.split('--');
  const info = {
    text: i.text,
    icon: {
      type: iconType[0],
      name: iconType[1],
      path: 'static/icons.svg',
    },
  };

  return info;
}

function preparePageHeaderData(data) {
  const output = {};

  output.breadcrumb = {
    links: breadcrumbDataSimple.items.map(formatBreadcrumbLink),
    navigation_text: breadcrumbDataSimple.label,
    icon_file_path: 'static/icons.svg',
  };

  output.title = data.title;

  if (data.description) {
    output.description = data.description;
  }

  if (data.meta) {
    output.meta = data.meta;
  }

  if (data.infos) {
    output.infos = data.infos.map(formatPageHeaderInfo);
  }

  return output;
}

describe('EC - Page Header', () => {
  const template = path.resolve(__dirname, './page-header.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('title', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = preparePageHeaderData(pageHeaderDataTitle);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('title-description', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = preparePageHeaderData(pageHeaderDataTitleDescription);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('meta-title', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = preparePageHeaderData(pageHeaderDataMetaTitle);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('meta-title-description', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = preparePageHeaderData(pageHeaderDataMetaTitleDescription);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('events', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = preparePageHeaderData(pageHeaderDataEvents);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('events-description', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = preparePageHeaderData(pageHeaderDataEventsDescription);

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });
});
