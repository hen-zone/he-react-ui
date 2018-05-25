import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Logout.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Logout /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
