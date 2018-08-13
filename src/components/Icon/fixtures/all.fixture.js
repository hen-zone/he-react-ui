// @flow
import Add from '../Add';
import Alarm from '../Alarm';
import Alert from '../Alert';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  CurvedArrow,
} from '../Arrows';
import Bookings from '../Bookings';
import Calendar from '../Calendar';
import CaretRight from '../CaretRight';
import {
  CheckBoxChecked,
  CheckBoxUnchecked,
  RadioChecked,
  RadioUnchecked,
} from '../CheckBoxes';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from '../Chevrons';
import Clock from '../Clock';
import Cross from '../Cross';
import Delete from '../Delete';
import DropDown from '../DropDown';
import Edit from '../Edit';
import Ellipsis from '../Ellipsis';
import Engage from '../Engage';
import HealthEngine from '../HealthEngine';
import HealthEngineWithText from '../HealthEngineWithText';
import Help from '../Help';
import Home from '../Home';
import Logout from '../Logout';
import Megaphone from '../Megaphone';
import Patients from '../Patients';
import Search from '../Search';
import Settings from '../Settings';
import Sync from '../Sync';
import Tick from '../Tick';
import View from '../View';

export default [
  { name: 'Add', component: Add, props: {} },
  { name: 'Alarm', component: Alarm, props: {} },
  { name: 'Alert', component: Alert, props: {} },
  { name: 'ArrowRight', component: ArrowRight, props: {} },
  { name: 'ArrowLeft', component: ArrowLeft, props: {} },
  { name: 'Bookings', component: Bookings, props: {} },
  { name: 'Calendar', component: Calendar, props: {} },
  { name: 'CaretRight', component: CaretRight, props: {} },
  { name: 'Clock', component: Clock, props: {} },
  { name: 'CurvedArrow', component: CurvedArrow, props: {} },
  { name: 'Cross', component: Cross, props: {} },
  { name: 'Delete', component: Delete, props: {} },
  { name: 'DropDown', component: DropDown, props: {} },
  { name: 'Edit', component: Edit, props: {} },
  { name: 'Ellipsis', component: Ellipsis, props: {} },
  { name: 'Engage', component: Engage, props: {} },
  { name: 'HealthEngine', component: HealthEngine, props: {} },
  {
    name: 'HealthEngineWithText',
    component: HealthEngineWithText,
    props: {},
  },
  { name: 'Help', component: Help, props: {} },
  { name: 'Home', component: Home, props: {} },
  { name: 'Logout', component: Logout, props: {} },
  { name: 'Megaphone', component: Megaphone, props: {} },
  { name: 'Patients', component: Patients, props: {} },
  { name: 'Search', component: Search, props: {} },
  { name: 'Settings', component: Settings, props: {} },
  { name: 'Sync', component: Sync, props: {} },
  { name: 'Tick', component: Tick, props: {} },
  { name: 'View', component: View, props: {} },
  { name: 'ChevronUp', component: ChevronUp, props: {} },
  { name: 'ChevronDown', component: ChevronDown, props: {} },
  { name: 'ChevronLeft', component: ChevronLeft, props: {} },
  { name: 'ChevronRight', component: ChevronRight, props: {} },
  {
    name: 'CheckBoxChecked',
    component: CheckBoxChecked,
    props: {},
  },
  {
    name: 'CheckBoxUnchecked',
    component: CheckBoxUnchecked,
    props: {},
  },
  { name: 'RadioChecked', component: RadioChecked, props: {} },
  {
    name: 'RadioUnchecked',
    component: RadioUnchecked,
    props: {},
  },
  { name: 'ArrowDown', component: ArrowDown, props: {} },
  { name: 'ArrowLeft', component: ArrowLeft, props: {} },
  { name: 'ArrowRight', component: ArrowRight, props: {} },
  { name: 'ArrowUp', component: ArrowUp, props: {} },
];
