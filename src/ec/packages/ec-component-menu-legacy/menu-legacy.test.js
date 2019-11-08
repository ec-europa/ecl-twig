/* eslint-disable no-param-reassign */
import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import defaultDataStructure from './demo/data';

describe('EC - Menu Legacy', () => {
  const template = '@ecl-twig/ec-component-menu-legacy/ecl-menu-legacy.html.twig';
  const render = params => renderTwigFileAsNode(template, params);
  const defaultIconPath = 'static/icons.svg';

  const demoData = merge(defaultDataStructure, {
    icon_path: defaultIconPath,
  });

  test('renders correctly', () => {
    expect.assertions(1);

    return expect(render(demoData)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra class names', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      extra_classes: 'custom-class custom-class--test',
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra attributes', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(demoData, {
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });
});
