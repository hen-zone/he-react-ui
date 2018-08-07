// @flow
import React from 'react';
import classnames from 'classnames';
import style from './Content.scss';

function Content(props: {
  children?: any,
  className?: string,
  loading?: boolean,
  loadingSkeleton?: any,
}) {
  const { children, className, loading, loadingSkeleton, ...restProps } = props;
  const classes = classnames(style.outer, className);

  return (
    <div className={classes} {...restProps}>
      {loading ? loadingSkeleton : children}
    </div>
  );
}

export default Content;
