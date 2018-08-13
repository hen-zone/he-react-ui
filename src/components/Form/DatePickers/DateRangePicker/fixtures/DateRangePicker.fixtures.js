// @flow
import moment from 'moment';
import component from '../DateRangePicker';

const TODAY = new Date('2018-06-30');
const LAST_MONTH = {
  label: 'Last month',
  value: [
    moment(TODAY)
      .subtract(1, 'month')
      .startOf('month'),
    moment(TODAY)
      .subtract(1, 'month')
      .endOf('month'),
  ],
};
const label = "Pretend it's June 2018...";
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
    label: 'Last month',
    value: [
      moment(TODAY)
        .subtract(1, 'month')
        .startOf('month'),
      moment(TODAY)
        .subtract(1, 'month')
        .endOf('month'),
    ],
  },

  {
    label: 'Last 3 months',
    value: [
      moment(TODAY)
        .subtract(3, 'month')
        .startOf('month'),
      moment(TODAY)
        .subtract(1, 'month')
        .endOf('month'),
    ],
  },

  {
    label: 'Last 12 months',
    value: [
      moment(TODAY)
        .subtract(12, 'month')
        .startOf('month'),
      moment(TODAY)
        .subtract(1, 'month')
        .endOf('month'),
    ],
  },
];

export default [
  {
    name: 'withChoices',
    component,

    props: {
      label,
      options,
    },

    parentLayout,

    formWrapper,
  },

  {
    name: 'keepOpenOnDateSelect',
    component,

    props: {
      options,
      keepOpenOnDateSelect: true,
    },

    parentLayout,

    formWrapper,
  },

  {
    name: 'fill',
    component,

    props: {
      label,
      options,
      fill: true,
    },

    parentLayout,

    formWrapper,
  },

  {
    component,

    name: 'customOnly',

    parentLayout,

    formWrapper,
  },

  {
    component,

    name: 'disallowFuture',

    props: {
      isOutsideRange: (date: moment) => date.isAfter(TODAY, 'day'),
    },

    parentLayout,

    formWrapper,
  },

  {
    component,

    name: 'presetsOnly',

    parentLayout,

    props: {
      label,
      options,
      allowCustom: false,
    },

    formWrapper,
  },

  {
    component,

    name: 'noInitialValue',

    parentLayout,

    formWrapper: {
      value: null,
    },
  },

  {
    component,

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
  //   component,
  //   name: 'customPickerOpen',
  //   parentLayout,
  //   formWrapper,
  //   state: {
  //     focusedInput: 'startDate',
  //   },
  // },
];
