import { configure, addDecorator, addParameters } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';
import { create } from '@storybook/theming';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'ECL v2.7 - EC Twig',
      brandUrl: 'https://github.com/ec-europa/ecl-twig',
      brandImage: null, // 'http://url.of/some.svg',
    }),
    sidebarAnimations: false,
  },
});

const contexts = [require.context('../packages', true, /.*\.story\.js$/)];

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      // Hidden components.
      // @see: INNO-1542
      .filter(key => !key.includes('ec-component-contextual-navigation'))
      .forEach(context);
  });
}, module);
