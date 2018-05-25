import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Clock.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Clock /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
