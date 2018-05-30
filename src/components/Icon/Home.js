import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { icon } from './Icon.scss'

export default function Help (props) {
  const {className, ...restProps} = props

  return (
    <svg className={classNames(className, icon)} {...restProps} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(1.000000, 1.500000)">
        <path d="M 3.984375,9.9863281 A 1.0001,1.0001 0 0 0 3,11 v 10 a 1.0001,1.0001 0 0 0 1,1 h 5 a 1.0001,1.0001 0 0 0 1,-1 v -7 h 2 v 7 a 1.0001,1.0001 0 0 0 1,1 h 5 a 1.0001,1.0001 0 0 0 1,-1 V 11 a 1.0001,1.0001 0 1 0 -2,0 v 9 H 14 V 13 A 1.0001,1.0001 0 0 0 13,12 H 9 a 1.0001,1.0001 0 0 0 -1,1 v 7 H 5 V 11 A 1.0001,1.0001 0 0 0 3.984375,9.9863281 Z" />
        <path d="m 11.037109,-1 a 1.0001,1.0001 0 0 0 -0.708984,0.25976562 l -11,9.99999998 a 1.0001,1.0001 0 1 0 1.34375,1.4804684 L 11,1.3515625 21.328125,10.740234 a 1.0001,1.0001 0 1 0 1.34375,-1.4804684 l -11,-9.99999998 A 1.0001,1.0001 0 0 0 11.037109,-1 Z" />
      </g>
    </svg>
  )
}

Help.propTypes = {
  className: PropTypes.string
}
