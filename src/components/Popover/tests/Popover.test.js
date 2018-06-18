import createTestContext from 'react-cosmos-test/enzyme';
import fixtures from '../Popover.fixtures';

const { mount, getWrapper } = createTestContext({ fixture: fixtures[0] });
beforeEach(mount);

test(`<Popover /> rendered correctly with base fixture`, () => {
  expect(getWrapper()).toMatchSnapshot();
});
