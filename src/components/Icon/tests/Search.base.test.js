import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Search.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Search /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
