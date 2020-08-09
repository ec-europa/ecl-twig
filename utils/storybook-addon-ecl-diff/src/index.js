import addons, { makeDecorator } from '@storybook/addons';
import marked from 'marked';

const renderer = new marked.Renderer();
let res = '';

function renderMarkdown(text) {
  return marked(text, { ...marked.defaults, renderer });
}

export const withEclDiff = makeDecorator({
  name: 'withEclDiff',
  parameterName: 'ecl_diff',

  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const storyOptions = parameters || options;

    const { eclDiff } =
      typeof storyOptions === 'string'
        ? { jsmarkup: storyOptions }
        : storyOptions;

    if (!eclDiff) {
      throw new Error('You must set `eclDiff` on the `eclDiff` parameter');
    }
    res = renderMarkdown(eclDiff);

    channel.emit('ecl/ecl_diff/add_code', res);

    return getStory(context);
  },
});

export const withEclMarkupDiff = (text) =>
  withEclDiff({
    eclDiff: text,
  });
