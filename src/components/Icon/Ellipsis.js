import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { icon } from './Icon.scss'

export default function Ellipsis (props) {
  const { className, ...restProps } = props

  return (
    <svg className={classNames(className, icon)} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 8.000000)">
        <circle cx="2" cy="2" r="2" />
        <circle cx="10" cy="2" r="2" />
        <circle cx="18" cy="2" r="2" />
      </g>
    </svg>
  )
}

Ellipsis.propTypes = {
  className: PropTypes.string
}
