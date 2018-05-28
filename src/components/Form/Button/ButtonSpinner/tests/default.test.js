import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ButtonSpinner.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Button /> rendered correctly with blue fixture', () =>
  expect(getWrapper()).toMatchSnapshot())
