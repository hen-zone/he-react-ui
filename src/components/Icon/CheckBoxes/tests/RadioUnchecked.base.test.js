import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/RadioUnchecked.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<RadioUnchecked /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
