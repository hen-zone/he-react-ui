// @flow

import * as React from 'react';
import TutorialContext from './TutorialContext';

export default class TutorialOwner extends React.Component<*, *> {
  state = {
    tutorialIndex: this.props.autoStart ? 0 : -1,
  };

  onTutorialAdvance = () => {
    const { steps } = this.props;
    const { tutorialIndex } = this.state;

    const nexttutorialIndex = tutorialIndex + 1;

    this.setState({
      tutorialIndex: nexttutorialIndex >= steps.length ? -1 : nexttutorialIndex,
    });
  };

  onTutorialDismiss = () => {
    this.setState({ tutorialIndex: -1 });
  };

  onTutorialJump = (id: string) => {
    const tutorialIndex = this.props.steps.findIndex(it => it === id);
    this.setState({ tutorialIndex });
  };

  props: {
    autoStart?: boolean,
    steps: string[],
    children: any,
  };

  render() {
    const { children, steps } = this.props;
    const { tutorialIndex } = this.state;
    const { onTutorialAdvance, onTutorialDismiss, onTutorialJump } = this;

    const context = {
      tutorialIndex,
      onTutorialAdvance,
      onTutorialDismiss,
      onTutorialJump,
      tutorialSteps: steps,
    };

    return (
      <TutorialContext.Provider value={context}>
        {children}
      </TutorialContext.Provider>
    );
  }
}
