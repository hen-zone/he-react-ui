import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Sync.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Sync /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
