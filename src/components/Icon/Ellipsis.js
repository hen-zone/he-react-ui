// @flow
import React from 'react';

function Ellipsis(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <g transform="translate(0 8)">
        <circle cx="2" cy="2" r="2" />
        <circle cx="10" cy="2" r="2" />
        <circle cx="18" cy="2" r="2" />
      </g>
    </svg>
  );
}

Ellipsis.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Ellipsis;
