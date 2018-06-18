import SingleSelect from '../';

export default {
  component: SingleSelect,
  props: {
    id: 'demo',
    name: 'demo',
    placeholder: 'Select from the list',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },

  parentLayout: {
    margin: 40,
    padding: 40,
    border: 'solid 1px silver',
    background: 'white',
    boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
  },
};
