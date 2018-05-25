import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Tick.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Tick /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
