import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import data2Cols from './demo/data--2-columns';
import data3Cols from './demo/data--3-columns';
import data4Cols from './demo/data--4-columns';
import dataCarousel from './demo/data--carousel';
import dataFile from './demo/data--file-list';

describe('EC - Layout', () => {
  const template = '@ecl-twig/ec-component-layout/ecl-layout.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  test(' two columns renders correctly', () => {
    expect.assertions(1);

    return expect(render(data2Cols)).resolves.toMatchSnapshot();
  });

  test(' three columns renders correctly', () => {
    expect.assertions(1);

    return expect(render(data3Cols)).resolves.toMatchSnapshot();
  });

  test(' four columns renders correctly', () => {
    expect.assertions(1);

    return expect(render(data4Cols)).resolves.toMatchSnapshot();
  });

  test(' carousel renders correctly', () => {
    expect.assertions(1);

    return expect(render(dataCarousel)).resolves.toMatchSnapshot();
  });

  test(' file list renders correctly', () => {
    expect.assertions(1);

    return expect(render(dataFile)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra class names', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(data2Cols, {
      extra_classes: 'custom-class custom-class--test',
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });

  test('renders correctly with extra attributes', () => {
    expect.assertions(1);

    const optionsWithExtraClasses = merge(data2Cols, {
      extra_attributes: [
        { name: 'data-test', value: 'data-test-value' },
        { name: 'data-test-1', value: 'data-test-value-1' },
      ],
    });

    return expect(render(optionsWithExtraClasses)).resolves.toMatchSnapshot();
  });
});
