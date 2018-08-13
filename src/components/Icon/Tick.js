// @flow
import React from 'react';

function Tick(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M17.207 7.707a1 1 0 0 1 1.415 1.414l-7.998 8.003a1 1 0 0 1-1.414 0l-4.003-4.003a1 1 0 1 1 1.414-1.414l3.296 3.296 7.29-7.296z" />
    </svg>
  );
}

Tick.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Tick;
