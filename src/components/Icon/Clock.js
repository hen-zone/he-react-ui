// @flow
import React from 'react';

function Clock(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 26 26">
      <path d="M14.25 11.75V8a1.25 1.25 0 0 0-2.5 0v5c0 .69.56 1.25 1.25 1.25h5a1.25 1.25 0 0 0 0-2.5h-3.75zM13 22.375a9.375 9.375 0 1 1 0-18.75 9.375 9.375 0 0 1 0 18.75z" />
    </svg>
  );
}

Clock.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Clock;
