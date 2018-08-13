// @flow
import React from 'react';

function Cross(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 1 1 1.414-1.414L12 10.586z" />
    </svg>
  );
}

Cross.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Cross;
