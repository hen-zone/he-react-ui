// @flow
import React from 'react';
import { shallow } from 'enzyme';
import InlineSelector from '../InlineSelector';
import styles from '../InlineSelector.scss';

const handleChange = jest.fn();
const wrapper = shallow(
  <InlineSelector
    id="demo"
    name="demo"
    onChange={handleChange}
    options={[
      { label: 'Any', value: '1' },
      { label: 'AM', value: '2' },
      { label: 'PM', value: '3' },
      { label: 'After Hours', value: '4' },
    ]}
  />,
);

describe('<InlineSelector />', () => {
  it('triggers on change when a new is clicked', () => {
    const firstOption = wrapper.find(`.${styles.option}`).first();
    expect(handleChange).toHaveBeenCalledTimes(0);
    firstOption.simulate('click');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('does not trigger on change again when same item is clicked', () => {
    wrapper.setProps({
      value: '1',
    });
    const selectedOption = wrapper.find(`.${styles.selected}`);
    expect(handleChange).toHaveBeenCalledTimes(1);
    selectedOption.simulate('click');
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
