/* eslint-disable no-param-reassign */

import path from 'path';
import { renderTwigFileAsNode } from '@ecl-twig/test-utils';

import demoData from './demo/data';

demoData.items.forEach(item => {
  item.toggle.icon.path = 'static/icons';
});

describe('EC - Accordion', () => {
  const template = path.resolve(__dirname, './accordion.html.twig');
  const render = params => renderTwigFileAsNode(template, params);

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });
});
