import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './PopoverDisplay.module.scss';

class PopoverDisplay extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    tooltip: PropTypes.bool,
    className: PropTypes.string,
    light: PropTypes.bool,
  };

  render() {
    const { children, tooltip, className, light } = this.props;

    const tooltipStyle = tooltip && styles.tooltip;

    return (
      <div
        role="tooltip"
        className={classnames(
          styles.popover,
          tooltipStyle,
          className,
          light && styles.light,
        )}
      >
        <div className={classnames(styles.content, tooltipStyle)}>
          {children}
        </div>
      </div>
    );
  }
}

export default PopoverDisplay;
