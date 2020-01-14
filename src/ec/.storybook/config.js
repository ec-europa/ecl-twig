import { configure, addParameters } from '@storybook/html';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { create } from '@storybook/theming';
import { version } from '../../../lerna.json';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: `ECL Twig EC v${version}`,
      brandUrl: 'https://github.com/ec-europa/ecl-twig',
      brandImage: null,
    }),
    sidebarAnimations: false,
  },
  viewport: {
    defaultViewport: 'Responsive',
    viewports: {
      responsive: {
        name: 'Responsive',
        styles: {
          width: '100%',
          height: '100%',
          border: 0,
          margin: 0,
          boxShadow: 'none',
          borderRadius: 0,
          position: 'absolute',
        },
      },
      ...INITIAL_VIEWPORTS,
      '1366x768': {
        name: '1366x768',
        styles: {
          width: '1366px',
          height: '768px',
        },
        type: 'desktop',
      },
      '1920x1080': {
        name: '1920x1080',
        styles: {
          width: '1920px',
          height: '1080px',
        },
        type: 'desktop',
      },
    },
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
