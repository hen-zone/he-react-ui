/**
 *
 * SingleDatePicker
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { SingleDatePicker as Picker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Media from 'react-media';
import momentPropTypes from 'react-moment-proptypes';
import Icon from '../../../Icon';
import Label from '../../Label';
import styles from './SingleDatePicker.scss';

class SingleDatePicker extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    anchorDirection: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    error: PropTypes.string,
    horizontalMargin: PropTypes.number,
    isOutsideRange: PropTypes.func,
    inline: PropTypes.bool,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: momentPropTypes.momentObj,
    style: PropTypes.object,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    anchorDirection: 'left',
    disabled: false,
    displayFormat: 'DD/MM/YYYY',
    inline: false,
    placeholder: 'Date',
    readOnly: false,
    onBlur: () => null,
    onChange: () => null,
    onFocus: () => null,
  };

  constructor(props) {
    super(props);

    this.state = {
      focused: false,
      date: props.value,
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.date) {
      this.setState({
        date: nextProps.value,
      });
    }
  }

  handleDateChange = date => {
    const oldDate = this.state.date;
    this.setState({ date });
    if ((oldDate && oldDate.toJSON()) !== (date && date.toJSON())) {
      const event = {
        value: date,
        props: this.props,
      };
      this.props.onChange(event);
    }
  };

  handleFocusChange = ({ focused }) => {
    this.setState({ focused });
    const event = {
      focused,
      props: this.props,
    };
    if (focused) {
      this.props.onFocus(event);
    } else {
      this.props.onBlur(event);
    }
  };

  render() {
    const {
      id,
      error,
      horizontalMargin,
      inline,
      label,
      className,
      disabled,
      style,
      anchorDirection,
      displayFormat,
      isOutsideRange,
      readOnly,
      placeholder,
    } = this.props;
    const classes = classnames(styles.outer, {
      [styles.error]: error,
      [styles.disabled]: disabled,
      [styles.focused]: this.state.focused,
      [styles.inline]: inline,
      [className]: className,
    });

    return (
      <div className={classes} style={style}>
        {label && <Label className={styles.label}>{label}</Label>}
        <div className={styles.inner}>
          <Media query={{ maxWidth: 767 }}>
            {matches => (
              <Picker
                date={this.state.date}
                daySize={28}
                disabled={disabled}
                horizontalMargin={matches ? 0 : horizontalMargin}
                id={id}
                numberOfMonths={matches ? 1 : 2}
                onDateChange={this.handleDateChange}
                focused={this.state.focused}
                onFocusChange={this.handleFocusChange}
                navNext={<Icon name="ChevronRight" />}
                navPrev={<Icon name="ChevronLeft" />}
                anchorDirection={anchorDirection}
                displayFormat={displayFormat}
                isOutsideRange={isOutsideRange}
                readOnly={readOnly}
                placeholder={placeholder}
              />
            )}
          </Media>
          <Icon className={styles.icon} name="Calendar" />
        </div>
        {error && (
          <Label className={styles.errorMessage} htmlFor={id} error>
            {error}
          </Label>
        )}
      </div>
    );
  }
}

export default SingleDatePicker;
