import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Blank.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<LoadingScreen /> rendered correctly with blank fixture', () =>
  expect(getWrapper()).toMatchSnapshot()
)
