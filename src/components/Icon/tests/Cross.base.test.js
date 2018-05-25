import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Cross.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Cross /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
