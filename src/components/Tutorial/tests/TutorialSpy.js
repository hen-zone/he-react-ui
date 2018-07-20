// @flow
import React from 'react';
import { withTutorial } from '../index';

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

export default TutorialSpy;
