import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

// Import data for tests
import dataPrimary from '@ecl/ec-specs-button/demo/data--primary';
import dataSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import dataCall from '@ecl/ec-specs-button/demo/data--call';
import dataGhost from '@ecl/ec-specs-button/demo/data--ghost';
import dataSearch from '@ecl/ec-specs-button/demo/data--search';

describe('EC - Button', () => {
  const template = path.resolve(__dirname, './button.html.twig');

  describe('Primary', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, dataPrimary, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Secondary', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, dataSecondary, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('CTA', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      dataCall.icon.path = 'static/icons-cbfd6efe.svg';
      dataCall.icon.type = 'ui';
      dataCall.icon.name = 'corner-arrow';
      dataCall.icon.size = 'fluid';

      renderTwigFile(template, dataCall, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Ghost', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, dataGhost, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Search', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, dataSearch, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('CTA button - icon before', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      dataCall.icon.path = 'static/icons-cbfd6efe.svg';
      dataCall.icon.type = 'ui';
      dataCall.icon.name = 'corner-arrow';
      dataCall.icon.size = 'fluid';
      dataCall.icon_position = 'before';

      renderTwigFile(template, dataCall, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('CTA button - icon after', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      const buttonData = {
        label: 'CTA Button with icon',
        variant: 'call',
        icon: {
          path: 'static/icons-cbfd6efe.svg',
          type: 'ui',
          name: 'corner-arrow',
          size: 'fluid',
        },
      };

      renderTwigFile(template, buttonData, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
