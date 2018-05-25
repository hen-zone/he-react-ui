import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/CaretRight.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<CaretRight /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
