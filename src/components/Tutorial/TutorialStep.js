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
import withTutorial from './withTutorial';

export default withTutorial(
  class TutorialStep extends React.Component<*, *> {
    state = {
      ownDomElement: null,
      top: 100,
      left: 76,
      reversed: false,
      isAttached: false,
    };

    componentWillMount() {
      this.attachmentPollId = setInterval(this.pollAttachedElement, 200);
    }

    componentWillUnmount() {
      if (this.attachmentPollId) clearInterval(this.attachmentPollId);
    }

    receiveOwnDomElement = ownDomElement => {
      if (ownDomElement !== this.state.ownDomElement) {
        this.setState({ ownDomElement });
      }
    };

    pollAttachedElement = () => {
      const { attachTo } = this.props;

      const attachedDomElement = attachTo
        ? document.getElementById(attachTo)
        : null;

      if (attachedDomElement) {
        const cords = attachedDomElement.getBoundingClientRect();
        const top = cords.top + cords.height / 2;
        const left = cords.right;
        const reversed = cords.top > window.innerHeight / 2;

        if (
          top !== this.state.top ||
          left !== this.state.left ||
          reversed !== this.state.reversed
        ) {
          this.setState({ top, left, reversed, isAttached: true });
        }
      }
    };

    attachmentPollId = null;

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
        centered,
        isIntro,
      } = this.props;

      const currentStep = tutorialSteps[tutorialIndex];

      if (currentStep !== id) {
        return null;
      }

      const { ownDomElement } = this.state;
      const { top, left, reversed, isAttached } = this.state;

      const classes = classnames(styles.outer, styles.showing);

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
      const rightOverlay = {
        left,
      };
      const leftOverlay = {
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
        <div className={classes}>
          <div
            className={styles.transparentOverlay}
            style={leftOverlay}
            onClick={onTutorialDismiss}
          />
          <div
            className={styles.transparentOverlay}
            style={rightOverlay}
            onClick={onTutorialDismiss}
          />
          <div style={wrapperStyle}>
            <div className={popupClasses}>
              <Icon
                className={styles.close}
                name="Cross"
                onClick={onTutorialDismiss}
              />
              {isIntro ? asIntro : asStep}
            </div>
            {isAttached && (
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
  },
);
