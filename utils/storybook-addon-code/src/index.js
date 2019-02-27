import addons, { makeDecorator } from '@storybook/addons';
import { html as beautifyHtml } from 'js-beautify';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    if (typeof story === 'string' || story instanceof String) {
      const formattedCode = beautifyHtml(story, {
        indent_size: 2,
        max_preserve_newlines: -1,
        preserve_newlines: false,
        indent_scripts: 'normal',
      });

      channel.emit('ecl/code/add_code', formattedCode);
    }

    return story;
  },
});

export default withCode;
