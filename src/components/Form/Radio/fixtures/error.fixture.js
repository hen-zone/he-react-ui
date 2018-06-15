import Radio from '../';

export default {
  component: Radio,
  props: {
    name: 'demo',
    id: 'demo',
    error: "That selection wasn't great",
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    value: '1',
  },
};
