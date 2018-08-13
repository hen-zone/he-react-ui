// @flow
/**
 *
 * TextField
 *
 */

import React from 'react';
import classnames from 'classnames';
import Tick from '../../Icon/Tick';
import Cross from '../../Icon/Cross';
import style from './TextField.scss';

type Props = {
  id: string,
  name: string,
  className?: string,
  label?: Object | string,
  description?: string,
  error?: string,
  inline?: boolean,
  value?: string,
  disabled?: boolean,
  marker?: boolean,
  isValid?: boolean,
  onBlur: Function,
  onChange: Function,
  onFocus: Function,
};

class TextField extends React.Component<Props, *> {
  static defaultProps = {
    label: 'Field',
    disabled: false,
    inline: false,
    marker: false,
    value: '',
    isValid: true,
    onBlur: () => {},
    onChange: () => {},
    onFocus: () => {},
  };

  state = {
    focused: false,
  };

  handleFocus = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };

    this.setState({
      focused: true,
    });
    this.props.onFocus(event);
  };

  handleBlur = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };

    this.setState({
      focused: false,
    });
    this.props.onBlur(event);
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const event = {
      value: e.currentTarget.value,
      props: this.props,
    };
    this.props.onChange(event);
  };

  render() {
    const {
      className,
      id,
      name,
      label,
      description,
      value,
      disabled,
      error,
      inline,
      marker,
      onBlur,
      onChange,
      onFocus,
      isValid,
      ...restProps
    } = this.props;
    const { focused } = this.state;
    const floating = focused || value !== '';
    const classes = classnames(
      style.outer,
      {
        [style.invalid]: !isValid,
        [style.disabled]: disabled,
        [style.inline]: inline,
        [style.focused]: focused,
        [style.hasMarker]: marker,
      },
      className,
    );

    return (
      <div className={classes} {...restProps}>
        <div className={style.block}>
          <input
            className={style.input}
            id={id}
            name={name}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            disabled={disabled}
            value={value}
          />
          {marker &&
            value !== '' &&
            (isValid ? (
              <Tick className={style.marker} />
            ) : (
              <Cross className={style.marker} />
            ))}
          <label
            className={classnames(style.label, { [style.floating]: floating })}
            htmlFor={id}
          >
            {label}
          </label>
        </div>
        {(description || error) && (
          <label htmlFor={id} className={style.description}>
            {error || description}
          </label>
        )}
      </div>
    );
  }
}

export default TextField;
