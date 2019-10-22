import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

describe('EC - Icon', () => {
  const template = '@ecl-twig/ec-component-icon/icon.html.twig';
  const render = params => renderTwigFileAsNode(template, params);

  const defaultDataStructure = {
    icon: {
      name: '',
      type: '',
      path: 'static/icons.svg',
    },
  };

  describe('Branded', () => {
    brandedIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(defaultDataStructure, {
          icon: {
            name: icon,
            type: 'branded',
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('Notifications', () => {
    notificationsIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(defaultDataStructure, {
          icon: {
            name: icon,
            type: 'notifications',
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('General', () => {
    generalIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(defaultDataStructure, {
          icon: {
            name: icon,
            type: 'general',
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('UI', () => {
    uiIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        const options = merge(defaultDataStructure, {
          icon: {
            name: icon,
            type: 'ui',
          },
        });

        return expect(render(options)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('Generic tests - Any icon', () => {
    const options = merge(defaultDataStructure, {
      icon: {
        name: generalIcons[0],
        type: 'general',
      },
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const optionsWithExtraClasses = merge(options, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
    });
  });
});
