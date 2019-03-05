import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

// Add SVG icon path.
demoData.button.icon.path = 'example';

describe('EC - Expandable', () => {
  const template = path.resolve(__dirname, './expandable.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test('renders correctly when expanded', () => {
    expect.assertions(1);

    const expanded = Object.assign({}, demoData, { expanded: 'true' });
    return expect(render(expanded)).resolves.toMatchSnapshot();
  });
});
