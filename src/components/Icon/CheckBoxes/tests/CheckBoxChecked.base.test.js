import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/CheckBoxChecked.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<CheckBoxChecked /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
