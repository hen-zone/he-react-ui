// @flow

/**
 *
 * Button
 *
 */

import classnames from 'classnames';
import React, { Fragment } from 'react';
import Icon from '../../Icon';
import styles from './Button.scss';
import ButtonSpinner from './ButtonSpinner';

type Props = {
  submit?: boolean,
  color?: 'teal' | 'blue' | 'green' | 'red' | 'white',
  link?: boolean,
  small?: boolean,
  large?: boolean,
  onClick: Function,
  keyline?: boolean,
  children?: string | Array<any>,
  disabled?: boolean,
  icon?: string,
  iconLeft?: any,
  iconRight?: any,
  squared?: boolean,
  style?: any,
  submitting?: boolean,
  done?: boolean,
  className?: string,
};

class Button extends React.Component<Props> {
  static defaultProps = {
    submit: false,
    link: false,
    color: 'teal',
    icon: '',
    keyline: false,
    disabled: false,
    squared: false,
    onClick: () => null,
  };

  handleClick = (event: SyntheticEvent<*>) => {
    if (!this.props.disabled) {
      this.props.onClick(event);
    }
  };

  render() {
    const {
      children,
      className,
      color,
      disabled,
      icon,
      iconLeft,
      iconRight,
      keyline,
      link,
      small,
      large,
      squared,
      style,
      submit,
      submitting,
      done,
    } = this.props;

    const buttonClasses = classnames(
      styles.button,
      color && !done && styles[color],
      {
        [styles.disabled]: disabled,
        [styles.keyline]: keyline,
        [styles.link]: link,
        [styles.squared]: squared,
        [styles.submitting]: submitting,
        [styles.done]: done,
      },
      className,
    );

    const containerClasses = classnames(styles.buttonContainer, {
      [styles.small]: small,
      [styles.large]: large,
    });

    const submittingIcon = submitting ? (
      <div className={styles.iconCenter}>
        <ButtonSpinner />
      </div>
    ) : null;

    const statusIcon = done ? (
      <div className={styles.iconCenter}>
        <Icon name="Tick" />
      </div>
    ) : (
      submittingIcon
    );

    return (
      <div className={containerClasses} style={style}>
        <button
          className={buttonClasses}
          type={submit ? 'submit' : 'button'}
          onClick={this.handleClick}
        >
          {statusIcon || (
            <Fragment>
              {iconLeft && <div className={styles.iconLeft}>{iconLeft}</div>}

              <div className={styles.content}>
                {children}

                {icon && <Icon className={styles.legacyIcon} name={icon} />}
              </div>

              {iconRight && <div className={styles.iconRight}>{iconRight}</div>}
            </Fragment>
          )}
        </button>
      </div>
    );
  }
}

export default Button;
