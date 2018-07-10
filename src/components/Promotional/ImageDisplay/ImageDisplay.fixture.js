// @flow
import React from 'react';
import ImageDisplay from '.';

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
    component: ImageDisplay,
    props: {
      image: {
        src: 'http://res.publicdomainfiles.com/pdf_view/2/13491430814060.png',
        alt: 'A bandage.',
      },
    },
    children: content,
  },
];
