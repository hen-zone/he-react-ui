import React from 'react';
import runTests from 'react-cosmos-telescope';

jest.mock('react-tippy', () => ({
  Tooltip: jest.fn(({ children, html, ...props }) => (
    <div>
      <div {...props}>{children}</div>
      <div>{html}</div>
    </div>
  )),
}));

beforeEach(() => {
  jest.setTimeout(30000);
});

runTests({
  cosmosConfigPath: require.resolve('../../cosmos.config.js'),
});
