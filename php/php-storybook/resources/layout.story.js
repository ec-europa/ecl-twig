/* eslint-disable import/no-unresolved */
import layout__2_columnsJs from './js/layout--2-columns.js.html';
import layout__3_columnsJs from './js/layout--3-columns.js.html';
import layout__4_columnsJs from './js/layout--4-columns.js.html';
import layout__carouselJs from './js/layout--carousel.js.html';
import layout__file_listJs from './js/layout--file-list.js.html';
import layout__media_containerJs from './js/layout--media-container.js.html';

export default {
  title: 'Components/Layout',
  decorators: [],
};

export const Columns_2 = () => layout__2_columnsJs;

Columns_2.storyName = '2 columns';

export const Columns_3 = () => layout__3_columnsJs;

Columns_3.storyName = '3 columns';

export const Columns_4 = () => layout__4_columnsJs;

Columns_4.storyName = '4 columns';

export const Carousel = () => layout__carouselJs;

Carousel.storyName = 'Carousel';

export const File_list = () => layout__file_listJs;

File_list.storyName = 'File list';

export const Media_container = () => layout__media_containerJs;

Media_container.storyName = 'Media container';
