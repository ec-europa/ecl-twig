import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';
import dataCard from './demo/data--card';
import dataCardTaxonomy from './demo/data--card-taxonomy';
import dataTile from './demo/data--tile';
import dataTileTaxonomy from './demo/data--tile-taxonomy';

dataTileTaxonomy.card.type = 'tile';

describe('EC - Card', () => {
  const template = '@ecl-twig/ec-component-card/ecl-card.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Default', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataCard)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataCard, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataCard, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('renders correctly with taxonomies', () => {
      expect.assertions(1);
      return expect(render(dataCardTaxonomy)).resolves.toMatchSnapshot();
    });

    test('with validation enabled and missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...dataCard, _compliance_: true };
      dataCompliance.card.title.label = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('Tile', () => {
    test('renders correctly', () => {
      expect.assertions(1);
      return expect(render(dataTile)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(dataTile, {
        extra_classes: 'custom-class custom-class--test',
      });
      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with taxonomies', () => {
      expect.assertions(1);
      return expect(render(dataTileTaxonomy)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(dataTile, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });
  });
});
