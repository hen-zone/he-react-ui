import moment from 'moment';
import SingleDatePicker from '../';

export default {
  component: SingleDatePicker,

  // state: { focused: true },

  props: {
    id: 'demo',
    name: 'demo',
    value: moment(),
  },
};
