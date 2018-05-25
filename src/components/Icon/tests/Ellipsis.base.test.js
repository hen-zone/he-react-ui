import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Ellipsis.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Ellipsis /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
