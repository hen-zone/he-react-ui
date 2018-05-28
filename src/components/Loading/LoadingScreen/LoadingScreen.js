import React from 'react'
import PropTypes from 'prop-types'
import style from './LoadingScreen.module.scss'

export default class LoadingScreen extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  static defaultProps = {
    children: null
  }

  render () {
    const { children } = this.props
    return (
      <div className={style.loadingContainer}>
        <div className={style.pulseButton} />
        <div className={style.pulseButton2}>
          {children}
        </div>
      </div>
    )
  }
}
