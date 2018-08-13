// @flow
import React from 'react';

function Search(props: SVGProps) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M15.379 16.845A8.295 8.295 0 0 1 4.429 4.429a8.293 8.293 0 0 1 12.416 10.95l4.851 4.851a1.037 1.037 0 1 1-1.466 1.466l-4.851-4.851zM5.895 5.895a6.22 6.22 0 1 0 8.796 8.796 6.22 6.22 0 0 0-8.796-8.796z" />
    </svg>
  );
}

Search.defaultProps = {
  height: 32,
  width: 32,
  fill: 'currentColor',
};

export default Search;
