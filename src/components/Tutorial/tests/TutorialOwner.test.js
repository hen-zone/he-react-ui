// @flow
import { mount } from 'enzyme';
import React from 'react';
import { withTutorial } from '../index';
import TutorialOwner from '../TutorialOwner';

const TutorialSpy = withTutorial(
  class TutorialSpyInner extends React.Component<*> {
    props: {
      onTutorialAdvance: Function,
      onTutorialDismiss: Function,
      onTutorialJump: Function,
      tutorialIndex: number,
      tutorialSteps: string[],
    };

    render() {
      const {
        onTutorialAdvance,
        onTutorialDismiss,
        onTutorialJump,
        tutorialIndex,
        tutorialSteps,
      } = this.props;

      return (
        <div>
          <span id="tutorialIndex">{tutorialIndex}</span>
          <span id="tutorialSteps">{tutorialSteps.join('/')}</span>
          <span id="currentStep">{tutorialSteps[tutorialIndex]}</span>
          <button id="onTutorialAdvance" onClick={onTutorialAdvance} />
          <button id="onTutorialJump" onClick={() => onTutorialJump('Z')} />
          <button id="onTutorialDismiss" onClick={onTutorialDismiss} />
        </div>
      );
    }
  },
);

function makeHarness(autoStart = false) {
  return mount(
    <TutorialOwner autoStart={autoStart} steps={['A', 'B', 'C', 'Z']}>
      <TutorialSpy />
    </TutorialOwner>,
  );
  ``;
}

describe('TutorialOwner', () => {
  it('Should not start by default', () => {
    const harness = makeHarness();
    expect(harness.find('#tutorialIndex').text()).toBe('-1');
    expect(harness.find('#currentStep').text()).toBe('');
  });

  it('Should start by default with autoStart=true', () => {
    const harness = makeHarness(true);
    expect(harness.find('#tutorialIndex').text()).toBe('0');
    expect(harness.find('#currentStep').text()).toBe('A');
  });

  it('Should advance normally', () => {
    const harness = makeHarness();
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('A');
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('B');
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('C');
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('Z');
    harness.find('#onTutorialAdvance').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('');
  });

  it('Should permit dismissing', () => {
    const harness = makeHarness(true);
    expect(harness.find('#tutorialIndex').text()).toBe('0');
    harness.find('#onTutorialDismiss').simulate('click');
    expect(harness.find('#tutorialIndex').text()).toBe('-1');
  });

  it('Should permit jumping', () => {
    const harness = makeHarness(true);
    expect(harness.find('#currentStep').text()).toBe('A');
    harness.find('#onTutorialJump').simulate('click');
    expect(harness.find('#currentStep').text()).toBe('Z');
  });
});
