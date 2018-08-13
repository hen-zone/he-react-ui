// @flow
import React from 'react';

function ArrowLeft(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M5.414 13H21a1 1 0 1 0 0-2H5.414l4.293-4.293a1 1 0 1 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L5.414 13z" />
    </svg>
  );
}

ArrowLeft.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default ArrowLeft;
