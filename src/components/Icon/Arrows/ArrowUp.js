// @flow
import React from 'react';

function ArrowUp(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M13 5.414V21a1 1 0 1 1-2 0V5.414L6.707 9.707a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L13 5.414z" />
    </svg>
  );
}

ArrowUp.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default ArrowUp;
