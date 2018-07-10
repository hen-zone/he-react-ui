// @flow
import React from 'react';
import VideoDisplay from '.';

const content = (
  <React.Fragment>
    <h2>Header</h2>
    <p>
      What a great description of this image of this product. This is paragraph
      of text is a more detailed description of the item being promoted.
    </p>
  </React.Fragment>
);

export default [
  {
    component: VideoDisplay,
    props: {
      youtubeId: 'iYuXzohJUFE',
    },
    children: content,
  },
];
