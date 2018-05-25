import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ChevronUp.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<ChevronUp /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
