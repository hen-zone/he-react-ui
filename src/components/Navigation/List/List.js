/**
 *
 * Navigation List
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { matchPath } from 'react-router';
import { NavLink } from 'react-router-dom';
import styles from './List.scss';

const SUPPORTED_BADGES = ['NEW', 'FREE'];

function renderBadge(item) {
  if (item.notifications > 0) {
    return (
      <div className={classnames(styles.badge, styles.notification)}>
        {item.notifications}
      </div>
    );
  } else if (item.badge) {
    return (
      <div
        className={classnames(styles.badge, {
          [styles.free]: item.badge === 'FREE',
          [styles.new]: item.badge === 'NEW',
        })}
      >
        {item.badge}
      </div>
    );
  }
  return null;
}

class List extends Component {
  static propTypes = {
    itemKey: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired,
        badge: PropTypes.oneOf(SUPPORTED_BADGES),
        notifications: PropTypes.number,
      }),
    ),
    className: PropTypes.string,
    onSelect: PropTypes.func,
  };

  static defaultProps = {
    className: '',
    onSelect: () => null,
  };

  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(item) {
    const { onSelect } = this.props;
    const current =
      matchPath(window.location.pathname + window.location.hash, {
        path: item.route,
      }) !== null;

    return (
      <NavLink
        className={classnames(styles.item, { [styles.current]: current })}
        activeClassName={styles.current}
        key={item.key}
        to={item.route}
        onClick={onSelect}
      >
        {item.label}
        {renderBadge(item)}
      </NavLink>
    );
  }

  render() {
    const { renderItem } = this;
    const { className, itemKey, title, items } = this.props;

    return (
      <div className={className} key={itemKey}>
        {items && (
          <Fragment>
            <span className={styles.heading}>{title}</span>
            {items.map(item => renderItem(item))}
          </Fragment>
        )}
      </div>
    );
  }
}

export default List;
