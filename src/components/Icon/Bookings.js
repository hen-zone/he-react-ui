// @flow
import React from 'react';

function Bookings(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M.984 7.986A1 1 0 0 0 0 9v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v13H2V9A1 1 0 0 0 .984 7.986z" />
      <path d="M1 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 2h20v4H2z" />
      <path d="M11.984-.014A1 1 0 0 0 11 1v4a1 1 0 1 0 2 0V1a1 1 0 0 0-1.016-1.014zM5.984-.014A1 1 0 0 0 5 1v4a1 1 0 1 0 2 0V1A1 1 0 0 0 5.984-.014zM17.984-.014A1 1 0 0 0 17 1v4a1 1 0 1 0 2 0V1a1 1 0 0 0-1.016-1.014zM4 12h4v3H4zM10 12h4v3h-4zM4 17h4v3H4zM10 17h4v3h-4zM16 12h4v3h-4z" />
    </svg>
  );
}

Bookings.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Bookings;
