import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Patients.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Patients /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
