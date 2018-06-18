import createTestContext from 'react-cosmos-test/enzyme';
import fixtures from './fixtures/DateRangePicker.fixtures';

fixtures.forEach(fixture => {
  const context = createTestContext({ fixture });
  context.mount();
  test(`<DateRangePicker /> rendered correctly with ${
    fixture.name
  } fixture`, () => expect(context.getWrapper()).toMatchSnapshot());
});
