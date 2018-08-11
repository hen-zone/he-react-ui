// @flow

/* eslint-disable global-require */
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-react-adapter-future';
// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
import objectAssign from 'object-assign';
import 'raf/polyfill';
import React from 'react';
import createTestContext from 'react-cosmos-test/enzyme';
// fetch() polyfill for making API calls.
import 'whatwg-fetch';

jest.mock('react-onclickoutside', () => Component =>
  function MockClickOutside(props) {
    return <Component {...props} />;
  },
);

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.createTestContext = createTestContext;

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}

Object.assign = objectAssign;

// Hack, need to look for another solution
window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

// Cause console errors to fail tests

let accumulatedErrors = [];

global.console.error = it => {
  accumulatedErrors.push(it);
};

afterEach(() => {
  const consoleErrors = accumulatedErrors.join('\n');
  accumulatedErrors = [];
  expect(consoleErrors).toBe('');
});
