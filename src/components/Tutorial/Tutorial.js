// @flow
/* eslint-disable react/no-multi-comp */
/**
 *
 * Tutorial
 *
 */
import classnames from 'classnames';
import * as React from 'react';
import Icon from '../Icon';
import LoadingSpinner from '../Loading/LoadingSpinner';
import Button from '../Form/Button';
import styles from './Tutorial.scss';
import CarouselIndicator from '../Layout/CarouselIndicator';

const defaultTutorialProps = {
  onTutorialAdvance: () => {},
  onTutorialDismiss: () => {},
  onTutorialJump: () => {},
  tutorialIndex: -1,
};

const TutorialContext = React.createContext(defaultTutorialProps);

export const withTutorial = (Wrapped: Function) => (props: *) => (
  <TutorialContext.Consumer>
    {tutorialProps => <Wrapped {...props} {...tutorialProps} />}
  </TutorialContext.Consumer>
);

export class TutorialHarness extends React.Component<*, *> {
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

class TutorialStepInner extends React.Component<*, *> {
  state = {
    ownDomElement: null,
  };

  receiveOwnDomElement = ownDomElement => {
    if (ownDomElement !== this.state.ownDomElement) {
      this.setState({ ownDomElement });
    }
  };

  render() {
    const {
      onTutorialAdvance,
      onTutorialDismiss,
      tutorialIndex,
      tutorialSteps,
      id,
      showCarousel,
      header,
      content,
      className,
      showArrow,
      centered,
      isIntro,
      attachTo,
    } = this.props;

    const currentStep = tutorialSteps[tutorialIndex];

    if (currentStep !== id) {
      return null;
    }

    const { ownDomElement } = this.state;

    const attachedDomElement = attachTo
      ? document.getElementById(attachTo)
      : null;

    let top = 100;
    let left = 76;
    let reversed = false;

    if (attachedDomElement) {
      console.log(`Found target`, attachedDomElement); // FIXME
      const cords = attachedDomElement.getBoundingClientRect();
      const newLeft = cords.right;
      top = cords.top + cords.height / 2;
      left = newLeft;
      reversed = cords.top > window.innerHeight / 2;
    } else {
      console.log(`No target found for`, attachTo); // FIXME
    }

    const classes = classnames(styles.outer, styles.showing);

    // TODO: handle opacity rules

    const popupClasses = classnames(styles.popup, className, {
      [styles.popupCentered]: centered,
    });
    let wrapperStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      transition: 'all 0.4s',
    };
    let arrowStyle = {};
    let rightOverlay = {};
    let leftOverlay = {};
    let newTop = top - 75;

    if (ownDomElement && reversed) {
      newTop -= ownDomElement.getBoundingClientRect().height - 150;
      arrowStyle = {
        top: ownDomElement.getBoundingClientRect().height - 75,
      };
    }
    wrapperStyle = {
      ...wrapperStyle,
      top: newTop,
      left,
      right: 'auto',
    };
    rightOverlay = {
      left,
    };
    leftOverlay = {
      width: left,
    };

    const asIntro = (
      <React.Fragment>
        {header}
        <Button id="takeTourBtn" onClick={onTutorialAdvance}>
          Take the tour
        </Button>
        <br />
        <Button link onClick={onTutorialDismiss}>
          Not now
        </Button>
        {content}
      </React.Fragment>
    );

    const asStep = (
      <div className={styles.tutorialWrapper}>
        <h3 className={styles.tutorialHeader}>{header}</h3>

        {content || <LoadingSpinner />}

        {showCarousel ? (
          <CarouselIndicator
            className={styles.tutorialIndicator}
            length={tutorialSteps.length}
            current={tutorialIndex}
            nextStep={onTutorialAdvance}
          />
        ) : (
          <div className={styles.tutorialIntroFooter}>
            <div className={styles.footerCell} />
            <div className={styles.footerCell}>
              <Button
                className={styles.rightElement}
                link
                onClick={onTutorialDismiss}
              >
                Got it!
              </Button>
            </div>
          </div>
        )}
      </div>
    );

    return (
      <div
        ref={it => {
          console.log(`${id}:`, it);
        }}
        className={classes}
      >
        <div
          className={styles.transparentOverlay}
          style={leftOverlay}
          onClick={onTutorialDismiss}
        />
        <div
          className={styles.overlay}
          style={rightOverlay}
          onClick={onTutorialDismiss}
        />
        <div style={wrapperStyle}>
          <div className={popupClasses} id="tutorialPopup">
            <Icon
              className={styles.close}
              name="Cross"
              onClick={onTutorialDismiss}
            />
            {isIntro ? asIntro : asStep}
          </div>
          {showArrow && (
            <Icon
              className={classnames(styles.arrow, {
                [styles.reversed]: reversed,
              })}
              style={arrowStyle}
              name="CurvedArrow"
            />
          )}
        </div>
      </div>
    );
  }
}

export const TutorialStep = withTutorial(TutorialStepInner);
