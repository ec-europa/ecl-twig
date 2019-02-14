import { configure, addDecorator } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'ECL v2.1 - EC Twig',
    url: 'https://github.com/ec-europa/ecl-twig',
  })
);

const contexts = [
  require.context('../packages', true, /.*\.story\.js$/),
  require.context('../examples', true, /.*\.story\.js$/),
];

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
