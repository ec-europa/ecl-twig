import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

// Import data for tests
import dataDefault from '@ecl/ec-specs-text-input/demo/data--default';
import dataDisabled from '@ecl/ec-specs-text-input/demo/data--disabled';
import dataError from '@ecl/ec-specs-text-input/demo/data--with-error';

describe('EC - Text input', () => {
  const template = path.resolve(__dirname, './text-input.html.twig');

  describe('Default', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, dataDefault, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('Disabled', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, dataDisabled, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });

  describe('With error', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(template, dataError, (err, html) => {
        expect(html).toMatchSnapshot();
        done();
      });
    });
  });
});
