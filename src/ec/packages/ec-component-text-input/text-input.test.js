import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

describe('EC - Text input', () => {
  const template = path.resolve(__dirname, './text-input.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          label: 'Label',
          placeholder: 'Placeholder',
          helper_text: 'Help message',
          id: 'example-id',
          name: 'example-name',
        })
      ).resolves.toMatchSnapshot();
    });
  });

  describe('Disabled', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          label: 'Label',
          placeholder: 'Placeholder',
          helper_text: 'Help message',
          disabled: true,
          id: 'example-id',
        })
      ).resolves.toMatchSnapshot();
    });
  });

  describe('With error', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(
        render({
          label: 'Label',
          placeholder: 'Placeholder',
          invalid: true,
          invalid_text: 'Error message',
          helper_text: 'Help message',
          id: 'example-id',
          name: 'example-name',
        })
      ).resolves.toMatchSnapshot();
    });
  });
});
