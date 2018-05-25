import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Delete.base.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Delete /> rendered correctly with base fixture', () => 
    expect(getWrapper()).toMatchSnapshot()
)
