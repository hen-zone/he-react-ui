/**
 *
 * Button
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Icon from '../../Icon';
import style from './Button.scss';
import ButtonSpinner from './ButtonSpinner';

class Button extends React.Component {
  static propTypes = {
    submit: PropTypes.bool,
    color: PropTypes.oneOf(['teal', 'blue', 'green', 'red', 'white']),
    link: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func,
    keyline: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
    squared: PropTypes.bool,
    submitting: PropTypes.bool,
    done: PropTypes.bool,
    className: PropTypes.string,
  };

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

  handleClick = event => {
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
      onClick,
      small,
      large,
      squared,
      submit,
      submitting,
      done,
      ...rest
    } = this.props;

    const buttonClasses = classnames(style.button, {
      [style[color]]: color && !done,
      [style.disabled]: disabled,
      [style.keyline]: keyline,
      [style.link]: link,
      [style.squared]: squared,
      [style.submitting]: submitting,
      [className]: className,
      [style.done]: done,
    });

    const containerClasses = classnames(style.buttonContainer, {
      [style.small]: small,
      [style.large]: large,
    });

    const submittingIcon = submitting ? (
      <div className={style.iconCenter}>
        <ButtonSpinner />
      </div>
    ) : null;

    const statusIcon = done ? (
      <div className={style.iconCenter}>
        <Icon name="Tick" />
      </div>
    ) : (
      submittingIcon
    );

    return (
      <div className={containerClasses}>
        <button
          className={buttonClasses}
          type={submit ? 'submit' : 'button'}
          onClick={this.handleClick}
          {...rest}
        >
          {statusIcon || (
            <Fragment>
              {iconLeft && <div className={style.iconLeft}>{iconLeft}</div>}

              <div className={style.content}>
                {children}

                {icon && <Icon className={style.legacyIcon} name={icon} />}
              </div>

              {iconRight && <div className={style.iconRight}>{iconRight}</div>}
            </Fragment>
          )}
        </button>
      </div>
    );
  }
}

export default Button;
