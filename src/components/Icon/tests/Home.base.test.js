import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Home.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Home /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
