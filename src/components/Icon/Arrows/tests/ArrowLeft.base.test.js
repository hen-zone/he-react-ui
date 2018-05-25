import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/ArrowLeft.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<ArrowLeft /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
