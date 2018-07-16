// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/linkStyle.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<Button /> rendered correctly with fixture', () => {
  const wrapper = getWrapper();
  expect(wrapper.find('button')).toHaveLength(1);

  expect(wrapper).toMatchSnapshot();
});
