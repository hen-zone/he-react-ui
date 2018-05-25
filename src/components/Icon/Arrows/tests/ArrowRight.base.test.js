import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ArrowRight.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<ArrowRight /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
