import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Calendar.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Calendar /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
