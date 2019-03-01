import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import breadcrumbDataSimple from '@ecl/ec-specs-breadcrumb/demo/data-simple';
import breadcrumbDataLong from '@ecl/ec-specs-breadcrumb/demo/data';

function formatLink(l) {
  const link = {
    label: l.label,
    path: l.href,
  };

  return link;
}

describe('EC - Site Header', () => {
  const template = path.resolve(__dirname, './breadcrumb.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  describe('Breadcrumb simple', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = {
        links: breadcrumbDataSimple.items.map(formatLink),
        icon_file_path: defaultIconPath,
        navigation_text: breadcrumbDataSimple.label,
      };

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });

  describe('Breadcrumb long', () => {
    test(`- renders correctly`, () => {
      expect.assertions(1);

      const data = {
        links: breadcrumbDataLong.items.map(formatLink),
        icon_file_path: defaultIconPath,
        navigation_text: breadcrumbDataLong.label,
      };

      return expect(render(data)).resolves.toMatchSnapshot();
    });
  });
});
