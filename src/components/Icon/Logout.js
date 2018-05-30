import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { icon } from './Icon.scss'

export default function Logout (props) {
  const { className, ...restProps } = props

  return (
    <svg className={classNames(className, icon)} {...restProps} viewBox="0 1 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path transform="translate(0,1)" d="M 7.5 0.66601562 C 6.6774686 0.66601562 6 1.3434842 6 2.1660156 L 6 5.1660156 L 7 5.1660156 L 7 2.1660156 C 7 1.884547 7.2185314 1.6660156 7.5 1.6660156 L 14.5 1.6660156 C 14.781469 1.6660156 15 1.884547 15 2.1660156 L 15 14.166016 C 15 14.447484 14.781469 14.666016 14.5 14.666016 L 7.5 14.666016 C 7.2185314 14.666016 7 14.447484 7 14.166016 L 7 11.166016 L 6 11.166016 L 6 14.166016 C 6 14.988547 6.6774686 15.666016 7.5 15.666016 L 14.5 15.666016 C 15.322531 15.666016 16 14.988547 16 14.166016 L 16 2.1660156 C 16 1.3434842 15.322531 0.66601562 14.5 0.66601562 L 7.5 0.66601562 z M 3.1464844 4.8125 L -0.20703125 8.1660156 L 3.1464844 11.519531 L 3.8535156 10.8125 L 1.7070312 8.6660156 L 11.5 8.6660156 L 11.5 7.6660156 L 1.7070312 7.6660156 L 3.8535156 5.5195312 L 3.1464844 4.8125 z " />
    </svg>
  )
}

Logout.propTypes = {
  className: PropTypes.string
}
