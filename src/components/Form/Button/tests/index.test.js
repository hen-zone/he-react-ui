import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/Default.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Button /> rendered correctly with fixture', () => {
  let wrapper = getWrapper()
  expect(wrapper.find('button')).toHaveLength(1)

  expect(wrapper).toMatchSnapshot()
})
