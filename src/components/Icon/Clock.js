// @flow
import React from 'react';

type Props = { className?: string };

export default function Clock(props: Props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 26 26"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(3.000000, 3.000000)">
        <path
          d="M11.25,8.75 L11.25,5 C11.25,4.30964406 10.6903559,3.75 10,3.75 C9.30964406,3.75 8.75,4.30964406 8.75,5 L8.75,10 C8.75,10.6903559 9.30964406,11.25 10,11.25 L15,11.25 C15.6903559,11.25 16.25,10.6903559 16.25,10 C16.25,9.30964406 15.6903559,8.75 15,8.75 L11.25,8.75 Z M10,19.375 C4.82233047,19.375 0.625,15.1776695 0.625,10 C0.625,4.82233047 4.82233047,0.625 10,0.625 C15.1776695,0.625 19.375,4.82233047 19.375,10 C19.375,15.1776695 15.1776695,19.375 10,19.375 Z"
          id="path-1"
        />
      </g>
    </svg>
  );
}
