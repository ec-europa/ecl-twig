// import path from 'path';
// import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

// import { backToTop, identity, sections, common } from './demo/data';

// describe('EC - Footer Standardised', () => {
//   const template = path.resolve(__dirname, './footer-standardised.html.twig');
//   const render = params => renderTwigFileAsNode(template, params);

//   describe('Corporate', () => {
//     const options = { back_to_top: backToTop, sections, common };

//     test('renders correctly', () => {
//       expect.assertions(1);
//       return expect(render(options)).resolves.toMatchSnapshot();
//     });

//     test('renders correctly with extra class names', () => {
//       expect.assertions(1);

//       const withExtraClasses = merge(options, {
//         extra_classes: 'custom-class custom-class--test',
//       });

//       return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
//     });

//     test('renders correctly with extra attributes', () => {
//       expect.assertions(1);

//       const withExtraAttributes = merge(options, {
//         extra_attributes: [
//           { name: 'data-test', value: 'data-test-value' },
//           { name: 'data-test-1', value: 'data-test-value-1' },
//         ],
//       });

//       return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
//     });
//   });

//   describe('Custom', () => {
//     const options = { back_to_top: backToTop, identity, sections, common };

//     test('renders correctly', () => {
//       expect.assertions(1);
//       return expect(render(options)).resolves.toMatchSnapshot();
//     });

//     test('renders correctly with extra class names', () => {
//       expect.assertions(1);

//       const withExtraClasses = merge(options, {
//         extra_classes: 'custom-class custom-class--test',
//       });

//       return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
//     });

//     test('renders correctly with extra attributes', () => {
//       expect.assertions(1);

//       const withExtraAttributes = merge(options, {
//         extra_attributes: [
//           { name: 'data-test', value: 'data-test-value' },
//           { name: 'data-test-1', value: 'data-test-value-1' },
//         ],
//       });

//       return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
//     });
//   });
// });
