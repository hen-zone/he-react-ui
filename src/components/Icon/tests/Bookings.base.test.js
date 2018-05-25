import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Bookings.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Bookings /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
