import addons, { makeDecorator } from '@storybook/addons';

export const withDiff = makeDecorator({
  name: 'withDiff',
  parameterName: 'diff',

  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();

    const storyOptions = parameters || options;

    const { jsmarkup } =
      typeof storyOptions === 'string'
        ? { jsmarkup: storyOptions }
        : storyOptions;

    if (!jsmarkup) {
      throw new Error('You must set `jsmarkup` on the `diff` parameter');
    }

    channel.emit('ecl/diff/add_code', jsmarkup);

    return getStory(context);
  },
});

export const withJsmarkupDiff = text =>
  withDiff({
    jsmarkup: text,
  });
