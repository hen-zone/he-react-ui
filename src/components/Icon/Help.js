// @flow
import React from 'react';

function Help(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M12 0C5.384 0 0 5.384 0 12s5.384 12 12 12 12-5.384 12-12S18.616 0 12 0zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S2 17.535 2 12 6.465 2 12 2z" />
      <path d="M12 6c-1.693 0-3.094 1.114-3.709 2.52a1.001 1.001 0 1 0 1.834.802C10.41 8.672 11.305 8 12 8c1.033 0 2 .967 2 2s-.967 2-2 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1.205c1.7-.46 3-1.963 3-3.795 0-2.185-1.815-4-4-4zM13 18a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z" />
    </svg>
  );
}

Help.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Help;
