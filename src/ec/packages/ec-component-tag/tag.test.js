import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Tag', () => {
  const template = path.resolve(__dirname, './tag.html.twig');
  const defaultIconPath = 'static/icons-cbfd6efe.svg';
  const defaultDataStructure = {
    tag: {
      path: '',
      type: '',
      label: '',
    },
    default_icon_path: defaultIconPath,
  };

  describe('Link', () => {
    test(`- link tag renders correctly`, done => {
      expect.assertions(1);

      defaultDataStructure.tag.type = 'link';
      defaultDataStructure.tag.label = 'Link tag';
      defaultDataStructure.tag.path = '/example-path';

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Button', () => {
    test(`- button tag renders correctly`, done => {
      expect.assertions(1);

      defaultDataStructure.tag.type = 'button';
      defaultDataStructure.tag.label = 'Button tag';

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Removable', () => {
    test(`- removable tag renders correctly`, done => {
      expect.assertions(1);

      defaultDataStructure.tag.type = 'removable';
      defaultDataStructure.tag.label = 'Removable tag';
      defaultDataStructure.default_icon_path = defaultIconPath;

      renderTwigFile(template, defaultDataStructure, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
