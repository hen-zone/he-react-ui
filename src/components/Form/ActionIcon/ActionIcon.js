// @flow

/**
 *
 * ActionIcon
 *
 */

import classnames from 'classnames';
import React from 'react';
import Icon from '../../Icon';
import style from './ActionIcon.scss';

type Props = {
  color?: 'teal' | 'blue' | 'green' | 'red' | 'white',
  disabled?: boolean,
  onClick: Function,
  icon: string,
  title: string,
  className?: string,
};

class ActionIcon extends React.Component<Props> {
  static defaultProps = {
    className: '',
    color: 'teal',
    disabled: false,
    onClick: () => null,
  };

  handleClick = (event: SyntheticEvent<*>) => {
    if (!this.props.disabled) {
      this.props.onClick(event);
    }
  };

  render() {
    const {
      className,
      color,
      disabled,
      icon,
      onClick,
      title,
      ...rest
    } = this.props;
    const classes = classnames(
      style.button,
      color && style[color],
      disabled && style.disabled,
      className,
    );

    return (
      <button
        className={classes}
        type="button"
        onClick={this.handleClick}
        title={title}
        {...rest}
      >
        <Icon className={style.icon} name={icon} />
      </button>
    );
  }
}

export default ActionIcon;
