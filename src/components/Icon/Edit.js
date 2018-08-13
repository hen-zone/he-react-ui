// @flow
import React from 'react';

function Edit(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M17.5 10.086L19.086 8.5 15.5 4.914 13.914 6.5l3.586 3.586zM16.086 11.5L12.5 7.914l-8 8V19.5h3.586l8-8zM8.5 21.5h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 .293-.707l12-12a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-.707.293z" />
    </svg>
  );
}

Edit.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Edit;
