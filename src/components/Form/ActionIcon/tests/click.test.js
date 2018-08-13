// @flow
import { mount } from 'enzyme';
import React from 'react';
import ActionIcon from '../ActionIcon';

it('Should call its click handler', () => {
  const onClick = jest.fn();
  const onClick2 = jest.fn();

  const enabled = mount(
    <ActionIcon title="Test" icon="ArrowUp" onClick={onClick} />,
  );
  enabled.find('button').simulate('click');
  expect(onClick).toHaveBeenCalled();

  const disabled = mount(
    <ActionIcon title="Test" icon="ArrowUp" onClick={onClick2} disabled />,
  );
  disabled.find('button').simulate('click');

  expect(onClick2).not.toHaveBeenCalled();
});
