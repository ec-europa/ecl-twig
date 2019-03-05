import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

describe('EC - Contextual Navigation', () => {
  demoData.itemMore.icon.path = 'static/icons';
  const template = path.resolve(__dirname, './contextual-navigation.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
