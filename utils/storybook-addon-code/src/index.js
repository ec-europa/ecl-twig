import addons, { makeDecorator } from '@storybook/addons';
import { html as beautifyHtml } from 'js-beautify';

const withCode = makeDecorator({
  name: 'withCode',
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    const story = getStory(context);

    let code = '';
    if (typeof story === 'string') {
      code = story;
    } else if (story instanceof DocumentFragment) {
      const htmlElement = document.createElement('div');
      htmlElement.appendChild(story.cloneNode(true));
      code = htmlElement.innerHTML;
    } else if (story instanceof Node) {
      code = story.outerHTML;
    }

    const formattedCode = beautifyHtml(code, {
      indent_size: 2,
      max_preserve_newlines: -1,
      preserve_newlines: false,
      indent_scripts: 'normal',
    });

    channel.emit('ecl/code/add_code', formattedCode);

    return story;
  },
});

export default withCode;
