import Radio from '../';

export default {
  formWrapper: { value: '' },
  component: Radio,
  props: {
    name: 'demo',
    id: 'demo',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
};
