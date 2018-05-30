import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { icon } from '../Icon.scss'

export default function ArrowUp (props) {
  const {className, ...restProps} = props

  return (
    <svg className={classNames(className, icon)} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(5.000000, 22.000000) rotate(-90.000000)">
        <path d="M16.5857864,8 L1,8 C0.44771525,8 0,7.55228475 0,7 C0,6.44771525 0.44771525,6 1,6 L16.5857864,6 L12.2928932,1.70710678 C11.9023689,1.31658249 11.9023689,0.683417511 12.2928932,0.292893219 C12.6834175,-0.0976310729 13.3165825,-0.0976310729 13.7071068,0.292893219 L19.7071068,6.29289322 C20.0976311,6.68341751 20.0976311,7.31658249 19.7071068,7.70710678 L13.7071068,13.7071068 C13.3165825,14.0976311 12.6834175,14.0976311 12.2928932,13.7071068 C11.9023689,13.3165825 11.9023689,12.6834175 12.2928932,12.2928932 L16.5857864,8 Z" />
      </g>
    </svg>
  )
}

ArrowUp.propTypes = {
  className: PropTypes.string
}
