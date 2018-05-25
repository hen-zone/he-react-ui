import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Alert.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Alert /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
