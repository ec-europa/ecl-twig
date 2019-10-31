import { configure, addDecorator, addParameters } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';
import { create } from '@storybook/theming';
import { version } from '../../../lerna.json';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: `ECL Twig Php EC v${version}`,
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
