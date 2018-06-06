import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip as Tippy } from 'react-tippy';
import PopoverDisplay from './PopoverDisplay';

let currentId = 0;

function nextId() {
  currentId += 1;
  return `he-tooltip=${currentId}`;
}

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

  id = nextId();

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
      <Tippy
        interactive={!tooltip}
        delay={100}
        hideDelay={300}
        interactiveBorder={16}
        trigger={triggerOnClick ? 'click' : 'mouseenter'}
        html={
          <PopoverDisplay light={light} className={className} tooltip={tooltip}>
            {content}
          </PopoverDisplay>
        }
        position={preferRight ? 'bottom-end' : 'bottom-start'}
      >
        {children}
      </Tippy>
    );
  }
}
