import moment from 'moment';
import DateRangePicker from '../DateRangePicker';

const LAST_MONTH = {
  label: 'Last month',
  value: [
    moment()
      .subtract(1, 'month')
      .startOf('month'),
    moment()
      .subtract(1, 'month')
      .endOf('month'),
  ],
};

const parentLayout = {
  margin: 20,
  padding: 20,
  border: 'solid 1px silver',
  background: 'white',
  boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
};

const formWrapper = {
  value: LAST_MONTH.value,
};

const options = [
  LAST_MONTH,

  {
    label: 'Last 3 months',
    value: [
      moment()
        .subtract(3, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month'),
    ],
  },

  {
    label: 'Last 12 months',
    value: [
      moment()
        .subtract(12, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month'),
    ],
  },
];

export default [
  {
    name: 'withChoices',
    component: DateRangePicker,

    props: {
      options,
    },

    parentLayout,

    formWrapper,
  },

  {
    component: DateRangePicker,

    name: 'customOnly',

    parentLayout,

    formWrapper,
  },

  {
    component: DateRangePicker,

    name: 'presetsOnly',

    parentLayout,

    props: { options, allowCustom: false },

    formWrapper,
  },

  {
    component: DateRangePicker,

    name: 'noInitialValue',

    parentLayout,

    formWrapper: {
      value: null,
    },
  },

  {
    component: DateRangePicker,

    name: 'customPlaceholder',

    parentLayout,

    props: {
      placeholder: 'When will you be traveling?',
    },

    formWrapper: {
      value: null,
    },
  },
  /* This fixture is temporarily commented out because it cannot be safely tested within JSDOM. */
  // {
  //   component: DateRangePicker,
  //   name: 'customPickerOpen',
  //   parentLayout,
  //   formWrapper,
  //   state: {
  //     focusedInput: 'startDate',
  //   },
  // },
];
