// @flow

/* eslint-disable global-require */
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-react-adapter-future';
import 'raf/polyfill';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  require('promise/lib/rejection-tracking').enable();
  window.Promise = require('promise/lib/es6-extensions.js');
}
// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

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

let throwing = false;

global.console.error = it => {
  if (throwing) {
    console.log(it); // eslint-disable-line
  } else {
    throwing = true;
    process.nextTick(() => {
      throwing = false;
    });

    throw new Error(it);
  }
};
