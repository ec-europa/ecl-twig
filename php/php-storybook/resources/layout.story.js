/* eslint-disable import/no-unresolved */
import withJsCode from '@ecl-twig/storybook-addon-code';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import layout__2_columnsJs from './js/layout--2-columns.js.html';
import layout__3_columnsJs from './js/layout--3-columns.js.html';
import layout__4_columnsJs from './js/layout--4-columns.js.html';
import layout__carouselJs from './js/layout--carousel.js.html';
import layout__file_listJs from './js/layout--file-list.js.html';
import layout__media_containerJs from './js/layout--media-container.js.html';
import layout__highlightJs from './js/layout--highlight.js.html';
import layout__footerJs from './js/layout--footer.js.html';
import layout__layoutJs from './js/layout--layout.js.html';
import docs from '@ecl-twig/ec-component-layout/README.md';

export default {
  title: 'Components/Layout',
  decorators: [withNotes, withJsCode],
};

export const Columns_2 = () => layout__2_columnsJs;

Columns_2.storyName = 'Single block - 2 cols';
Columns_2.parameters = {
  notes: { markdown: docs },
};

export const Columns_3 = () => layout__3_columnsJs;

Columns_3.storyName = 'Single block - 3 cols';
Columns_3.parameters = {
  notes: { markdown: docs },
};

export const Columns_4 = () => layout__4_columnsJs;

Columns_4.storyName = 'Single block - 4 cols';
Columns_4.parameters = {
  notes: { markdown: docs },
};

export const Highlight = () => layout__highlightJs;

Highlight.storyName = 'With an highlighted item';
Highlight.parameters = {
  notes: { markdown: docs },
};

export const Footer = () => layout__footerJs;

Footer.storyName = 'With a footer element';
Footer.parameters = {
  notes: { markdown: docs },
};

export const Carousel = () => layout__carouselJs;

Carousel.storyName = 'Carousel';
Carousel.parameters = {
  notes: { markdown: docs },
};

export const File_list = () => layout__file_listJs;

File_list.storyName = 'File list example';
File_list.parameters = {
  notes: { markdown: docs },
};

export const Media_container = () => layout__media_containerJs;

Media_container.storyName = 'Media container example';
Media_container.parameters = {
  notes: { markdown: docs },
};

export const Layout = () => layout__layoutJs;

Layout.storyName = 'Full layout example (3 blocks with different components)';
Layout.parameters = {
  notes: { markdown: docs },
};
