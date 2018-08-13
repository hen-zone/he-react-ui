// @flow
import React from 'react';

function ArrowRight(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M18.586 13H3a1 1 0 1 1 0-2h15.586l-4.293-4.293a1 1 0 1 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L18.586 13z" />
    </svg>
  );
}

ArrowRight.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default ArrowRight;
