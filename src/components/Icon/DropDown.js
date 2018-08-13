// @flow
import React from 'react';

function DropDown(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M8.068 9h7.864a.5.5 0 0 1 .385.82l-3.933 4.72a.5.5 0 0 1-.768 0L7.683 9.82A.5.5 0 0 1 8.068 9z" />
    </svg>
  );
}

DropDown.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default DropDown;
