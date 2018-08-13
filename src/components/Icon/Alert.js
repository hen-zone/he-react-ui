// @flow
import React from 'react';

function Alert(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 20 20">
      <path d="M10.882 3.654l6.334 11.875A1 1 0 0 1 16.333 17H3.667a1 1 0 0 1-.883-1.47L9.118 3.653a1 1 0 0 1 1.764 0zM9.25 8v2.5a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0zm.75 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );
}

Alert.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Alert;
