// @flow
import React from 'react';

function Delete(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M7.5 5.5V3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2.5H21a1 1 0 0 1 0 2h-1.5v14a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-14H3a1 1 0 1 1 0-2h4.5zm8 2h-9v13h11v-13h-2zM11 11a1 1 0 1 1 2 0v5a1 1 0 0 1-2 0v-5zm-3 0a1 1 0 1 1 2 0v5a1 1 0 0 1-2 0v-5zm6 0a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5zM9.5 5.5h5V4h-5v1.5z" />
    </svg>
  );
}

Delete.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Delete;
