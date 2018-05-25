import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ArrowDown.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<ArrowDown /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
