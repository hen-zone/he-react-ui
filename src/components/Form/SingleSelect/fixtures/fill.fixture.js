import component from '../';

export default {
  component,
  formWrapper: { value: null },
  props: {
    id: 'demo',
    name: 'demo',
    fill: true,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
};
