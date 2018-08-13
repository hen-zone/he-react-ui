// @flow
/**
 *
 * Primary Navigation
 *
 */

import React, { Component, Fragment } from 'react';
import onClickOutside from 'react-onclickoutside';
import { NavLink } from 'react-router-dom';
import HashRoute from '../../HashRoute';
import HealthEngine from '../../Icon/HealthEngine';
import LoadingStrip from '../../Loading/LoadingStrip';
import Bucket from '../Bucket';
import Slider from '../Slider';
import SubNavigation from '../SubNavigation';
import styles from './PrimaryNavigation.scss';
import type { NavItem } from '../NavItem';

function renderRoutes(
  item,
  locations,
  onLocationChange,
  locationValue,
  logoutRoute,
  onDisplayTabs,
) {
  return (
    <HashRoute
      key={`Subnav_${item.key}`}
      exact={item.exact} // Slash will match anything so we need to be exact in that case.
      path={item.route}
      render={() => (
        <SubNavigation
          item={item}
          onDisplayTabs={onDisplayTabs}
          logoutRoute={logoutRoute}
          locations={locations}
          onLocationChange={onLocationChange}
          locationValue={locationValue}
        />
      )}
    />
  );
}

type Logo = { icon: any, route: string };

type Props = {
  siteName?: string,
  bottomKeys: string[],
  logo: Logo,
  items: NavItem[],
  locations?: {}[], // TODO
  onChangeOpenKey?: Function,
  onLocationChange?: Function,
  onDisplayTabs?: Function,
  locationValue?: string,
  logoutRoute: string,
  loading?: boolean,
  children: any,
  openKey?: ?string,
  maskPage?: boolean,
};

class PrimaryNavigation extends Component<Props, *> {
  static displayName = 'PrimaryNavigation';

  static defaultProps = {
    siteName: 'HealthEngine',
    bottomKeys: [],
    logo: {
      icon: <HealthEngine className={styles.logo} inverted />,
      route: '/',
    },
    loading: false,
  };

  state = {
    openKey: (null: ?string),
  };

  getOpenKey() {
    return 'openKey' in this.props ? this.props.openKey : this.state.openKey;
  }

  setOpenKey(openKey) {
    if ('openKey' in this.props) {
      if (this.props.onChangeOpenKey) this.props.onChangeOpenKey(openKey);
    } else {
      this.setState({ openKey });
    }
  }

  closeBucket = () => {
    this.setOpenKey(null);
  };

  toggleBucket = (key: string) => {
    const openKey = this.getOpenKey();

    this.setOpenKey(key === openKey ? null : key);
  };

  handleClickOutside = () => {
    this.setOpenKey(null);
  };

  renderSliders = () => {
    const { closeBucket } = this;
    const { bottomKeys, items, siteName } = this.props;
    const openKey = this.getOpenKey();
    const topItems = items.filter(item => !bottomKeys.includes(item.key));
    const bottomItems = items.filter(item => bottomKeys.includes(item.key));

    return (
      <div className={styles.sliders}>
        {topItems.map(item => (
          <Slider
            open={openKey === item.key}
            onSelect={closeBucket}
            itemKey={item.key}
            siteName={siteName}
            {...item}
          />
        ))}
        {bottomItems.map(item => (
          <Slider
            bottom
            open={openKey === item.key}
            onSelect={closeBucket}
            itemKey={item.key}
            {...item}
          />
        ))}
      </div>
    );
  };

  renderBuckets = () => {
    const { closeBucket, toggleBucket } = this;
    const { bottomKeys, items, loading, logo } = this.props;
    const openKey = this.getOpenKey();
    const topItems = items.filter(item => !bottomKeys.includes(item.key));
    const bottomItems = items.filter(item => bottomKeys.includes(item.key));

    return (
      <div className={styles.buckets}>
        <NavLink
          className={styles.logoBucket}
          to={logo.route}
          onClick={closeBucket}
        >
          <div className={styles.logo}>{logo.icon}</div>
        </NavLink>
        {loading ? (
          <Fragment>
            <LoadingStrip className={styles.loadingBucket} />
            <LoadingStrip className={styles.loadingBucket} />
            <LoadingStrip className={styles.loadingBucket} />
            <div className={styles.bucketFiller} />
            <LoadingStrip className={styles.loadingBucket} />
            <LoadingStrip className={styles.loadingBucket} />
          </Fragment>
        ) : (
          <Fragment>
            {topItems.map(item => (
              <Bucket
                open={item.key === openKey}
                onClickParent={() => toggleBucket(item.key)}
                onClickRoute={closeBucket}
                itemKey={item.key}
                {...item}
              />
            ))}
            <div className={styles.bucketFiller} onClick={closeBucket} />
            {bottomItems.map(item => (
              <Bucket
                open={item.key === openKey}
                onClickParent={() => toggleBucket(item.key)}
                onClickRoute={closeBucket}
                itemKey={item.key}
                {...item}
              />
            ))}
          </Fragment>
        )}
      </div>
    );
  };

  renderSubNav = (
    items,
    locations,
    onLocationChange,
    locationValue,
    logoutRoute,
  ) => {
    const { loading, onDisplayTabs } = this.props;

    if (loading) {
      return (
        <SubNavigation
          loading
          logoutRoute={logoutRoute}
          onDisplayTabs={onDisplayTabs}
        />
      );
    }

    return items.map(item => {
      if (item.items && item.items.length > 0) {
        return item.items.map(child =>
          renderRoutes(
            child,
            locations,
            onLocationChange,
            locationValue,
            logoutRoute,
            onDisplayTabs,
          ),
        );
      }

      return renderRoutes(
        item,
        locations,
        onLocationChange,
        locationValue,
        logoutRoute,
        onDisplayTabs,
      );
    });
  };

  render() {
    const { closeBucket, renderBuckets, renderSliders, renderSubNav } = this;
    const {
      items,
      loading,
      locations,
      onLocationChange,
      locationValue,
      logoutRoute,
      children,
      maskPage,
    } = this.props;

    return (
      <div className={styles.outer}>
        <div className={styles.nav}>
          {renderBuckets()}
          {!loading && renderSliders()}
        </div>
        <div className={styles.spacer} />
        <div className={styles.content} onClick={closeBucket}>
          {renderSubNav(
            items,
            locations,
            onLocationChange,
            locationValue,
            logoutRoute,
          )}
          <div className={styles.children}>
            {children}
            {maskPage && <div className={styles.overlay} />}
          </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(PrimaryNavigation);
