// @flow
import React from 'react';

function ChevronLeft(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M14.707 8.707a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 1 0 1.414-1.414L11.414 12l3.293-3.293z" />
    </svg>
  );
}

ChevronLeft.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default ChevronLeft;
