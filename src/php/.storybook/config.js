import { configure, addDecorator, addParameters } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';
import { create } from '@storybook/theming';
import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import socialSprite from '@ecl/ec-resources-social-icons/dist/sprites/icons-social.svg';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'ECL v2.3 - EC Twig PHP',
      brandUrl: 'https://github.com/ec-europa/ecl-twig',
      brandImage: null, // 'http://url.of/some.svg',
    }),
    sidebarAnimations: false,
  },
});

const contexts = [require.context('../../../dist/', true, /.*\.story\.js$/)];

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
