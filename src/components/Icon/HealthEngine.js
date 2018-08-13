// @flow
import React from 'react';

type Props = {
  inverted?: boolean,
};

export default function HealthEngine(props: Props & SVGProps) {
  const { inverted, ...restProps } = props;

  return inverted ? (
    <svg {...restProps} viewBox="0 0 48 38">
      <path
        fill="#5BC0C9"
        d="M12.895 32.745a5.689 5.689 0 0 0 11.33 0V25.16h-11.33v7.585zM24.225 6.216a5.689 5.689 0 1 0-11.33 0v7.585h11.33V6.216z"
      />
      <path
        fill="#C6E400"
        d="M37.49 25.141h-5.689v7.585a5.689 5.689 0 0 0 11.33 0V19.452a5.689 5.689 0 0 1-5.641 5.69z"
      />
      <path
        fill="#C6E400"
        d="M37.49.546a5.689 5.689 0 0 0-5.689 5.689v7.585h5.689a5.689 5.689 0 0 1 5.689 5.69V6.234A5.689 5.689 0 0 0 37.49.546z"
      />
      <path
        fill="#FFF"
        d="M5.17 14.043a5.689 5.689 0 0 0 0 11.33h7.585v-11.33H5.17zM24.225 13.82h7.605v11.33h-7.605z"
      />
      <path fill="#008EC8" d="M12.895 13.82h11.33v11.33h-11.33z" />
      <path
        fill="#48B400"
        d="M37.764 13.82h-5.963v11.321h5.963c3.047-.292 5.367-2.739 5.367-5.66 0-2.922-2.32-5.369-5.367-5.66z"
      />
    </svg>
  ) : (
    <svg {...restProps} viewBox="0 0 48 38">
      <path
        d="M12.908 32.745a5.692 5.692 0 0 0 5.67 5.17 5.692 5.692 0 0 0 5.672-5.17V25.16H12.908v7.585zM24.25 6.216A5.687 5.687 0 0 0 21.575.859a5.7 5.7 0 0 0-5.992 0 5.687 5.687 0 0 0-2.675 5.357v7.585H24.25V6.216z"
        fill="#5BC0C9"
      />
      <path
        d="M37.118 25.141h-5.695v7.585a5.692 5.692 0 0 0 5.671 5.17 5.692 5.692 0 0 0 5.671-5.17V19.452a5.692 5.692 0 0 1-5.647 5.69z"
        fill="#C6E400"
      />
      <path
        d="M37.118.546a5.692 5.692 0 0 0-5.695 5.689v7.585h5.695a5.692 5.692 0 0 1 5.694 5.69V6.234A5.692 5.692 0 0 0 37.118.546z"
        fill="#C6E400"
      />
      <path
        d="M5.296 13.82a5.691 5.691 0 0 0-5.175 5.665 5.691 5.691 0 0 0 5.175 5.666h7.593V13.82H5.296zM24.25 13.82h7.2v11.33h-7.2z"
        fill="#2B4B5A"
      />
      <path fill="#008EC8" d="M12.908 13.82H24.25v11.33H12.908z" />
      <path
        d="M37.528 13.82h-6.095v11.321h6.495c2.91-.292 4.726-2.739 4.926-5.66 0-2.922-2.016-5.369-4.926-5.66h-.4z"
        fill="#48B400"
      />
    </svg>
  );
}
