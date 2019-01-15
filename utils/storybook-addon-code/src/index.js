import addons, { makeDecorator } from '@storybook/addons';
import { format } from 'prettier/standalone';
import htmlParser from 'prettier/parser-html';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);
    const formattedCode = format(story, {
      parser: 'html',
      plugins: [htmlParser],
    });
    channel.emit('ecl/code/add_code', formattedCode); // parameters);

    return story;
  },
});

export default withCode;
