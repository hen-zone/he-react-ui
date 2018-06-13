import React from 'react';
import FormSection from '../';
import { SingleDatePicker } from '../../../';
import Radio from '../../../Form/Radio';

export default {
  component: FormSection,
  props: {
    heading: 'Section Heading',
    description:
      'This generally provides some further explanation about what the user can / should do.',
  },

  children: (
    <Radio
      name="demo"
      id="demo"
      label="Run for how long?"
      value="false"
      options={[
        { label: 'Indefinitely', value: 'false' },
        {
          label: 'Specific date...',
          value: 'true',
          child: <SingleDatePicker id="demo2" name="demo2" />,
          showChild: false,
        },
      ]}
    />
  ),
};
