// @flow
import { mount } from 'enzyme';
import React from 'react';
import fixture from '../fixtures/Default.fixture.js';
import Tutorial from '../Tutorial.js';

test('<Tutorial /> rendered correctly with default fixture', () => {
  const onChangeStep = jest.fn();
  const onClose = jest.fn();
  const tutorial = mount(
    <Tutorial
      showing
      top={150}
      left={150}
      reversed={false}
      opacity={1}
      onChangeStep={onChangeStep}
      onClose={onClose}
      tutorialStages={fixture.props.tutorialStages}
    />,
  );
  expect(tutorial).toMatchSnapshot();
  const spy = jest.spyOn(tutorial.instance(), 'takeTheTour');
  // cannot trigger through button -> call the function directly
  tutorial.instance().takeTheTour();

  expect(spy).toBeCalled();

  const spydoNextStep = jest.spyOn(tutorial.instance(), 'doNextStep');
  // cannot trigger through button -> call the function directly
  tutorial.instance().doNextStep();

  expect(spydoNextStep).toBeCalled();

  tutorial
    .find('.close')
    .first()
    .prop('onClick')();

  expect(onClose).toHaveBeenCalledTimes(1);
});
