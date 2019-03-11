import addons, { makeDecorator } from '@storybook/addons';
import marked from 'marked';
import Prism from 'prismjs';

// Manually import extra languages
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-twig';

// Create custom marked renderer
const renderer = new marked.Renderer();
renderer.code = function customCode(code, infostring, escaped) {
  const lang = (infostring || '').match(/\S*/)[0];

  if (!lang) {
    return `<pre><code>${escaped ? code : escape(code, true)}</code></pre>`;
  }

  const highlightedCode = Prism.highlight(code, Prism.languages[lang], lang);
  if (highlightedCode != null && highlightedCode !== code) {
    // eslint-disable-next-line no-param-reassign
    escaped = true;
    // eslint-disable-next-line no-param-reassign
    code = highlightedCode;
  }

  const htmlLang = this.options.langPrefix + escape(lang, true);
  return `<pre class="${htmlLang}"><code class="${htmlLang}">${
    escaped ? code : escape(code, true)
  }</code></pre>\n`;
};

function renderMarkdown(text, options) {
  return marked(
    text,
    Object.assign({}, marked.defaults, { renderer }, options)
  );
}

export const withNotes = makeDecorator({
  name: 'withNotes',
  parameterName: 'notes',
  skipIfNoParametersOrOptions: true,
  allowDeprecatedUsage: true,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();

    const storyOptions = parameters || options;

    const { text, markdown, markdownOptions } =
      typeof storyOptions === 'string' ? { text: storyOptions } : storyOptions;

    if (!text && !markdown) {
      throw new Error(
        'You must set of one of `text` or `markdown` on the `notes` parameter'
      );
    }

    channel.emit(
      'ecl/notes/add_notes',
      text || renderMarkdown(markdown, markdownOptions)
    );

    return getStory(context);
  },
});

export const withMarkdownNotes = (text, options) =>
  withNotes({
    markdown: text,
    markdownOptions: options,
  });
