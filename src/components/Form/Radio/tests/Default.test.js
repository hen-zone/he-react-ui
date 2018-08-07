// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import testFixture from '../../../../../config/testFixture';
import fixture from '../fixtures/Default.fixture.js';

testFixture(fixture, 'Default');

test('Radio should change when clicked', () => {
  const { mount, getWrapper } = createTestContext({ fixture });

  mount();

  const wrapper = getWrapper();

  const first = wrapper.find('.option').at(0);

  expect(first.hasClass('selected')).toBe(false);

  first.simulate('click');
});
