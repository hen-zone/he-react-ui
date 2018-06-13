/**
 *
 * Primary Navigation
 *
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import onClickOutside from 'react-onclickoutside';
import { NavLink } from 'react-router-dom';
import HashRoute from '../../HashRoute';
import Icon from '../../Icon';
import LoadingStrip from '../../Loading/LoadingStrip';
import Bucket from '../Bucket';
import Slider from '../Slider';
import SubNavigation from '../SubNavigation';
import styles from './PrimaryNavigation.scss';

const SUPPORTED_BADGES = ['NEW', 'FREE'];

function renderRoutes(
  item,
  locations,
  onLocationChange,
  locationValue,
  logoutRoute,
) {
  return (
    <HashRoute
      key={`Subnav_${item.key}`}
      exact={item.exact} // Slash will match anything so we need to be exact in that case.
      path={item.route}
      render={() => (
        <SubNavigation
          item={item}
          logoutRoute={logoutRoute}
          locations={locations}
          onLocationChange={onLocationChange}
          locationValue={locationValue}
        />
      )}
    />
  );
}
class PrimaryNavigation extends Component {
  static propTypes = {
    bottomKeys: PropTypes.arrayOf(PropTypes.string),
    logo: PropTypes.shape({
      icon: PropTypes.any.isRequired,
      route: PropTypes.string.isRequired,
    }),
    items: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        route: PropTypes.string,
        items: PropTypes.arrayOf(
          PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            route: PropTypes.string.isRequired,
            badge: PropTypes.oneOf(SUPPORTED_BADGES),
            notifications: PropTypes.number,
            items: PropTypes.arrayOf(
              PropTypes.shape({
                key: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                route: PropTypes.string.isRequired,
              }),
            ),
          }),
        ),
      }),
    ).isRequired,
    locations: PropTypes.array,
    onLocationChange: PropTypes.func,
    locationValue: PropTypes.string,
    logoutRoute: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    bottomKeys: [],
    logo: {
      icon: <Icon className={styles.logo} name="HealthEngine" inverted />,
      route: '/',
    },
    loading: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      openKey: null,
    };

    this.closeBucket = this.closeBucket.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.renderBuckets = this.renderBuckets.bind(this);
    this.renderSliders = this.renderSliders.bind(this);
    this.toggleBucket = this.toggleBucket.bind(this);
    this.renderSubNav = this.renderSubNav.bind(this);
  }

  closeBucket() {
    this.setState({ openKey: null });
  }

  toggleBucket(key) {
    const { openKey } = this.state;

    this.setState({ openKey: key === openKey ? null : key });
  }

  handleClickOutside = () => {
    this.setState({ openKey: null });
  };

  renderSliders() {
    const { closeBucket } = this;
    const { bottomKeys, items } = this.props;
    const { openKey } = this.state;
    const topItems = items.filter(item => !bottomKeys.includes(item.key));
    const bottomItems = items.filter(item => bottomKeys.includes(item.key));

    return (
      <div className={styles.sliders}>
        {topItems.map(item => (
          <Slider
            open={openKey === item.key}
            onSelect={closeBucket}
            itemKey={item.key}
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
  }

  renderBuckets() {
    const { closeBucket, toggleBucket } = this;
    const { bottomKeys, items, loading, logo } = this.props;
    const { openKey } = this.state;
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
            <LoadingStrip
              className={classnames(styles.loadingBucket, styles.bottom)}
            />
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
  }

  renderSubNav(items, locations, onLocationChange, locationValue, logoutRoute) {
    const { loading } = this.props;

    if (loading) {
      return <SubNavigation loading logoutRoute={logoutRoute} />;
    }

    return items.map(item => {
      switch (item.items && item.items.length > 0) {
        case true:
          return item.items.map(child =>
            renderRoutes(
              child,
              locations,
              onLocationChange,
              locationValue,
              logoutRoute,
            ),
          );
        default:
          return renderRoutes(
            item,
            locations,
            onLocationChange,
            locationValue,
            logoutRoute,
          );
      }
    });
  }

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
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(PrimaryNavigation);
