import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/DropDown.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<DropDown /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
