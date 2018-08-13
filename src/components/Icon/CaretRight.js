// @flow
import React from 'react';

function CaretRight(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M2 14.932V7.068a.5.5 0 0 1 .82-.385l4.72 3.933a.5.5 0 0 1 0 .768l-4.72 3.933a.5.5 0 0 1-.82-.385z" />
    </svg>
  );
}

CaretRight.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default CaretRight;
