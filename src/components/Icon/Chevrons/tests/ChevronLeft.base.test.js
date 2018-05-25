import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ChevronLeft.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<ChevronLeft /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
