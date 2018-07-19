// @flow

import classnames from 'classnames';
import * as React from 'react';
import Button from '../Form/Button';
import Icon from '../Icon';
import CarouselIndicator from '../Layout/CarouselIndicator';
import styles from './Tutorial.scss';
import withTutorial from './withTutorial';

function everyFrame(handler) {
  let stopped = false;

  function repeat() {
    if (!stopped) {
      handler();
      requestAnimationFrame(repeat);
    }
  }

  repeat();

  return function stop() {
    stopped = true;
  };
}

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
      this.stopRepeating = everyFrame(this.pollAttachedElement);
    }

    componentWillUnmount() {
      if (this.stopRepeating) this.stopRepeating();
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

    stopRepeating = null;

    render() {
      const {
        onTutorialAdvance,
        onTutorialDismiss,
        tutorialIndex,
        tutorialSteps,
        id,
        showCarousel,
        children,
        className,
        centered,
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
        // transition: 'all 0.4s',
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
              <div className={styles.tutorialWrapper}>
                {children}

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
