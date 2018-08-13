// @flow
/**
 *
 * Radio
 *
 */

import React from 'react';
import classnames from 'classnames';

import RadioUnchecked from '../../Icon/CheckBoxes/RadioUnchecked';
import RadioChecked from '../../Icon/CheckBoxes/RadioChecked';
import Label from '../Label';
import style from './Radio.scss';

type Props = {
  name: string,
  id: string,
  className?: string,
  error?: string,
  inline?: boolean,
  label?: string,
  options: Array<{
    label: string,
    value: string,
    child?: any,
    showChild?: boolean,
  }>,
  value?: string,
  onChange: Function,
};

class Radio extends React.Component<Props> {
  static defaultProps = {
    error: '',
    inline: false,
    onChange: () => {},
  };

  generateOptions = () => {
    const { name, options, value } = this.props;

    return options.map(option => (
      <div
        key={option.value}
        className={classnames(style.option, {
          [style.selected]: value === option.value,
        })}
        onClick={() => this.handleClick(option.value)}
      >
        <input
          className={style.input}
          value={option.value}
          type="radio"
          name={name}
          checked={value === option.value}
          onChange={() => null}
        />
        <RadioUnchecked
          className={classnames(style.icon, style.empty)}
          name="RadioUnchecked"
        />
        <RadioChecked
          className={classnames(style.icon, style.full)}
          name="RadioChecked"
        />
        {option.label && <label className={style.tag}>{option.label}</label>}
        {option.child &&
          (option.showChild || value === option.value) && (
            <div className={style.child}>{option.child}</div>
          )}
      </div>
    ));
  };

  handleClick = (value: string) => {
    const oldValue = this.props.value;

    if (oldValue !== value) {
      const event = {
        value,
        props: this.props,
      };

      this.props.onChange(event);
    }
  };

  render() {
    const { generateOptions } = this;
    const {
      id,
      className,
      error,
      inline,
      label,
      onChange,
      value,
      ...restProps
    } = this.props;
    const classes = classnames(
      style.outer,
      {
        [style.inline]: inline,
      },
      className,
    );

    return (
      <div className={classes} id={id} {...restProps}>
        {label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}
        <div className={style.options}>{generateOptions()}</div>
        {error && (
          <Label className={style.error} error>
            {error}
          </Label>
        )}
      </div>
    );
  }
}

export default Radio;
