// @flow
import React from 'react';

function Logout(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 1 16 16">
      <path d="M7.5 1.666c-.823 0-1.5.677-1.5 1.5v3h1v-3c0-.281.219-.5.5-.5h7c.281 0 .5.219.5.5v12c0 .281-.219.5-.5.5h-7a.493.493 0 0 1-.5-.5v-3H6v3c0 .823.677 1.5 1.5 1.5h7c.823 0 1.5-.677 1.5-1.5v-12c0-.823-.677-1.5-1.5-1.5h-7zM3.146 5.813L-.207 9.165l3.353 3.354.708-.707-2.147-2.147H11.5v-1H1.707L3.854 6.52l-.708-.707z" />
    </svg>
  );
}

Logout.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Logout;
