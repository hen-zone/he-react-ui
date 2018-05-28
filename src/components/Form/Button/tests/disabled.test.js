import createTestContext from 'react-cosmos-test/enzyme'
import fixture from '../fixtures/disabled.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

test('<Button /> rendered correctly with disabled fixture', () => {
  let wrapper = getWrapper()
  expect(wrapper.find('button')).toHaveLength(1)

  expect(wrapper).toMatchSnapshot()
})
