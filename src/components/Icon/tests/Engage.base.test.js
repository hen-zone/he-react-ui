import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Engage.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Engage /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
