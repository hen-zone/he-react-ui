// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import moment from 'moment';
import fixture from '../fixtures/Default.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<SingleDatePicker /> rendered correctly with default fixture', () => {
  const wrapper = getWrapper();
  const component = wrapper.instance();
  expect(wrapper).toMatchSnapshot();
  component.handleDateChange(moment());
});
