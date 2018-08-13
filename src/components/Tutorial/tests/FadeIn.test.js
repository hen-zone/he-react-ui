// @flow
import { mount } from 'enzyme';
import React from 'react';
import FadeIn from '../FadeIn';

it('Should should get the mounted class after an animation frame passes', () => {
  jest.useFakeTimers();
  const wrapper = mount(<FadeIn />);
  expect(wrapper.find('div').hasClass('mounted')).toBeFalsy();
  jest.runAllTimers();
  wrapper.update();
  expect(wrapper.find('div').hasClass('mounted')).toBeTruthy();
});
