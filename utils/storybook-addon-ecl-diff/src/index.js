import addons, { makeDecorator } from '@storybook/addons';

let res = '';

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

    res = eclDiff;

    channel.emit('ecl/ecl_diff/add_code', res);

    return getStory(context);
  },
});

export const withEclMarkupDiff = (text) =>
  withEclDiff({
    eclDiff: text,
  });
