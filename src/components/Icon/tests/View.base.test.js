import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/View.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<View /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
