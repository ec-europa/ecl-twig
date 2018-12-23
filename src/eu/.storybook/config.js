import { configure, addDecorator } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'ECL v2 - EU Twig',
    url: 'https://github.com/ec-europa/ecl-twig',
    sidebarAnimations: false,
  })
);

const contexts = [require.context('../packages', true, /stories.*\.js$/)];

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
