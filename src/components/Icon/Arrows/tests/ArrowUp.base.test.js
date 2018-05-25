import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ArrowUp.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<ArrowUp /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
