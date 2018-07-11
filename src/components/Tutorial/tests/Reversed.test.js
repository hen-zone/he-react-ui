// @flow
import { mount } from 'enzyme';
import React from 'react';
import fixture from '../fixtures/Default.fixture.js';
import Tutorial from '../Tutorial.js';

test('<Tutorial /> rendered correctly with reversed fixture', () => {
  const onChangeStep = jest.fn();
  const onClose = jest.fn();
  const tutorial = mount(
    <Tutorial
      showing
      top={150}
      left={150}
      reversed
      opacity={1}
      onChangeStep={onChangeStep}
      onClose={onClose}
      tutorialStages={fixture.props.tutorialStages}
    />,
  );
  expect(tutorial).toMatchSnapshot();
  tutorial.find('#takeTourBtn').simulate('click');
});
