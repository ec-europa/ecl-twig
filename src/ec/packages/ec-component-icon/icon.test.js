import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

describe('EC - Icon', () => {
  const template = path.resolve(__dirname, './icon.html.twig');
  const render = params => renderTwigFileAsNode(template, params);
  const defaultPath = 'static/icons.svg';
  const defaultDataStructure = {
    icon: {
      name: '',
      type: '',
      path: defaultPath,
    },
  };

  describe('Branded', () => {
    brandedIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        defaultDataStructure.icon.name = icon;
        defaultDataStructure.icon.type = 'branded';

        return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('Notifications', () => {
    notificationsIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        defaultDataStructure.icon.name = icon;
        defaultDataStructure.icon.type = 'notifications';

        return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('General', () => {
    generalIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        defaultDataStructure.icon.name = icon;
        defaultDataStructure.icon.type = 'general';

        return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
      });
    });
  });

  describe('UI', () => {
    uiIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, () => {
        expect.assertions(1);

        defaultDataStructure.icon.name = icon;
        defaultDataStructure.icon.type = 'ui';

        return expect(render(defaultDataStructure)).resolves.toMatchSnapshot();
      });
    });
  });
});
