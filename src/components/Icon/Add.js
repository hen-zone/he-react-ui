// @flow
import React from 'react';

function Add(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M10.994 11V6.343a1 1 0 0 1 2 0V11h4.657a1 1 0 0 1 0 2h-4.657v4.657a1 1 0 1 1-2 0V13H6.338a1 1 0 1 1 0-2h4.656z" />
    </svg>
  );
}

Add.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Add;
