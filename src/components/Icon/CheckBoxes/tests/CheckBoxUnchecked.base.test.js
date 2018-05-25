import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/CheckBoxUnchecked.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<CheckBoxUnchecked /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
