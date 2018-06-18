import React from 'react';
import Radio from '../';
import SingleSelect from '../../SingleSelect';

const other = (
  <SingleSelect
    id="demo"
    name="demo"
    options={[
      { value: 'A', label: 'A' },
      { value: 'B', label: 'B' },
      { value: 'C', label: 'C' },
    ]}
  />
);

export default {
  component: Radio,
  formWrapper: { value: '4' },
  props: {
    name: 'demo',
    id: 'demo',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Other...', value: '4', child: other },
    ],
  },
};
