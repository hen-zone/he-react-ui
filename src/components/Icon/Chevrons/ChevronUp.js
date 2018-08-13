// @flow
import React from 'react';

function ChevronUp(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M8.707 14.707a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 1 1-1.414 1.414L12 11.414l-3.293 3.293z" />
    </svg>
  );
}

ChevronUp.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default ChevronUp;
