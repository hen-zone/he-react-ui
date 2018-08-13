// @flow

import classnames from 'classnames';
import * as React from 'react';
import onClickOutside from 'react-onclickoutside';
import Cross from '../Icon/Cross';
import CurvedArrow from '../Icon/Arrows/CurvedArrow';
import FadeIn from './FadeIn';
import getCoordsForElementId from './getCoordsForElementId';
import styles from './Tutorial.scss';
import TutorialCarousel from './TutorialCarousel';
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

type Props = {
  id: string,
  centered?: boolean,
  showCarousel: boolean,
  children: any,
  className?: ?string,
  centered?: boolean,
  tutorialSteps: string[],
  onTutorialDismiss: Function,
  tutorialIndex: number,
  attachTo?: string,
};

const cancelClick = (ev: MouseEvent) => {
  ev.stopPropagation();
};
export default withTutorial(
  onClickOutside(
    class TutorialStep extends React.Component<Props, *> {
      static defaultProps = {
        showCarousel: false,
        children: null,
        className: null,
        centered: false,
      };

      state = {
        ownDomElement: null,
        top: 100,
        left: 76,
        reversed: false,
        isAttached: false,
      };

      componentWillMount() {
        this.pollAttachedElement();
        this.stopRepeating = everyFrame(this.pollAttachedElement);
      }

      componentWillUnmount() {
        if (this.stopRepeating) this.stopRepeating();
      }

      handleClickOutside = () => {
        this.props.onTutorialDismiss();
      };

      receiveOwnDomElement = ownDomElement => {
        if (ownDomElement !== this.state.ownDomElement) {
          this.setState({ ownDomElement });
        }
      };

      pollAttachedElement = () => {
        const { attachTo } = this.props;

        if (!attachTo) return;

        const coords = getCoordsForElementId(attachTo);

        if (coords) {
          const top = coords.top + coords.height / 2;
          const left = coords.right;
          const reversed = coords.top > window.innerHeight / 2;

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
          onTutorialDismiss,
          tutorialIndex,
          tutorialSteps,
          id,
          showCarousel,
          children,
          className,
          centered,
        } = this.props;

        const { top, left, reversed, isAttached, ownDomElement } = this.state;

        const currentStep = tutorialSteps[tutorialIndex];

        if (currentStep !== id) {
          return null;
        }

        const popupClasses = classnames(styles.popup, className, {
          [styles.popupCentered]: centered,
        });
        let arrowStyle = {};
        let newTop = top - 75;

        if (ownDomElement && reversed) {
          newTop -= ownDomElement.getBoundingClientRect().height - 150;
          arrowStyle = {
            top: ownDomElement.getBoundingClientRect().height - 75,
          };
        }
        const wrapperStyle = centered
          ? null
          : {
              top: newTop,
              left,
            };

        return (
          <div
            className={styles.outer}
            style={wrapperStyle}
            onClick={this.props.onTutorialDismiss}
          >
            <FadeIn>
              <div
                className={popupClasses}
                ref={this.receiveOwnDomElement}
                onClick={cancelClick}
              >
                <Cross className={styles.close} onClick={onTutorialDismiss} />

                <div className={styles.tutorialWrapper}>
                  {children}

                  {showCarousel && (
                    <TutorialCarousel className={styles.tutorialIndicator} />
                  )}
                </div>
              </div>
            </FadeIn>

            {isAttached && (
              <FadeIn>
                <CurvedArrow
                  className={classnames(styles.arrow, {
                    [styles.reversed]: reversed,
                  })}
                  style={arrowStyle}
                />
              </FadeIn>
            )}
          </div>
        );
      }
    },
  ),
);
