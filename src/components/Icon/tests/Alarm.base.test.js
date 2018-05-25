import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Alarm.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Alarm /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
