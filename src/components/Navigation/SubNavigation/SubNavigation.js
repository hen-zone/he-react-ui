// @flow
/*
 * SubNavigation
 */

// Vendor
import classnames from 'classnames';
import isAbsoluteUrl from 'is-absolute-url';
import React, { Component } from 'react';
import { matchPath, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import SingleSelect from '../../Form/SingleSelect';
import Logout from '../../Icon/Logout';
import LoadingStrip from '../../Loading/LoadingStrip';
import style from './SubNavigation.scss';
import type { NavItem } from '../NavItem';

type Option = { value: any, label: string };

type Props = {
  item?: NavItem,
  locations?: Option[],
  onLocationChange?: Function,
  onDisplayTabs?: Function,
  logoutRoute: string,
  location: Location,
  locationValue?: string,
  loading?: boolean,
};

class SubNavigation extends Component<Props> {
  static defaultProps = {
    loading: false,
  };

  componentDidMount() {
    this.notifyTabDisplayChange();
  }

  componentDidUpdate(prevProps) {
    const prevItems = prevProps.item && prevProps.item.items;
    const currentItems = this.props.item && this.props.item.items;

    if (prevItems !== currentItems) {
      this.notifyTabDisplayChange();
    }
  }

  notifyTabDisplayChange() {
    const { onDisplayTabs } = this.props;
    if (onDisplayTabs && this.shouldDisplayTabs()) {
      onDisplayTabs();
    }
  }

  shouldDisplayTabs() {
    const { item, loading } = this.props;
    return !loading && item && item.items && item.items.length > 0;
  }

  renderItems(items) {
    const { location } = this.props;

    if (!items) return [];

    return items.map(item => {
      if (isAbsoluteUrl(item.route)) {
        return (
          <a target="_blank" href={item.route} className={style.item}>
            <span>{item.label}</span>
          </a>
        );
      }
      return (
        <NavLink
          key={item.key}
          className={classnames(style.item, {
            [style.selected]:
              matchPath(location.pathname + location.hash, {
                path: item.route,
                exact: item.exact || typeof item.exact === 'undefined', // Default to true
                strict: false,
              }) !== null,
          })}
          exact
          to={item.route}
          title={item.label}
        >
          <span>{item.label}</span>
        </NavLink>
      );
    });
  }

  render() {
    const {
      item,
      loading,
      locations,
      onLocationChange,
      locationValue,
      logoutRoute,
    } = this.props;

    const displayTabs = this.shouldDisplayTabs();

    return (
      <div className={style.bar}>
        <div className={style.top}>
          {loading ? (
            <div className={style.heading}>
              <LoadingStrip className={style.loadingHeading} />
            </div>
          ) : (
            <h2 className={style.heading}>{item ? item.title : ''}</h2>
          )}
          {(loading && (
            <span className={style.control}>
              <LoadingStrip className={style.loadingLocation} />
            </span>
          )) ||
            (locations &&
              ((locations.length > 1 && (
                <span className={classnames(style.control, style.selector)}>
                  <SingleSelect
                    id="locationSelector"
                    name="location"
                    options={locations}
                    onChange={onLocationChange}
                    value={locationValue}
                    fill
                  />
                </span>
              )) ||
                (locations.length === 1 && (
                  <span className={style.control}>{locations[0].label}</span>
                ))))}
          <span className={classnames(style.control, style.logout)}>
            <NavLink
              key="logout"
              to={logoutRoute}
              className={style.navLink}
              title="Logout"
              target="_self"
            >
              <Logout className={style.icon} />Logout
            </NavLink>
          </span>
        </div>
        {displayTabs && (
          <div className={style.items}>
            {this.renderItems(item ? item.items : [])}
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SubNavigation);
