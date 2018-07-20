// @flow
import { mount } from 'enzyme';
import React from 'react';

import TextField from '..';

it('should call its event handlers', () => {
  const handleFocus = jest.fn();
  const handleBlur = jest.fn();
  const handleChange = jest.fn();
  const field = mount(
    <TextField
      id="demo"
      name="demo"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
    />,
  );

  const input = field.find('input');
  input.simulate('focus');
  expect(handleFocus).toHaveBeenCalledTimes(1);
  input.simulate('change');
  expect(handleChange).toHaveBeenCalledTimes(1);
  input.simulate('blur');
  expect(handleBlur).toHaveBeenCalledTimes(1);
});
