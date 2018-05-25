import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Edit.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Edit /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
