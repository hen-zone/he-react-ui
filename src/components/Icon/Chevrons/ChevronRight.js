// @flow
import React from 'react';

function ChevronRight(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L12.586 12 9.293 8.707z" />
    </svg>
  );
}

ChevronRight.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default ChevronRight;
