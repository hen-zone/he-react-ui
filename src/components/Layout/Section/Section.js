// @flow
import React from 'react';
import classnames from 'classnames';
import style from './Section.scss';

function Section(props: {
  children?: any,
  className?: string,
  loading?: boolean,
  loadingSkeleton?: any,
  transparent?: boolean,
}) {
  const {
    children,
    className,
    loading,
    loadingSkeleton,
    transparent,
    ...restProps
  } = props;
  const classes = classnames(
    style.outer,
    {
      [style.transparent]: transparent,
    },
    className,
  );

  return (
    <div className={classes} {...restProps}>
      {loading ? loadingSkeleton : children}
    </div>
  );
}

export default Section;
