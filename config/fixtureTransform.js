// @flow
const babelJest = require('babel-jest');

const IS_FIXTURE_FILE = /\.fixtures?.js$/;

function testFixtures(exports) {
  const defaultExport = exports.default;

  const fixtures = Array.isArray(defaultExport)
    ? defaultExport
    : [defaultExport];

  const cleanedFixtures = fixtures.filter(it => it);

  const namedPairs = cleanedFixtures.map(it => [it.name || 'anonymous', it]);

  test.each(namedPairs)('%s', (_, fixture) => {
    const { mount, getWrapper } = global.createTestContext({ fixture });
    mount();
    expect(getWrapper()).toMatchSnapshot();
  });
}

const testerCode = String(testFixtures);

function wrapWithTester(sourceCode) {
  return `
    ${sourceCode}
    ;
    (${testerCode})(module.exports);`;
}

module.exports = {
  process(
    src /* :string */,
    fileName /* :string */,
    ...args /* : * */
  ) /* : string */ {
    const wrapped = IS_FIXTURE_FILE.test(fileName) ? wrapWithTester(src) : src;

    return babelJest.process(wrapped, fileName, ...args);
  },
};
