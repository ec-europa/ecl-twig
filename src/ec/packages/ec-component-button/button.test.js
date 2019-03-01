import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

// Import data for tests
import dataPrimary from '@ecl/ec-specs-button/demo/data--primary';
import dataSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import dataCall from '@ecl/ec-specs-button/demo/data--call';
import dataGhost from '@ecl/ec-specs-button/demo/data--ghost';
import dataSearch from '@ecl/ec-specs-button/demo/data--search';

describe('EC - Button', () => {
  const template = path.resolve(__dirname, './button.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  describe('Primary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataPrimary)).resolves.toMatchSnapshot();
    });
  });

  describe('Secondary', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSecondary)).resolves.toMatchSnapshot();
    });
  });

  describe('CTA', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      dataCall.icon.path = 'static/icons.svg';
      dataCall.icon.type = 'ui';
      dataCall.icon.name = 'corner-arrow';
      dataCall.icon.size = 'fluid';

      return expect(render(dataCall)).resolves.toMatchSnapshot();
    });
  });

  describe('Ghost', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataGhost)).resolves.toMatchSnapshot();
    });
  });

  describe('Search', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      return expect(render(dataSearch)).resolves.toMatchSnapshot();
    });
  });

  describe('CTA button - icon before', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      dataCall.icon.path = 'static/icons.svg';
      dataCall.icon.type = 'ui';
      dataCall.icon.name = 'corner-arrow';
      dataCall.icon.size = 'fluid';
      dataCall.icon_position = 'before';

      return expect(render(dataCall)).resolves.toMatchSnapshot();
    });
  });

  describe('CTA button - icon after', () => {
    test('renders correctly', () => {
      expect.assertions(1);

      const buttonData = {
        label: 'CTA Button with icon',
        variant: 'call',
        icon: {
          path: 'static/icons.svg',
          type: 'ui',
          name: 'corner-arrow',
          size: 'fluid',
        },
      };

      return expect(render(buttonData)).resolves.toMatchSnapshot();
    });
  });
});
