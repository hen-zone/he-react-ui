// @flow

/**
 *
 * ActionSet
 *
 */

import classnames from 'classnames';
import React from 'react';
import onClickOutside from 'react-onclickoutside';
import Ellipsis from '../../Icon/Ellipsis';
import style from './ActionSet.scss';

type Props = {
  children: any,
  expanded?: boolean,
  className?: string,
  eventTypes?: string | Array<string>,
  outsideClickIgnoreClass?: string,
  preventDefault?: boolean,
  stopPropagation?: boolean,
  disableOnClickOutside?: Function,
  enableOnClickOutside?: Function,
};

class ActionSet extends React.Component<Props, *> {
  static defaultProps = {
    className: '',
    expanded: false,
  };

  state = {
    open: false,
  };

  close = () => {
    this.setState({ open: false });
  };

  open = () => {
    this.setState({ open: true });
  };

  handleClickOutside = () => {
    this.close();
  };

  render() {
    const {
      children,
      className,
      expanded,
      eventTypes,
      outsideClickIgnoreClass,
      preventDefault,
      stopPropagation,
      disableOnClickOutside,
      enableOnClickOutside,
      ...rest
    } = this.props;
    const { open } = this.state;
    const expandable = children.length > 2 && !expanded;
    const classes = classnames(
      style.outer,
      {
        [style.expandable]: expandable,
        [style.open]: open,
      },
      className,
    );

    return (
      <div
        className={classes}
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        {...rest}
      >
        {expandable && (
          <Ellipsis
            className={style.ellipsis}
            width={36}
            height={36}
            onClick={this.open}
          />
        )}
        <div className={style.actions}>
          {React.Children.map(children, (child, i) => (
            <div key={i} className={style.action} onClick={this.close}>
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default onClickOutside(ActionSet);
