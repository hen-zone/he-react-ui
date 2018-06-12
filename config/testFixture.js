import createTestContext from 'react-cosmos-test/enzyme';

export default function testFixture(fixture, variant) {
  const { mount, getWrapper } = createTestContext({ fixture });
  const { component } = fixture;
  const { displayName, name } = component;
  mount();
  test(`<${displayName ||
    name} /> rendered correctly with ${variant} fixture`, () =>
    expect(getWrapper()).toMatchSnapshot());
}
