import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Help.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Help /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
