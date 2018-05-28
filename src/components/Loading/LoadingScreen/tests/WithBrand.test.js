import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/WithBrand.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<LoadingScreen /> rendered correctly with branded fixture', () =>
  expect(getWrapper()).toMatchSnapshot())
