import SingleSelect from '../'

export default {
  component: SingleSelect,
  formWrapper: {value: null},
  props: {
    id: 'demo',
    name: 'demo',
    options: [
      {label: 'Option 1', value: '1'},
      {label: 'Option 2', value: '2'},
      {label: 'Option 3', value: '3'}
    ]
  }
}
