import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Megaphone.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Megaphone /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
