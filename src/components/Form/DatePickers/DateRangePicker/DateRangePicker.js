// @flow
import classNames from 'classnames';
import moment from 'moment';
import React from 'react';
import { DateRangePicker as InnerDateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleSelect } from '../../../';
import ChevronRight from '../../../Icon/Chevrons/ChevronRight';
import ChevronLeft from '../../../Icon/Chevrons/ChevronLeft';
import style from './DateRangePicker.module.scss';

const CUSTOM = 'CUSTOM';
const DAY_FORMAT = 'D MMM YYYY';
const MONTH_FORMAT = 'MMM YYYY';
const NEVER = () => false;

function sameDay(firstMoment, secondMoment) {
  return firstMoment && secondMoment && firstMoment.isSame(secondMoment, 'd');
}

function formatRange(startDate, endDate) {
  // If a start-date is the start of the month, we just list the month and year.
  // Ditto if an end-date is at the end of the month.
  // If the start-date and end-date would render the same string, we just return that string
  // (eg: if the span is one whole month, or just a single day).
  // Otherwise, we return a dash-separated range.

  if (!startDate || !endDate) return null;

  const startDisplay = sameDay(startDate, moment(startDate).startOf('month'))
    ? startDate.format(MONTH_FORMAT)
    : startDate.format(DAY_FORMAT);

  const endDisplay = sameDay(endDate, moment(endDate).endOf('month'))
    ? endDate.format(MONTH_FORMAT)
    : endDate.format(DAY_FORMAT);

  return startDisplay === endDisplay
    ? startDisplay
    : `${startDisplay} — ${endDisplay}`;
}

type Props = {
  options: { label: string, value: [moment, moment] }[],
  value: ?[moment, moment],
  allowCustom: boolean,

  id: string,

  className?: string,
  label?: string,
  error?: string,
  disabled?: boolean,

  fill: boolean,

  onChange: Function,
  isOutsideRange: Function,
  placeholder: string,
  keepOpenOnDateSelect: boolean,
};

type RangePickerResult = { startDate: moment, endDate: moment };

export default class DateRangePicker extends React.Component<Props, *> {
  static defaultProps = {
    allowCustom: true,
    options: [],
    placeholder: 'Select a date range',
    id: 'date-range-picker',
    fill: false,
    keepOpenOnDateSelect: false,
    onChange: () => {},
    isOutsideRange: NEVER,
    value: null,
  };

  state = {
    focusedInput: null,
    selectOpen: false,
  };

  getSelectOptions = () => {
    const { options, allowCustom } = this.props;

    const wrappedOptions = (options || []).map(({ label }, index) => ({
      label,
      value: String(index),
    }));

    if (allowCustom)
      wrappedOptions.push({
        label: 'Custom',
        value: CUSTOM,
      });

    return wrappedOptions;
  };

  getSelectValue = () => {
    const { value, options } = this.props;

    if (!value) return null;

    const index = (options || []).findIndex(
      entry =>
        sameDay(entry.value[0], value[0]) && sameDay(entry.value[1], value[1]),
    );

    return index === -1 ? null : String(index);
  };

  getRangeTitle = () => {
    const { value } = this.props;
    const startDate = value ? value[0] : null;
    const endDate = value ? value[1] : null;
    return formatRange(startDate, endDate);
  };

  handleFocusChange = (focusedInput: string) => {
    this.setState({ focusedInput });
  };

  handleDatesChange = (result: RangePickerResult) => {
    const { startDate, endDate } = result;
    if (this.props.onChange)
      this.props.onChange({ value: [startDate, endDate] });
  };

  showCustomPicker = () => {
    this.setState({ focusedInput: 'startDate' });
  };

  handleSelectChange = (ev: { value: string }) => {
    if (ev.value === CUSTOM) {
      this.showCustomPicker();
    } else {
      this.props.onChange(this.props.options[Number(ev.value)]);
    }
  };

  handleSelectOpen = () => {
    this.setState({ selectOpen: true });
    if (this.props.options.length) {
      return true;
    }
    this.showCustomPicker();
    return false;
  };

  handleSelectClose = () => {
    this.setState({ selectOpen: false });
  };

  render() {
    const {
      error,
      disabled,
      className,
      label,
      value,
      id,
      fill,
      keepOpenOnDateSelect,
      isOutsideRange,
    } = this.props;

    const [startDate, endDate] = value || [null, null];

    const { focusedInput, selectOpen } = this.state;

    const classes = classNames(style.outer, className);

    const placeholder = this.getRangeTitle() || this.props.placeholder;

    const selectValue = this.getSelectValue();
    const shouldForceTitle = selectOpen || selectValue === CUSTOM;

    return (
      <div className={classes}>
        <SingleSelect
          id={`${id}-select-id`}
          value={selectValue}
          forceTitle={shouldForceTitle ? placeholder : null}
          label={label}
          error={error}
          disabled={disabled}
          placeholder={placeholder}
          name={`${id}-select-name`}
          onChange={this.handleSelectChange}
          onBeforeOpen={this.handleSelectOpen}
          onClose={this.handleSelectClose}
          options={this.getSelectOptions()}
          fill={fill}
        />

        <div className={style.inner}>
          <InnerDateRangePicker
            startDateId={`${id}-start`}
            customArrowIcon={null}
            minimumNights={0}
            endDateId={`${id}-end`}
            startDate={startDate}
            endDate={endDate}
            daySize={28}
            disabled={disabled}
            onDatesChange={this.handleDatesChange}
            onFocusChange={this.handleFocusChange}
            navNext={<ChevronRight />}
            navPrev={<ChevronLeft />}
            focusedInput={focusedInput}
            isDayBlocked={NEVER}
            isOutsideRange={isOutsideRange}
            keepOpenOnDateSelect={keepOpenOnDateSelect}
          />
        </div>
      </div>
    );
  }
}
