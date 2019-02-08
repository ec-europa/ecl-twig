import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

// Import data for tests
import dataPrimary from '@ecl/eu-specs-button/demo/data--primary';
import dataSecondary from '@ecl/eu-specs-button/demo/data--secondary';
import dataCall from '@ecl/eu-specs-button/demo/data--call';
import dataGhost from '@ecl/eu-specs-button/demo/data--ghost';
import dataSearch from '@ecl/eu-specs-button/demo/data--search';

describe('EU - Button', () => {
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
});
