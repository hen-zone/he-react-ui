// @flow
/**
 *
 * Label
 *
 */

import classnames from 'classnames';
import React from 'react';
import Alert from '../../Icon/Alert';
import LoadingStrip from '../../Loading/LoadingStrip';
import style from './Label.scss';

type Props = {
  className: string,
  error?: boolean,
  htmlFor?: string,
  children: any,
};

function Label(props: Props) {
  const { children, className, error, htmlFor, ...restProps } = props;
  const classes = classnames(style.label, {
    [style.error]: error,
    [className]: className,
  });

  const htmlForProp = htmlFor ? { htmlFor } : {};

  return (
    <div className={classes} {...restProps}>
      {error && <Alert className={style.icon} />}
      {children ? (
        <label {...htmlForProp}>{children}</label>
      ) : (
        <LoadingStrip className={style.loading} />
      )}
    </div>
  );
}

Label.defaultProps = {
  error: false,
};

export default Label;
