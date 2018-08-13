// @flow
import React from 'react';

function Calendar(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 26 26">
      <path d="M9 7.5h8v-1a1 1 0 0 1 2 0v1a2 2 0 0 1 2 2V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 5 19V9.5a2 2 0 0 1 2-2v-1a1 1 0 1 1 2 0v1zm10 5H7v6h12v-6z" />
    </svg>
  );
}

Calendar.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Calendar;
