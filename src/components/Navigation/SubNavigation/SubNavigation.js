/*
 * SubNavigation
 */

// Vendor
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { matchPath, withRouter } from 'react-router'
import PropTypes from 'prop-types'
import Heading from '../../Layout/Heading'
import Icon from '../../Icon'
import SingleSelect from '../../Form/SingleSelect'
import classnames from 'classnames'
import isExternal from 'is-url-external'

import style from './SubNavigation.scss'

class SubNavigation extends Component {
  static propTypes = {
    item: PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      notifications: PropTypes.number,
      items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired
      }))
    }),
    locations: PropTypes.array,
    onLocationChange: PropTypes.func,
    logoutRoute: PropTypes.string.isRequired,
    location: PropTypes.object,
    locationValue: PropTypes.string,
    loading: PropTypes.bool
  }

  static defaultProps = {
    loading: false
  }

  renderItems (items) {
    const { location } = this.props

    return items.map((item, index) => {
      if (isExternal(item.route)) {
        return (
          <a target="_blank" href={item.route} className={style.item}>
            <span>{item.label}</span>
          </a>
        )
      } else {
        return (
          <NavLink
            key={index}
            className={classnames(style.item, {
              [style.selected]: matchPath(location.pathname + location.hash, { path: item.route, exact: true, strict: false }) !== null
            })}
            exact
            to={item.route}
            title={item.label}
          >
            <span>{item.label}</span>
          </NavLink>
        )
      }
    })
  }

  render () {
    const { item, loading, locations, onLocationChange, locationValue, logoutRoute } = this.props

    return (
      <div className={style.bar}>
        <div className={style.top}>
          <Heading h1 className={style.heading}>{loading ? '' : item.title}</Heading>
          <div className={style.controls}>
            {!loading && locations && locations.length > 1 &&
            (
              <span className={style.control}>
                <SingleSelect className={style.locationSelector} id="locationSelector" name="location" options={locations} onChange={onLocationChange} style={{paddingBottom: '0px'}} value={locationValue} />
              </span>
            )}
            <span className={style.control}>
              <NavLink
                key="logout"
                to={logoutRoute}
                className={style.navLink}
                title="Logout"
                target="_self"
              >
                <Icon className={style.icon} name="Logout" />Logout
              </NavLink>
            </span>
          </div>
        </div>
        {!loading && item.items && item.items.length > 0 && (
          <div className={style.items}>
            {this.renderItems(item.items)}
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(SubNavigation)
