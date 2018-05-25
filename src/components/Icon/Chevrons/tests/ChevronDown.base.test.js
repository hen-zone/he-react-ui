import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ChevronDown.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<ChevronDown /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
