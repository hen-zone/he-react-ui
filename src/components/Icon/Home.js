// @flow
import React from 'react';

function Help(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M4.984 11.486A1 1 0 0 0 4 12.5v10a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-7h2v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-10a1 1 0 1 0-2 0v9h-3v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7H6v-9a1 1 0 0 0-1.016-1.014z" />
      <path d="M12.037.5a1 1 0 0 0-.709.26l-11 10a1 1 0 1 0 1.344 1.48L12 2.852l10.328 9.388a1 1 0 1 0 1.344-1.48l-11-10a1 1 0 0 0-.635-.26z" />
    </svg>
  );
}

Help.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Help;
