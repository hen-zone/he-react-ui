import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ChevronRight.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<ChevronRight /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
