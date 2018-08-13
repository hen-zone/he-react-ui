// @flow
import React from 'react';

function ChevronDown(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M15.293 9.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L12 12.586l3.293-3.293z" />
    </svg>
  );
}

ChevronDown.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default ChevronDown;
