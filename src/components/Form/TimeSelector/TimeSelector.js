// @flow
/**
 *
 * TimeSelector
 *
 */

import React from 'react';
import classnames from 'classnames';
import onClickOutside from 'react-onclickoutside';

import Clock from '../../Icon/Clock';
import Label from '../Label';
import style from './TimeSelector.scss';

function asElement(node: Node): HTMLElement {
  return (node: any);
}

type Props = {
  id: string,
  name: string,
  className?: string,
  inline?: boolean,
  hourly?: boolean,
  hours: Array<any>,
  minutes: Array<any>,
  required?: boolean,
  disabled?: boolean,
  error?: string,
  label?: string,
  placeholder?: string,
  value?: string,
  onChange: Function,
  eventTypes?: string | Array<string>,
  outsideClickIgnoreClass?: string,
  preventDefault?: boolean,
  stopPropagation?: boolean,
  disableOnClickOutside?: Function,
  enableOnClickOutside?: Function,
};

class TimeSelector extends React.Component<Props, *> {
  static defaultProps = {
    disabled: false,
    error: '',
    inline: false,
    required: false,
    hourly: false,
    onChange: () => {},
    hours: (() =>
      [...Array(24).keys()].map(n => ({
        label: n.toString(),
        value: n.toString(),
      })))(),
    minutes: (() =>
      [...Array(60).keys()].map(n => ({
        label: n.toString().padStart(2, '0'),
        value: n.toString().padStart(2, '0'),
      })))(),
  };

  state = {
    hour: undefined,
    minute: undefined,
    expanded: false,
  };

  getDisplay = () => {
    const { value } = this.props;

    return value || this.props.placeholder || '0:00';
  };

  toggleExpand = () => {
    this.setState({
      expanded: this.props.disabled ? false : !this.state.expanded,
    });
  };

  hideExpand = () => {
    this.setState({ expanded: false });
  };

  handleClickOutside = () => {
    this.hideExpand();
  };

  generateOptions = options =>
    options.map(option => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ));

  selectTime = (hour, minute) => {
    const { onChange, hourly } = this.props;
    this.setState({
      hour,
      minute,
      expanded: !hourly, // Close if hourly
    });
    onChange({
      value: `${hour || 0}:${minute || '00'}`,
      props: this.props,
    });
  };

  selectMinute = option => {
    const { hour } = this.state;
    this.selectTime(hour, option.value);
  };

  selectHour = option => {
    const { minute } = this.state;
    this.selectTime(option.value, minute);
  };

  generateList = (options, selectOption) => {
    const { hourly } = this.props;
    return options.map(option => {
      const selected = this.props.value === option.value;
      let ref = null;
      if (selected) {
        ref = item => {
          if (item) {
            setTimeout(() => {
              if (!item.parentNode) return;
              const parentNode = asElement(item.parentNode);

              if (parentNode) {
                const { offsetTop } = parentNode;
                asElement(parentNode).scrollTop = item.offsetTop - offsetTop;
              }
            }, 200);
          }
        };
      }
      return (
        <li
          className={classnames(style.option, { [style.selected]: selected })}
          key={option.value}
          onClick={() => selectOption(option)}
          ref={ref}
        >
          {`${hourly ? `${option.label}:00` : option.label}`}
        </li>
      );
    });
  };

  render() {
    const {
      id,
      name,
      className,
      required,
      disabled,
      error,
      label,
      placeholder,
      onChange,
      value,
      inline,
      minutes,
      hours,
      hourly,
      eventTypes,
      outsideClickIgnoreClass,
      preventDefault,
      stopPropagation,
      disableOnClickOutside,
      enableOnClickOutside,
      ...restProps
    } = this.props;
    const classes = classnames(
      style.outer,
      {
        [style.expanded]: this.state.expanded,
        [style.inline]: inline,
        [style.hourly]: hourly,
      },
      className,
    );

    return (
      <div className={classes} {...restProps}>
        {label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}
        <div
          className={classnames(style.select, {
            [style.error]: error,
            [style.disabled]: disabled,
            [style.noValue]: !value,
          })}
          onClick={this.toggleExpand}
        >
          <span>{this.getDisplay()}</span>
          <Clock className={style.clock} />
          <div className={style.options}>
            <ul>{this.generateList(hours, this.selectHour)}</ul>
            {!hourly && (
              <ul>{this.generateList(minutes, this.selectMinute)}</ul>
            )}
          </div>
        </div>
        {error && (
          <Label className={style.errorMessage} htmlFor={id} error>
            {error}
          </Label>
        )}
      </div>
    );
  }
}

export default onClickOutside(TimeSelector);
