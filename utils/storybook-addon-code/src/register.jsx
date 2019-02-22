import React from 'react';
import addons from '@storybook/addons';
import styled from '@emotion/styled';
import Prism from 'prismjs';
import ClipboardJS from 'clipboard';

const CodePanel = styled.div({
  margin: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  fontSize: '1rem',
  display: 'flex',
});

const Pre = styled.pre({
  margin: '0 !important',
  borderRadius: '0 !important',
  flexGrow: 1,
});

const CopyButton = styled.button({
  color: '#f8f8f2',
  fontSize: '0.9em',
  padding: '1em',
  position: 'absolute',
  right: 0,
  top: 0,
  background: 'transparent',
  borderColor: '#f8f8f2',
  borderRight: 0,
  borderTop: 0,
  borderBottomLeftRadius: '5px',
});

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.onAddNotes = this.onAddNotes.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on('ecl/code/add_code', this.onAddNotes);

    this.clipboard = new ClipboardJS('#copy-code');

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.onAddNotes('');
    });
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    if (this.clipboard) this.clipboard.destroy();

    this.unmounted = true;
    // eslint-disable-next-line react/prop-types
    const { channel } = this.props;
    channel.removeListener('ecl/code/add_code', this.onAddNotes);
  }

  onAddNotes(text) {
    this.setState({ text });
  }

  render() {
    const { text } = this.state;
    // eslint-disable-next-line react/prop-types
    const { active } = this.props;

    return active ? (
      <CodePanel>
        <CopyButton type="button" id="copy-code" data-clipboard-text={text}>
          Copy
        </CopyButton>
        <Pre className="language-html">
          <code
            className="language-html"
            dangerouslySetInnerHTML={{
              __html: Prism.highlight(text, Prism.languages.html, 'html'),
            }}
          />
        </Pre>
      </CodePanel>
    ) : null;
  }
}

// Register the addon with a unique name.
addons.register('ecl/code', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('ecl/code/panel', {
    title: 'HTML',
    // eslint-disable-next-line react/prop-types
    render: ({ active }) => (
      <Notes channel={addons.getChannel()} api={api} active={active} />
    ),
  });
});
