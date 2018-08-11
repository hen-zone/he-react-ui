// @flow

import { mount } from 'enzyme';
import React from 'react';
import { Table } from '../..';

const props = {
  columns: [
    { title: 'Name', sortable: true },
    { title: 'Specialty', sortable: true },
    { title: 'Date of Birth', width: 'narrow' },
    { title: 'Status', sortable: true, width: 'extraNarrow' },
  ],
  body: [
    { content: ['Barry Fullerman', 'Chiropractor', '23/11/1991', 'Active'] },
    { content: ['Tom Ackerman', 'Psychologist', '05/04/1975', 'Active'] },
    { content: ['???', '???', '23/06/1021', 'Immortal'] },
    {
      content: [
        'Mary Tillerman',
        'General Practitioner',
        '15/09/1984',
        'Inactive',
      ],
    },
    {
      content: [
        'Nick Wickerman',
        'Investigative Journalist',
        '02/08/1987',
        'Bees',
      ],
    },
  ],
};

test('<Table /> rendered correctly with sortable fixture', () => {
  const wrapper = mount(<Table {...props} />);

  wrapper
    .find('div.heading')
    .first()
    .simulate('click');
});
