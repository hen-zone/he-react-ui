/**
 *
 * SingleSelect
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import onClickOutside from 'react-onclickoutside';
import Icon from '../../Icon';
import Label from '../Label';
import style from './SingleSelect.scss';

class SingleSelect extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    inline: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired,
      }),
    ).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBeforeOpen: PropTypes.func,
    onClose: PropTypes.func,
    eventTypes: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    outsideClickIgnoreClass: PropTypes.string,
    preventDefault: PropTypes.bool,
    stopPropagation: PropTypes.bool,
    disableOnClickOutside: PropTypes.func,
    enableOnClickOutside: PropTypes.func,
    forceOpen: PropTypes.bool,
    fill: PropTypes.bool,
    forceTitle: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    error: '',
    inline: false,
    value: null,
    onChange: () => {},
    onBeforeOpen: () => true,
    onClose: () => true,
  };

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
    this.getDisplay = this.getDisplay.bind(this);
    this.toggleExpand = this.toggleExpand.bind(this);
    this.hideExpand = this.hideExpand.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
  }

  getDisplay = () => {
    const { options, value, forceTitle, placeholder } = this.props;

    if (forceTitle) return forceTitle;

    const option = options.find(it => it.value === value);
    const firstLabel = (options && options[0] && options[0].label) || '';

    return option ? option.label : placeholder || firstLabel;
  };

  toggleExpand = () => {
    if (this.state.expanded) {
      this.hideExpand();
    } else if (this.props.onBeforeOpen())
      this.setState({
        expanded: !this.props.disabled,
      });
  };

  hideExpand = () => {
    this.setState({ expanded: false });
    this.props.onClose();
  };

  handleClickOutside = () => {
    this.hideExpand();
  };

  selectOption = option => {
    const oldValue = this.props.value;
    this.hideExpand();
    if (oldValue !== option.value) {
      const event = {
        value: option.value,
        props: this.props,
      };

      this.props.onChange(event);
    }
  };

  generateOptions = () => {
    const firstValue =
      (this.props.options &&
        this.props.options[0] &&
        this.props.options[0].value) ||
      undefined;
    const value =
      this.props.value || (this.props.placeholder ? undefined : firstValue);

    return this.props.options.map(option => {
      const selected = value === option.value;
      let ref = null;
      if (value === option.value) {
        ref = item => {
          if (item) {
            setTimeout(() => {
              item.parentNode.scrollTop =
                item.offsetTop - item.parentNode.offsetTop;
            }, 200);
          }
        };
      }
      return (
        <li
          className={classnames(style.option, { [style.selected]: selected })}
          key={option.value}
          onClick={() => this.selectOption(option)}
          ref={ref}
        >
          {option.label}
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
      inline,
      label,
      placeholder,
      onChange,
      value,
      eventTypes,
      outsideClickIgnoreClass,
      preventDefault,
      stopPropagation,
      disableOnClickOutside,
      enableOnClickOutside,
      forceOpen,
      forceTitle,
      onBeforeOpen,
      fill,
      ...restProps
    } = this.props;
    const classes = classnames(style.outer, {
      [style.expanded]: this.state.expanded,
      [style.inline]: inline,
      [style.forceOpen]: forceOpen,
      [className]: className,
      [style.fill]: fill,
    });

    return (
      <div className={classes} {...restProps}>
        {label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}
        <div
          id={id}
          className={classnames(style.select, {
            [style.error]: error,
            [style.disabled]: disabled,
          })}
          onClick={this.toggleExpand}
        >
          <span>{this.getDisplay()}</span>
          <Icon className={style.caret} name="DropDown" />
        </div>
        <ul className={style.options}>{this.generateOptions()}</ul>
        {error && (
          <Label className={style.errorMessage} htmlFor={id} error>
            {error}
          </Label>
        )}
      </div>
    );
  }
}

export { SingleSelect as InnerSingleSelect };

export default onClickOutside(SingleSelect);
