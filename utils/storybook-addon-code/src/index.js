import addons, { makeDecorator } from '@storybook/addons';
import { html as beautifyHtml } from 'js-beautify';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);
    const formattedCode = beautifyHtml(story, {
      indent_size: 2,
      wrap_line_length: 120,
    });
    channel.emit('ecl/code/add_code', formattedCode); // parameters);

    return story;
  },
});

export default withCode;
