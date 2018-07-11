// @flow
/**
 *
 * Tutorial
 *
 */
import classnames from 'classnames';
import React, { Fragment, Component } from 'react';
import Icon from '../Icon';
import LoadingSpinner from '../Loading/LoadingSpinner';
import Button from '../Form/Button';
import CheckBox from '../Form/CheckBox';
import styles from './Tutorial.scss';
import CarouselIndicator from '../Layout/CarouselIndicator';

type Props = {
  className?: string,
  showing: boolean,
  style?: any,
  tutorialStages: any,
  onClose?: Function,
  onChangeStep?: Function,
  left: number,
  top: number,
  reversed: boolean,
};

class Tutorial extends Component<Props, *> {
  static defaultProps = {
    showing: false,
    top: 0,
    left: 0,
    reversed: false,
  };

  state = {
    showing: this.props.showing,
    currentStep: 0,
    currentStage: 'intro',
    opacity: 1,
  };

  handleClose = () => {
    this.setState({
      showing: false,
    });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  takeTheTour = () => {
    this.setState({
      currentStage: 'steps',
    });
    this.nextStep();
  };

  nextStep = () => {
    this.setState({
      opacity: 0,
    });

    setTimeout(() => {
      this.doNextStep();
    }, 100);
  };

  doNextStep = () => {
    const { tutorialStages, onChangeStep } = this.props;
    const nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep,
      opacity: 1,
    });
    if (onChangeStep) {
      onChangeStep(tutorialStages.steps[nextStep]);
    }
  };

  renderIntro = (intro: any) => (
    <Fragment>
      {intro.header}
      <Button id="takeTourBtn" onClick={this.takeTheTour}>
        Take the tour
      </Button>
      <br />
      <Button link onClick={this.handleClose}>
        Not now
      </Button>
      {intro.content}
    </Fragment>
  );

  renderSteps = (i: number, steps: any) => (
    <div className={styles.tutorialWrapper}>
      <h3 className={styles.tutorialHeader}>{steps[i].header}</h3>

      {steps[i].content || <LoadingSpinner />}

      {i < steps.length - 1 ? (
        <CarouselIndicator
          className={styles.tutorialIndicator}
          length={steps.length}
          current={i}
          nextStep={this.nextStep}
        />
      ) : (
        <div className={styles.tutorialIntroFooter}>
          <div className={styles.footerCell}>
            <CheckBox
              id="neverShowAgain"
              name="neverShowAgain"
              className={styles.leftElement}
              label="Do not show me this again"
            />
          </div>
          <div className={styles.footerCell}>
            <Button className={styles.rightElement} link>
              Got it!
            </Button>
          </div>
        </div>
      )}
    </div>
  );
  renderContent = () => {
    const {
      className,
      tutorialStages,
      style,
      top,
      reversed,
      left,
    } = this.props;
    const { currentStep, currentStage, opacity } = this.state;
    const popupClasses = classnames(styles.popup, className, {
      [styles.popupCentered]: currentStage === 'intro',
    });
    let wrapperStyle = {};
    let arrowStyle = {};
    let rightOverlay = {};
    let leftOverlay = {};
    let steps = null;
    let newTop = top - 75;
    const popup = document.getElementById('tutorialPopup');

    if (currentStage === 'steps' && tutorialStages[currentStage]) {
      steps = tutorialStages[currentStage];
      if (popup && reversed) {
        newTop -= popup.getBoundingClientRect().height - 150;
        arrowStyle = {
          top: popup.getBoundingClientRect().height - 75,
        };
      }
      wrapperStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: newTop,
        left,
        right: 'auto',
        opacity,
        transition: 'all 0.4s',
      };
      rightOverlay = {
        left,
      };
      leftOverlay = {
        width: left,
      };
    } else {
      wrapperStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity,
        transition: 'all 0.4s',
      };
    }

    return (
      <Fragment>
        <div
          className={styles.transparentOverlay}
          style={leftOverlay}
          onClick={this.handleClose}
        />
        <div
          className={styles.overlay}
          style={rightOverlay}
          onClick={this.handleClose}
        />
        <div style={wrapperStyle}>
          <div className={popupClasses} id="tutorialPopup" style={style}>
            <Icon
              className={styles.close}
              name="Cross"
              onClick={this.handleClose}
            />
            {steps
              ? this.renderSteps(currentStep, steps)
              : this.renderIntro(tutorialStages[currentStage])}
          </div>
          {steps && (
            <Icon
              className={classnames(styles.arrow, {
                [styles.reversed]: reversed,
              })}
              style={arrowStyle}
              name="CurvedArrow"
            />
          )}
        </div>
      </Fragment>
    );
  };
  render() {
    const { tutorialStages } = this.props;
    if (!tutorialStages) {
      return null;
    }
    const classes = classnames(styles.outer, {
      [styles.showing]: this.state.showing,
    });
    return <div className={classes}>{this.renderContent()}</div>;
  }
}

export default Tutorial;
