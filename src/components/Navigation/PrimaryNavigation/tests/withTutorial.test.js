// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/WithTutorial.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<PrimaryNavigation /> rendered correctly with tutorial fixture', () => {
  const wrapper = getWrapper();
  const component = wrapper.find('PrimaryNavigation').instance();
  expect(wrapper).toMatchSnapshot();
  component.toggleBucket('BUCKET1');
  component.closeBucket();
  component.toggleBucket('BUCKET1');
  component.handleClickOutside();
});
