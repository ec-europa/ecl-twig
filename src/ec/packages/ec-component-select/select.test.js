import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Select', () => {
  const template = path.resolve(__dirname, './select.html.twig');

  describe('Default', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          label: 'Label',
          options: [
            {
              value: 1,
              label: 'Belgium',
            },
            {
              value: 2,
              label: 'France',
            },
          ],
          helper_text: 'Help message',
          icon_path: '/static/icons.svg',
          id: 'example-id',
          name: 'example-name',
        },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });

  describe('Disabled', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          disabled: true,
          label: 'Label',
          options: [
            {
              value: 1,
              label: 'Belgium',
            },
            {
              value: 2,
              label: 'France',
            },
          ],
          helper_text: 'Help message',
          icon_path: '/static/icons.svg',
          id: 'example-id',
          name: 'example-name',
        },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });

  describe('With error', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          invalid: true,
          invalid_text: 'Error message',
          label: 'Label',
          options: [
            {
              value: 1,
              label: 'Belgium',
            },
            {
              value: 2,
              label: 'France',
            },
          ],
          helper_text: 'Help message',
          icon_path: '/static/icons.svg',
          id: 'example-id',
          name: 'example-name',
        },
        (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        }
      );
    });
  });
});
