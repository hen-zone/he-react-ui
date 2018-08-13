// @flow
import classnames from 'classnames';
import React from 'react';
import Add from './Add';
import Alarm from './Alarm';
import Alert from './Alert';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  CurvedArrow,
} from './Arrows';
import Bookings from './Bookings';
import Calendar from './Calendar';
import CaretRight from './CaretRight';
import {
  CheckBoxChecked,
  CheckBoxUnchecked,
  RadioChecked,
  RadioUnchecked,
} from './CheckBoxes';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from './Chevrons';
import Clock from './Clock';
import Cross from './Cross';
import Delete from './Delete';
import DropDown from './DropDown';
import Edit from './Edit';
import Ellipsis from './Ellipsis';
import Engage from './Engage';
import HealthEngine from './HealthEngine';
import HealthEngineWithText from './HealthEngineWithText';
import Help from './Help';
import Home from './Home';
import style from './Icon.scss';
import Logout from './Logout';
import Megaphone from './Megaphone';
import Patients from './Patients';
import Search from './Search';
import Settings from './Settings';
import Sync from './Sync';
import Tick from './Tick';
import View from './View';

type Color = 'teal' | 'blue' | 'green' | 'red' | 'white';

function Icon(props: {
  width?: number,
  height?: number,
  color?: Color,
  className?: string,
  name: string,
}) {
  const { width, height, color, className, name, ...restProps } = props;
  const classes = classnames(style.icon, color && style[color], className);
  const childProps = {
    width,
    height,
    className: classes,
    ...restProps,
  };

  switch (name) {
    case 'Add':
      return <Add {...childProps} />;
    case 'Alarm':
      return <Alarm {...childProps} />;
    case 'Alert':
      return <Alert {...childProps} />;
    case 'ArrowLeft':
      return <ArrowLeft {...childProps} />;
    case 'ArrowRight':
      return <ArrowRight {...childProps} />;
    case 'ArrowUp':
      return <ArrowUp {...childProps} />;
    case 'ArrowDown':
      return <ArrowDown {...childProps} />;
    case 'Bookings':
      return <Bookings {...childProps} />;
    case 'Calendar':
      return <Calendar {...childProps} />;
    case 'CaretRight':
      return <CaretRight {...childProps} />;
    case 'CheckBoxChecked':
      return <CheckBoxChecked {...childProps} />;
    case 'CheckBoxUnchecked':
      return <CheckBoxUnchecked {...childProps} />;
    case 'ChevronLeft':
      return <ChevronLeft {...childProps} />;
    case 'ChevronRight':
      return <ChevronRight {...childProps} />;
    case 'ChevronUp':
      return <ChevronUp {...childProps} />;
    case 'ChevronDown':
      return <ChevronDown {...childProps} />;
    case 'Clock':
      return <Clock />;
    case 'CurvedArrow':
      return <CurvedArrow />;
    case 'Cross':
      return <Cross {...childProps} />;
    case 'Delete':
      return <Delete {...childProps} />;
    case 'DropDown':
      return <DropDown {...childProps} />;
    case 'Edit':
      return <Edit {...childProps} />;
    case 'Engage':
      return <Engage {...childProps} />;
    case 'HealthEngine':
      return <HealthEngine {...restProps} />;
    case 'HealthEngineWithText':
      return <HealthEngineWithText />;
    case 'Help':
      return <Help {...childProps} />;
    case 'Home':
      return <Home {...childProps} />;
    case 'Megaphone':
      return <Megaphone {...childProps} />;
    case 'Patients':
      return <Patients {...childProps} />;
    case 'Ellipsis':
      return <Ellipsis {...childProps} />;
    case 'Logout':
      return <Logout {...childProps} />;
    case 'RadioChecked':
      return <RadioChecked {...childProps} />;
    case 'RadioUnchecked':
      return <RadioUnchecked {...childProps} />;
    case 'Search':
      return <Search {...childProps} />;
    case 'Settings':
      return <Settings {...childProps} />;
    case 'Sync':
      return <Sync {...childProps} />;
    case 'Tick':
      return <Tick {...childProps} />;
    case 'View':
      return <View {...childProps} />;
    default:
      return <Cross {...childProps} />;
  }
}

Icon.defaultProps = {
  name: 'Cross',
};

export default Icon;
