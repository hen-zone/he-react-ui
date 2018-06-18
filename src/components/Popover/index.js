import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip as Tippy } from 'react-tippy';
import style from './index.scss';
import PopoverDisplay from './PopoverDisplay';

export default class Popover extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    preferRight: PropTypes.bool,
    triggerOnClick: PropTypes.bool,
    tooltip: PropTypes.bool,
    light: PropTypes.bool,
    className: PropTypes.string,
  };

  state = {
    fullyMounted: false,
  };

  notifyMount = node => {
    if (node) {
      this.setState({ fullyMounted: true });
    }
  };

  render() {
    const {
      preferRight,
      content,
      children,
      triggerOnClick,
      tooltip,
      className,
      light,
    } = this.props;

    return (
      <React.Fragment>
        <Tippy
          disabled={!this.state.fullyMounted}
          interactive={!tooltip}
          delay={100}
          hideDelay={300}
          interactiveBorder={16}
          trigger={triggerOnClick ? 'click' : 'mouseenter'}
          html={
            <PopoverDisplay
              light={light}
              className={className}
              tooltip={tooltip}
            >
              {content}
            </PopoverDisplay>
          }
          position={preferRight ? 'bottom-end' : 'bottom-start'}
        >
          {children}
        </Tippy>

        {!this.fullyMounted && (
          <span ref={this.notifyMount} className={style.hidden} />
        )}
      </React.Fragment>
    );
  }
}
