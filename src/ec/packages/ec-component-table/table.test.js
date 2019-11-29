import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataDefault from '@ecl/ec-specs-table/demo/data--default';
import dataMulti from '@ecl/ec-specs-table/demo/data--multi';

describe('EC - Table', () => {
  const template = '@ecl-twig/ec-component-table/ecl-table.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataDefault, {
        extra_classes: 'custom-table--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataDefault, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });

  describe('Zebra', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      dataDefault.zebra = true;
      return expect(render(dataDefault)).resolves.toMatchSnapshot();
    });
  });

  describe('Multi', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataMulti)).resolves.toMatchSnapshot();
    });
  });
});
