// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Empty.fixture.js';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<Tutorial /> rendered correctly with empty fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();
});
