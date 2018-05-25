import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Add /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
