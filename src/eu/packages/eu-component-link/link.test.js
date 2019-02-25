import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EU - Link', () => {
  const template = path.resolve(__dirname, './link.html.twig');
  const defaultIconPath = 'static/icons-cbfd6efe.svg';
  const defaultDataStructure = {
    link: {
      type: '',
      text: '',
      path: '/path',
    },
  };

  describe('Default', () => {
    test(`- link default renders correctly`, done => {
      expect.assertions(1);

      defaultDataStructure.link.type = 'default';
      defaultDataStructure.link.text = 'Default link';

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Standalone', () => {
    test(`- link standalone renders correctly`, done => {
      expect.assertions(1);

      defaultDataStructure.link.type = 'standalone';
      defaultDataStructure.link.text = 'Standalone link';

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('With icon before', () => {
    test(`- link with icon renders correctly`, done => {
      expect.assertions(1);

      defaultDataStructure.link.type = 'standalone';
      defaultDataStructure.link.text = 'Standalone link with icon';
      defaultDataStructure.link.icon_position = 'before';
      defaultDataStructure.icon = {
        type: 'ui',
        name: 'external',
        size: 'fluid',
        path: defaultIconPath,
      };

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('With icon after', () => {
    test(`- link with icon renders correctly`, done => {
      expect.assertions(1);

      defaultDataStructure.link.type = 'standalone';
      defaultDataStructure.link.text = 'Standalone link with icon';
      defaultDataStructure.link.icon_position = 'after';
      defaultDataStructure.icon = {
        type: 'ui',
        name: 'external',
        size: 'fluid',
        path: defaultIconPath,
      };

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
