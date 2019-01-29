import path from 'path';
import { renderTwigFile } from '@ecl-twig/test-utils';

import brandedIcons from '@ecl/ec-resources-icons/dist/lists/branded.json';
import generalIcons from '@ecl/ec-resources-icons/dist/lists/general.json';
import notificationsIcons from '@ecl/ec-resources-icons/dist/lists/notifications.json';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

describe('EC - Icon', () => {
  const template = path.resolve(__dirname, './icon.html.twig');
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
      test(`- icon ${icon} renders correctly`, done => {
        expect.assertions(1);

        defaultDataStructure.name = icon;
        defaultDataStructure.type = 'branded';

        renderTwigFile(template, defaultDataStructure, (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        });
      });
    });
  });

  describe('Notifications', () => {
    notificationsIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, done => {
        expect.assertions(1);

        defaultDataStructure.name = icon;
        defaultDataStructure.type = 'notifications';

        renderTwigFile(template, defaultDataStructure, (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        });
      });
    });
  });

  describe('General', () => {
    generalIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, done => {
        expect.assertions(1);

        defaultDataStructure.name = icon;
        defaultDataStructure.type = 'general';

        renderTwigFile(template, defaultDataStructure, (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        });
      });
    });
  });

  describe('UI', () => {
    uiIcons.forEach(icon => {
      test(`- icon ${icon} renders correctly`, done => {
        expect.assertions(1);

        defaultDataStructure.name = icon;
        defaultDataStructure.type = 'ui';

        renderTwigFile(template, defaultDataStructure, (err, html) => {
          expect(html).toMatchSnapshot();
          done();
        });
      });
    });
  });
});
