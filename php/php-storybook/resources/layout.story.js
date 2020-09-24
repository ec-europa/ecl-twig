/* eslint-disable import/no-unresolved */
import layout__2_columnsJs from './js/layout--2-columns.js.html';
import layout__3_columnsJs from './js/layout--3-columns.js.html';
import layout__4_columnsJs from './js/layout--4-columns.js.html';
import layout__carouselJs from './js/layout--carousel.js.html';
import layout__file_listJs from './js/layout--file-list.js.html';
import layout__media_containerJs from './js/layout--media-container.js.html';
import layout__highlightJs from './js/layout--highlight.js.html';
import layout__footerJs from './js/layout--footer.js.html';
import layout__layoutJs from './js/layout--layout.js.html';

export default {
  title: 'Components/Layout',
  decorators: [],
};

export const Columns_2 = () => layout__2_columnsJs;

Columns_2.storyName = 'Single block - 2 cols';

export const Columns_3 = () => layout__3_columnsJs;

Columns_3.storyName = 'Single block - 3 cols';

export const Columns_4 = () => layout__4_columnsJs;

Columns_4.storyName = 'Single block - 4 cols';

export const Highlight = () => layout__highlightJs;

Highlight.storyName = 'With an highlighted item';

export const Footer = () => layout__footerJs;

Footer.storyName = 'With a footer element';

export const Carousel = () => layout__carouselJs;

Carousel.storyName = 'Carousel';

export const File_list = () => layout__file_listJs;

File_list.storyName = 'File list example';

export const Media_container = () => layout__media_containerJs;

Media_container.storyName = 'Media container example';

export const Layout = () => layout__layoutJs;

Layout.storyName = 'Full layout example (3 blocks with different components)';
