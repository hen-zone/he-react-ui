// @flow
import React from 'react';

function ArrowDown(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M11 18.586V3a1 1 0 0 1 2 0v15.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 18.586z" />
    </svg>
  );
}

ArrowDown.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default ArrowDown;
