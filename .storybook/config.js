import { configure, addDecorator } from '@storybook/html';
import { withOptions } from '@storybook/addon-options';

addDecorator(
  withOptions({
    name: 'ECL v2 - EC',
    url: 'https://github.com/ec-europa/europa-component-library',
    sidebarAnimations: false,
  })
);

const contexts = [require.context('../src', true, /stories.*\.js$/)];

configure(() => {
  contexts.forEach(context => {
    context
      .keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context);
  });
}, module);
