import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/RadioChecked.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<RadioChecked /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
