// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/WithTutorial.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<PrimaryNavigation /> rendered correctly with tutorial fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();
});
