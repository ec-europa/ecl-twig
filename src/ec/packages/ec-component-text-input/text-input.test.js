import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

describe('EC - Text input', () => {
  const template = path.resolve(__dirname, './text-input.html.twig');

  describe('Default', () => {
    test('renders correctly', done => {
      expect.assertions(1);

      renderTwigFile(
        template,
        {
          label: 'Label',
          placeholder: 'Placeholder',
          helper_text: 'Help message',
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
          label: 'Label',
          placeholder: 'Placeholder',
          helper_text: 'Help message',
          disabled: true,
          id: 'example-id',
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
          label: 'Label',
          placeholder: 'Placeholder',
          invalid: true,
          invalid_text: 'Error message',
          helper_text: 'Help message',
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
