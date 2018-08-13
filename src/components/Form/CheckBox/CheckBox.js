// @flow
/**
 *
 * CheckBox
 *
 */

import classnames from 'classnames';
import React from 'react';
import CheckBoxChecked from '../../Icon/CheckBoxes/CheckBoxChecked';
import CheckBoxUnchecked from '../../Icon/CheckBoxes/CheckBoxUnchecked';
import Alert from '../../Icon/Alert';
import style from './CheckBox.scss';

type Props = {
  id: string,
  name: string,
  className?: string,
  disabled?: boolean,
  label?: string,
  special?: boolean,
  value?: boolean,
  warning?: boolean,
  onChange: Function,
  checked?: boolean,
  error?: string,
};

class CheckBox extends React.Component<Props> {
  static defaultProps = {
    checked: false,
    disabled: false,
    error: '',
    special: false,
    onChange: () => {},
  };

  handleClick = () => {
    if (this.props.disabled) {
      return;
    }
    const event = {
      value: !this.props.value,
      props: this.props,
    };
    this.props.onChange(event);
  };

  render() {
    const { handleClick } = this;
    const {
      id,
      className,
      disabled,
      label,
      special,
      value,
      warning,
      onChange,
      ...restProps
    } = this.props;

    return (
      <div
        className={classnames(
          style.outer,
          {
            [style.disabled]: disabled,
          },
          className,
        )}
        id={id}
        {...restProps}
      >
        <label className={style.label} htmlFor={id} onClick={handleClick}>
          <CheckBoxUnchecked
            className={classnames(style.checkbox, style.empty, {
              [style.special]: special,
            })}
            name="CheckBoxUnchecked"
          />
          <CheckBoxChecked
            className={classnames(style.checkbox, style.full, {
              [style.checked]: value,
              [style.special]: special,
            })}
            name="CheckBoxChecked"
          />
          <span className={style.text}>{label}</span>
          {warning && <Alert className={style.warning} />}
        </label>
      </div>
    );
  }
}

export default CheckBox;
